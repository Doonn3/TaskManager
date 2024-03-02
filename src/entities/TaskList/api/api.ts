import { fakeServer } from '@/shared/fakeServer/TaskListService';
import type { TaskTypeStore } from '../store/useTaskStore';
import type { TaskListType } from '../types/TaskListType';

export async function apiGetAllTaskList() {
  try {
    const result = (await JSON.parse(fakeServer.GetAllTaskList())) as TaskListType[];
    return result;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
}

export async function apiCreateTaskList(name: string) {
  try {
    const result = (await JSON.parse(fakeServer.create(name))) as TaskListType;
    return result;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiCreateTaskToTaskList(taskListID: number, task: TaskTypeStore) {
  try {
    return (await JSON.parse(fakeServer.createTask(taskListID, task))) as TaskListType;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiEditTitle(taskListID: number, text: string) {
  try {
    return (await JSON.parse(fakeServer.editTitleToTaskList(taskListID, text))) as TaskListType;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiDeleteTaskList(taskListID: number) {
  try {
    return JSON.parse(fakeServer.deleteTaskList(taskListID)) as TaskListType[];
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiEditTask(
  taskListID: number,
  taskID: number,
  data: { endTime: string; descriptions: string }
) {
  try {
    return JSON.parse(fakeServer.editTask(taskListID, taskID, data)) as TaskListType[];
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiTaskComplete(taskListID: number, taskID: number, isComplete: boolean) {
  try {
    return JSON.parse(fakeServer.taskiSComplete(taskListID, taskID, isComplete)) as TaskListType[];
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}

export async function apiDeleteTask(taskListID: number, taskID: number) {
  try {
    return JSON.parse(fakeServer.deleteTask(taskListID, taskID)) as TaskListType[];
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}
