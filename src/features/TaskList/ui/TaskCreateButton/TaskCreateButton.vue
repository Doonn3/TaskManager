<script lang="ts" setup>
import { useSelectedTaskStore } from '@/entities/TaskList';

type PropsType = {
  taskListId: number;
};

const props = defineProps<PropsType>();

const emit = defineEmits<{
  (e: 'emit:add-card'): void;
}>();

const selectModel = useSelectedTaskStore();

const onClick = () => {
  selectModel.selectTaskListID = props.taskListId;

  emit('emit:add-card');
};
</script>

<template>
  <button class="btn" @click="onClick">+ Добавить карточку</button>
</template>
