<script lang="ts" setup>
import EditIcon from '@/shared/assets/icons/EditIcon.vue';

const emit = defineEmits<{
  (e: 'emit:click'): void;
}>();
</script>

<template>
  <button class="edit-btn" @click="emit('emit:click')">
    <EditIcon class="edit-btn__icon" />
  </button>
</template>

<style lang="scss" scoped>
.edit-btn {
  width: 25px;
  height: 25px;

  padding: 0;

  background: transparent;

  border: none;

  cursor: pointer;

  &__icon {
    width: 100%;
    height: 100%;

    stroke: white;
  }
}
</style>
