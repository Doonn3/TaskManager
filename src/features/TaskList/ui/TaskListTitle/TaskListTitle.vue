<script lang="ts" setup>
import { useTaskListStore } from '@/entities/TaskList';
import { EditButton } from '@/shared/ui/EditButton';
import { ref } from 'vue';

type PropsType = {
  taskListId: number;
  title: string;
};

const store = useTaskListStore();

const props = defineProps<PropsType>();

const isEditClick = ref<boolean>(false);
const text = ref<string>(props.title);

const onClickEdit = () => {
  isEditClick.value = !isEditClick.value;
  if (!isEditClick.value) {
    store.editTitleTaskList(props.taskListId, text.value);
  }
};
</script>

<template>
  <div class="title-box">
    <div>
      <h2 v-if="!isEditClick" class="title-box__title">{{ props.title }}</h2>
      <input
        v-if="isEditClick"
        class="title-box__input"
        type="text"
        :placeholder="props.title"
        v-model="text"
      />
    </div>

    <EditButton @emit:click="onClickEdit" />
  </div>
</template>

<style lang="scss" scoped>
.title-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  &__title {
    font-size: 20px;
    color: white;
  }

  &__input {
    font-size: 20px;
  }
}
</style>
