import { type TaskType } from './TaskArray';
import { TaskListContainer } from './TaskListContainer';

export class TaskList {
  public name: string;

  constructor(_name: string) {
    this.name = _name;
  }
}

type CreateTaskType = {
  endTime: string;
  descriptions: string;
  isComplete: boolean;
};

class TaskListService {
  private taskListMap = new Map<number, TaskListContainer>();
  private idCounter = 0;

  public init() {
    const data = localStorageService().getAllItems<any>();

    data.forEach((item) => {
      const container = new TaskListContainer(this.idCounter, new TaskList(item.taskList.name));
      container.setTasks(item.taskArray.taskArray);
      this.taskListMap.set(this.idCounter, container);
      this.idCounter += 1;
    });
  }

  public create(name: string) {
    const currID = this.idCounter;
    const taskList = new TaskList(name);
    const taskListContainer = new TaskListContainer(currID, taskList);
    this.taskListMap.set(currID, taskListContainer);
    localStorageService().setItem<TaskListContainer>(String(currID), taskListContainer);
    this.idCounter += 1;
    console.log(this.taskListMap, 'NESW');
    return JSON.stringify({
      id: taskListContainer.ID,
      name: taskListContainer.TaskList.name,
      taskArray: taskListContainer.TaskArray
    });
  }

  public createTask(id: number, task: CreateTaskType) {
    const taskListContainer = this.taskListMap.get(id);
    if (taskListContainer) {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based in JavaScript
      const year = date.getFullYear();
      const time = `${day}-${month}-${year}`;

      const taskType: TaskType = {
        timeStamp: time,
        endTime: task.endTime,
        descriptions: task.descriptions,
        isComplete: task.isComplete
      };

      taskListContainer.addTask(taskType);
      localStorageService().setItem<TaskListContainer>(String(id), taskListContainer);
      return JSON.stringify({
        id: taskListContainer.ID,
        name: taskListContainer.TaskList.name,
        taskArray: taskListContainer.TaskArray
      });
    }
    return JSON.stringify([]);
  }

  public editTitleToTaskList(id: number, newName: string) {
    const taskListContainer = this.taskListMap.get(id);
    if (taskListContainer) {
      taskListContainer.setName(newName);
      localStorageService().setItem<TaskListContainer>(String(id), taskListContainer);
      return JSON.stringify({
        id: taskListContainer.ID,
        name: taskListContainer.TaskList.name,
        taskArray: taskListContainer.TaskArray
      });
    }
    return JSON.stringify([]);
  }

  public GetAllTaskList() {
    const arr = Array.from(this.taskListMap.values()).map((item) => {
      console.log(item);
      return {
        id: item.ID,
        name: item.TaskList.name,
        taskArray: item.TaskArray
      };
    });

    return JSON.stringify(arr);
  }

  public deleteTaskList(id: number) {
    if (this.taskListMap.has(id)) {
      localStorageService().removeItem(String(id));
      this.taskListMap.delete(id);
    }

    return this.GetAllTaskList();
  }

  public editTask(
    taskListID: number,
    taskID: number,
    data: { endTime: string; descriptions: string }
  ) {
    const taskList = this.taskListMap.get(taskListID);
    if (!taskList) return JSON.stringify([]);

    const task = taskList.getTaskByID(taskID);
    if (!task) return JSON.stringify([]);
    task.endTime = data.endTime;
    task.descriptions = data.descriptions;

    localStorageService().setItem<TaskListContainer>(String(taskListID), taskList);

    return this.GetAllTaskList();
  }

  public taskiSComplete = (taskListID: number, taskID: number, isCompleted: boolean) => {
    const taskList = this.taskListMap.get(taskListID);
    if (!taskList) return JSON.stringify([]);

    const task = taskList.getTaskByID(taskID);
    if (!task) return JSON.stringify([]);
    task.isComplete = isCompleted;

    localStorageService().setItem<TaskListContainer>(String(taskListID), taskList);
    return this.GetAllTaskList();
  };

  public deleteTask = (taskListID: number, taskID: number) => {
    const taskList = this.taskListMap.get(taskListID);
    if (!taskList) return JSON.stringify([]);

    taskList.deleteTaskByID(taskID);

    localStorageService().setItem<TaskListContainer>(String(taskListID), taskList);
    return this.GetAllTaskList();
  };
}

function localStorageService() {
  const setItem = <T>(key: string, item: T) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getItem = <T>(key: string) => {
    const result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result) as T;
    }

    return null;
  };

  const getAllItems = <T>() => {
    const items: T[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const item = localStorage.getItem(key);
        if (item) {
          items.push(JSON.parse(item));
        }
      }
    }
    return items;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    getAllItems,
    setItem,
    getItem,
    removeItem
  };
}

export const fakeServer = new TaskListService();
