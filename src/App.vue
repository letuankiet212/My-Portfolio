<template>
  <div>
    <router-view />
    <div class="loading-page" :class="!isLoading ? 'hidden' : ''"></div>
  </div>
</template>
<style lang="scss">
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 999999;
}
.hidden {
  display: none;
}
</style>
<script>
export default {
  data: () => ({
    toggle: false
  }),
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  mounted() {
    this.toggle = true;
  }
};
</script>
