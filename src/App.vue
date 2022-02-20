<template>
  <div>
    <div class="loading-page" v-if="isLoading" :class="!isLoading ? 'hidden' : ''">
      <div class="progress-bar">
        <div class="progress-content"></div>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>
<style lang="scss">
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 999999;

  .progress {
    &-bar {
      width: 204px;
      height: 16px;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      overflow: unset;

      &::before {
        content: '';
        position: absolute;
        width: 115%;
        height: 150%;
        background-color: #7367f0;
        top: 50%;
        left: 50%;
        border-radius: 3px;
        transform: translate(-50%, -50%);
        box-shadow: 0px 0px 3px black;
        border: 1px solid white;
      }
    }
    &-content {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      animation: mover 1s infinite;
      background: white;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(90deg, transparent 14px, #7367f0 0);
        background-size: 21px 100%;
      }
    }
  }
  @keyframes mover {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
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
