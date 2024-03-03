<script lang="ts" setup>
import { TaskListEnity, useTaskListStore, useSelectedTaskStore } from '@/entities/TaskList';
import { TaskListTitle } from './TaskListTitle';
import { CardTask } from './CardTask';
import { TaskCreateButton } from './TaskCreateButton';
import { TaskListDeleteButton } from './TaskListDeleteButton';

const store = useTaskListStore();
const model = useSelectedTaskStore();

const emit = defineEmits<{
  (e: 'emit:create-card'): void;
  (e: 'emit:edit-card'): void;
}>();

const onEdit = (taskListID: number, taskID: number, time: string, desc: string) => {
  model.selectTaskListID = taskListID;
  model.selectTaskID = taskID;
  model.cardEditData.endTime = time;
  model.cardEditData.descriptions = desc;
  emit('emit:edit-card');
};
</script>

<template>
  <TaskListEnity v-for="taskList in store.taskList" :key="taskList.id">
    <template v-slot:slot-title>
      <TaskListTitle :task-list-id="taskList.id" :title="taskList.name" />
    </template>

    <template v-slot:slot-cards>
      <CardTask
        v-for="task in taskList.taskArray"
        :key="task.id"
        :id="task.id"
        :end-time="task.endTime"
        :descriptions="task.descriptions"
        :is-complete="task.isComplete"
        :time-stamp="task.timeStamp"
        :task-list-id="taskList.id"
        @emit:edit="onEdit(taskList.id, task.id, task.endTime, task.descriptions)"
      />
    </template>

    <template v-slot:slot-add-button>
      <TaskCreateButton @emit:add-card="emit('emit:create-card')" />
    </template>

    <template v-slot:slot-delete>
      <TaskListDeleteButton :task-list-id="taskList.id" />
    </template>
  </TaskListEnity>
</template>
