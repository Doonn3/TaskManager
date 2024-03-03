<script lang="ts" setup>
import { ref } from 'vue';

import { EditButton } from '@/shared/ui/EditButton';
import { CheckedLabel } from '@/shared/ui/CheckedLabel';
import { useTaskListStore } from '@/entities/TaskList';

export type PropsType = {
  taskListId: number;
  id: number;
  timeStamp: string;
  endTime: string;
  descriptions: string;
  isComplete: boolean;
};

const store = useTaskListStore();

const props = defineProps<PropsType>();
const emit = defineEmits<{
  (e: 'emit:delete'): void;
  (e: 'emit:edit', data: { endTime: string; descriptions: string }): void;
}>();

const isChecked = ref<boolean>(props.isComplete);

const onChange = () => {
  isChecked.value = !isChecked.value;
  store.isCompleteTask(props.taskListId, props.id, isChecked.value);
};

const onDelete = () => {
  store.deleteTask(props.taskListId, props.id);
};
</script>

<template>
  <div class="card-task">
    <div class="card-task__control">
      <EditButton
        @emit:click="
          emit('emit:edit', { endTime: props.endTime, descriptions: props.descriptions })
        "
      />
      <button class="btn" @click="onDelete">X</button>
    </div>

    <div class="card-task__timestamp">
      <span>{{ props.timeStamp }}</span>
      <span>{{ props.endTime }}</span>
    </div>

    <div class="task" :class="isChecked ? 'task-complete' : ''">
      <CheckedLabel :is-checked="isChecked" @change="onChange" />
      <p class="task__text">{{ props.descriptions }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-task {
  position: relative;

  padding: 10px;
  background-color: rgb(87, 87, 87);

  border-radius: 5px;
  border: 1px solid white;

  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__edit {
    width: 30px;
    height: 30px;

    border: none;

    transition: 0.4s;

    cursor: pointer;

    &:hover {
      background-color: rgb(180, 180, 180);
    }
  }

  &__delete {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__timestamp {
    display: flex;
    justify-content: space-between;
    color: white;
  }
}

.task {
  display: flex;
  align-items: center;

  gap: 10px;

  list-style: none;

  &__item {
    display: flex;
  }

  &__text {
    font-size: 20px;
    color: white;
  }
}

.task-complete {
  text-decoration: line-through;
  color: red;
}
</style>
