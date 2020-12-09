<template>
  <div
    class="card"
    :style="{ width: width }"
  >
    <div class="card-header">
      <slot name="card-header" />
    </div>
    <div class="card-body">
      <slot name="card-body" />
    </div>
    <div class="card-footer">
      <slot name="card-footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: all 0.25s;
  border: 1px solid #dee2e6;
  &:hover {
    transform: translateY(-10px);
    transition: all 0.25s;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  }
}

.card-body {
  padding: 1rem;
}
</style>
