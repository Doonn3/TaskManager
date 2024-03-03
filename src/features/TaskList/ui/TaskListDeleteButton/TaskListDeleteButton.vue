<script lang="ts" setup>
import { useTaskListStore } from '@/entities/TaskList';
type PropsType = {
  taskListId: number;
};

const store = useTaskListStore();

const props = defineProps<PropsType>();
</script>

<template>
  <button class="btn" @click="store.deleteTaskList(props.taskListId)">X</button>
</template>
