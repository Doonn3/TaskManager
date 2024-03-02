import { defineStore } from 'pinia';

import { ref } from 'vue';

import {
  apiGetAllTaskList,
  apiCreateTaskList,
  apiCreateTaskToTaskList,
  apiEditTitle,
  apiDeleteTaskList,
  apiEditTask,
  apiTaskComplete,
  apiDeleteTask
} from '../api/api';
import type { TaskListType } from '../types/TaskListType';

const NAME_SPACE = 'useTaskStore';

export type TaskTypeStore = {
  endTime: string;
  descriptions: string;
  isComplete: boolean;
};

export const useTaskStore = defineStore(NAME_SPACE, () => {
  const taskList = ref<TaskListType[]>([]);

  const createTaskList = async (name: string) => {
    const result = await apiCreateTaskList(name);
    if (result instanceof Error) return;
    taskList.value.push(result);
  };

  const createTask = async (taskListID: number, task: TaskTypeStore) => {
    const data = await apiCreateTaskToTaskList(taskListID, task);

    if (data instanceof Error) return;

    // Найти индекс существующего элемента
    const index = taskList.value.findIndex((item) => item.id === taskListID);

    // Если элемент найден, обновить его
    if (index !== -1) {
      // Vue.set(taskList.value, index, data); // Если вы используете Vue 2
      taskList.value.splice(index, 1, data); // Если вы используете Vue 3
    }
  };

  const getTasksList = async () => {
    const data = await apiGetAllTaskList();
    if (data instanceof Error) return;
    console.log(data);
    taskList.value = data;
  };

  const editTitleTaskList = async (taskListID: number, text: string) => {
    const data = await apiEditTitle(taskListID, text);
    if (data instanceof Error) return;

    // Найти индекс существующего элемента
    const index = taskList.value.findIndex((item) => item.id === taskListID);

    // Если элемент найден, обновить его
    if (index !== -1) {
      // Vue.set(taskList.value, index, data); // Если вы используете Vue 2
      taskList.value.splice(index, 1, data); // Если вы используете Vue 3
    }
  };

  const deleteTaskList = async (taskListID: number) => {
    const data = await apiDeleteTaskList(taskListID);
    if (data instanceof Error) return;
    taskList.value = data;
  };

  const editTask = async (
    taskListID: number,
    taskID: number,
    _data: { endTime: string; descriptions: string }
  ) => {
    const data = await apiEditTask(taskListID, taskID, _data);
    if (data instanceof Error) return;
    taskList.value = data;
  };

  const isCompleteTask = async (taskListID: number, taskID: number, isComplete: boolean) => {
    const data = await apiTaskComplete(taskListID, taskID, isComplete);
    if (data instanceof Error) return;
    taskList.value = data;
  };

  const deleteTask = async (taskListID: number, taskID: number) => {
    const data = await apiDeleteTask(taskListID, taskID);
    if (data instanceof Error) return;
    taskList.value = data;
  };

  return {
    getTasksList,
    createTaskList,
    createTask,
    editTitleTaskList,
    deleteTaskList,
    editTask,
    isCompleteTask,
    deleteTask,
    taskList
  };
});
