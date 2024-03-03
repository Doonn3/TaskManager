<script lang="ts" setup>
import { ref } from 'vue';

const title = ref<string>('');
const isClickCreateTask = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'emit:create', text: string): void;
}>();

const swap = () => {
  isClickCreateTask.value = !isClickCreateTask.value;
};

const onClickCreate = () => {
  if (!title.value) return;
  emit('emit:create', title.value);
  swap();
};

const onClickCancel = () => {
  swap();
};
</script>

<template>
  <div class="task-list">
    <template v-if="!isClickCreateTask">
      <button class="btn" @click="isClickCreateTask = !isClickCreateTask">+ Добавить список</button>
    </template>

    <template v-if="isClickCreateTask">
      <div class="list-create">
        <input
          class="list-create__input"
          type="text"
          placeholder="В ведите название"
          v-model="title"
        />

        <div class="list-create__block">
          <button class="btn" @click="onClickCreate">Добавить список</button>
          <button class="btn" @click="onClickCancel">X</button>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.task-list {
  max-width: 300px;
  padding: 10px;

  background-color: rgb(71, 71, 71);

  border-radius: 5px;
}

.list-create {
  display: flex;
  flex-direction: column;

  gap: 10px;

  &__input {
    width: 100%;

    padding: 10px;

    font-size: 20px;
    color: black;
  }

  &__block {
    display: flex;
    gap: 10px;
  }
}
</style>
