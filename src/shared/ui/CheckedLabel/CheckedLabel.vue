<script lang="ts" setup>
import { ref } from 'vue';

import CheckedIcon from '@/shared/assets/icons/CheckedIcon.vue';

type PropsType = {
  isChecked: boolean;
};

const props = defineProps<PropsType>();
const isCheked = ref(props.isChecked);
const emit = defineEmits<{
  (e: 'change', value: boolean): void;
}>();
</script>

<template>
  <label class="label">
    <input
      class="label__input"
      type="checkbox"
      v-model="isCheked"
      @change="emit('change', isChecked)"
    />

    <CheckedIcon class="label__checkmark" v-if="isCheked" />
  </label>
</template>

<style lang="scss" scoped>
.label {
  position: relative;
  display: block;
  width: 25px;
  height: 25px;

  background-color: white;

  border-radius: 100%;

  &__input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>
