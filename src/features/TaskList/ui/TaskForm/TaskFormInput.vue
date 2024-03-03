<script lang="ts" setup>
import { computed } from 'vue';
import type { FromInputType } from './types';

const props = defineProps<FromInputType>();

const emit = defineEmits(['update:modelValue']);

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>

<template>
  <div class="form-input">
    <label class="form-input__title" :for="id">{{ label }}</label>
    <input
      :id="id"
      class="form-input__input"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-input {
  &__title {
    font-size: 20px;

    color: white;
  }

  &__input {
    padding: 5px;
  }
}
</style>
