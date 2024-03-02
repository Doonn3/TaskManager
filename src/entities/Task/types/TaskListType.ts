export type TaskListType = {
  id: number;
  name: string;
  taskArray: {
    id: number;
    timeStamp: string;
    endTime: string;
    descriptions: string;
    isComplete: boolean;
  }[];
};
