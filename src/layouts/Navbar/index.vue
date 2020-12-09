<template>
  <nav
    class="navbar bg-danger"
    :class="`fixed-${fixed}`"
  >
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    fixed: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  color: #fff;
  width: 100%;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
