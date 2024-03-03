<script lang="ts" setup>
import { reactive } from 'vue';
import { type PropsType } from './types';
import TaskFormInput from './TaskFormInput.vue';
import { useTaskListStore } from '@/entities/TaskList';

const store = useTaskListStore();

const props = defineProps<PropsType>();
const model = reactive({
  endTime: props.endTime ?? '',
  descriptions: props.descriptions ?? ''
});
const emit = defineEmits<{
  (e: 'emit:save'): void;
  (e: 'emit:close'): void;
}>();

const onClickSave = () => {
  if (!model.endTime || !model.descriptions) return;

  if (props.isEditable) {
    console.log('EDIT');
    console.log(model);
    console.log(props.taskListId);
    console.log(props.taskId);
    store.editTask(props.taskListId, props.taskId, {
      endTime: model.endTime,
      descriptions: model.descriptions
    });
  } else {
    console.log('CREATE');
    store.createTask(props.taskListId, {
      endTime: model.endTime,
      descriptions: model.descriptions,
      isComplete: false
    });
  }
  emit('emit:save');
};

const onClose = () => {
  emit('emit:close');
};
</script>

<template>
  <div class="task-form" @click="onClose">
    <div class="task-form__content" @click.stop>
      <TaskFormInput
        id="endTime"
        type="date"
        label="End Time"
        placeholder="End Time"
        v-model="model.endTime"
      />

      <TaskFormInput
        id="descriptions"
        type="text"
        label="Descriptions"
        placeholder="Descriptions"
        v-model="model.descriptions"
      />
      <button class="btn" @click="onClickSave">Save</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-form {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(0, 0, 0, 0.4);

  backdrop-filter: blur(4px);

  &__content {
    display: flex;
    flex-direction: column;

    min-width: 320px;

    gap: 10px;

    padding: 10px;
    background-color: rgb(37, 37, 37);

    border: 1px solid white;

    border-radius: 5px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
