<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useTaskListStore, useSelectedTaskStore } from '@/entities/TaskList';

import { TaskList, TaskForm, TaskListCreator } from '@/features/TaskList';

const store = useTaskListStore();
const model = useSelectedTaskStore();

onMounted(() => {
  store.getTasksList();
});

const isOpenTaskForm = ref<boolean>(false);
const onCreateCard = () => {
  isOpenTaskForm.value = true;
};
const isOpenTaskFormChange = (flag: boolean) => {
  isOpenTaskForm.value = flag;
  isEditMode.value = flag;
};

const isEditMode = ref(false);
const onEditCard = () => {
  isEditMode.value = true;
  isOpenTaskForm.value = true;
};
</script>

<template>
  <main class="task-list-page">
    <section class="task-list-block">
      <TaskList @emit:create-card="onCreateCard" @emit:edit-card="onEditCard" />
      <TaskListCreator @emit:create="(text) => store.createTaskList(text)" />
    </section>
  </main>

  <template v-if="isOpenTaskForm">
    <TaskForm
      :is-editable="isEditMode"
      :task-list-id="model.selectTaskListID"
      :task-id="model.selectTaskID"
      :end-time="model.cardEditData.endTime"
      :descriptions="model.cardEditData.descriptions"
      @emit:close="isOpenTaskFormChange(false)"
      @emit:save="isOpenTaskFormChange(false)"
    />
  </template>
</template>

<style lang="scss" scoped>
.task-list-page {
  position: relative;
  padding: 20px 0;

  overflow-y: auto;
  height: 100vh;
}
.task-list-block {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 20px;

  & > * {
    flex: 0 0 320px;
    max-width: 1000px;
  }
}
</style>
