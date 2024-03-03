<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'emit:add-card'): void;
}>();
</script>

<template>
  <button class="btn" @click="emit('emit:add-card')">+ Добавить карточку</button>
</template>
