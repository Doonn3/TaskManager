import { Task, TaskArray, type TaskType } from './TaskArray';
import type { TaskList } from './TaskListService';

export class TaskListContainer {
  private id: number;
  private taskList: TaskList;
  private taskArray: TaskArray = new TaskArray();
  private taskArrCounter = 0;

  public get ID() {
    return this.id;
  }

  public get TaskList() {
    return this.taskList;
  }

  public get Name() {
    return this.taskList.name;
  }

  public get TaskArray() {
    return this.taskArray.Tasks;
  }

  constructor(_id: number, _taskList: TaskList) {
    this.id = _id;
    this.taskList = _taskList;
  }

  public setName(name: string) {
    this.taskList.name = name;
  }

  public addTask(task: TaskType) {
    const newTask = new Task(this.taskArrCounter, task);
    this.taskArrCounter += 1;
    return this.taskArray.addTask(newTask);
  }

  public setTasks(tasks: Task[]) {
    this.taskArray.setTasks(tasks);
  }

  public getTaskByID(id: number) {
    return this.taskArray.getTaskByID(id);
  }

  public deleteTaskByID(id: number) {
    this.taskArray.deleteTaskByID(id);
  }
}
