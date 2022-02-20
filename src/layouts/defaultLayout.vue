<template>
  <div class="default-layout">
    <div
      id="wrapper"
      class="app-content content file-manager-application mx-auto"
      style="padding: 0"
    >
      <div id="user-profile">
        <div class="content-area-wrapper container-xxl p-0 mx-auto h-auto">
          <ProfileHeader></ProfileHeader>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '@/views/profile/ProfileHeader.vue';

export default {
  name: 'default-layout',
  components: { ProfileHeader },
  mounted() {
    document.body.classList.add(
      'pace-done',
      'horizontal-layout',
      'horizontal-menu',
      'content-left-sidebar',
      'navbar-floating',
      'footer-static',
      'menu-expanded'
    );
  },
  destroyed() {
    document.body.classList.remove(
      'pace-done',
      'horizontal-layout',
      'horizontal-menu',
      'content-left-sidebar',
      'navbar-floating',
      'footer-static',
      'menu-expanded'
    );
  }
};
</script>

<style lang="scss">
@import '../assets/scss/vuexy/css/bootstrap.css';
@import '../assets/scss/vuexy/css/bootstrap-extended.css';
@import '../assets/scss/vuexy/css/colors.css';
@import '../assets/scss/vuexy/css/components.css';
@import '../assets/scss/vuexy/css/themes/bordered-layout.css';
@import '../assets/scss/vuexy/css/pages/authentication.css';
@import '../assets/scss/vuexy/css/plugins/forms/form-validation.css';
@import '../assets/scss/vuexy/css/pages/ui-feather.css';
@import '../assets/scss/vuexy/css/pages/page-profile.css';
@import '../assets/scss/vuexy/css/plugins/extensions/ext-component-tree.css';
@import '../assets/scss/vuexy/css/pages/app-file-manager.css';
@import '../assets/scss/vuexy/css/plugins/forms/form-file-uploader';
</style>
