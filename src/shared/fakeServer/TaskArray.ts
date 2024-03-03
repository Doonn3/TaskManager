export type TaskType = {
  timeStamp: string;
  endTime: string;
  descriptions: string;
  isComplete: boolean;
};

export class Task {
  public id: number;

  public timeStamp: string;
  public endTime: string;
  public descriptions: string;

  public isComplete: boolean = false;

  constructor(id: number, data: TaskType) {
    const { timeStamp, endTime, descriptions, isComplete } = data;
    this.id = id;

    this.timeStamp = timeStamp;
    this.endTime = endTime;
    this.descriptions = descriptions;
    this.isComplete = isComplete;
  }
}

export class TaskArray {
  private taskArray: Task[] = [];

  public get Tasks() {
    return this.taskArray;
  }

  public addTask(task: Task) {
    this.taskArray.push(task);
    return task;
  }

  public setTasks(tasks: Task[]) {
    this.taskArray = tasks;
  }

  public getTaskByID(id: number) {
    return this.taskArray.find((task) => task.id === id) ?? null;
  }

  public deleteTaskByID(id: number) {
    this.taskArray = this.taskArray.filter((task) => task.id !== id);
  }
}
