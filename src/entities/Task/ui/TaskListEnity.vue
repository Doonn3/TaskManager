<template>
  <div class="task-list">
    <slot name="slot-title"></slot>

    <div class="task-list__container">
      <slot name="slot-cards"></slot>
    </div>

    <div class="task-list__bottom">
      <slot name="slot-add-button"></slot>
      <slot name="slot-delete"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-list {
  // min-width: 320px;
  // max-width: 1000px;
  padding: 5px;

  background-color: rgb(71, 71, 71);

  border-radius: 5px;

  &__container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 10px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
