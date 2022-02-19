<template>
  <div class="auth-layout">
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <div class="auth-wrapper auth-basic px-2">
            <div class="auth-inner my-2">
              <div class="card mb-0">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth',
  mounted() {
    document.body.classList.add(
      'pace-done',
      'horizontal-layout',
      'horizontal-menu',
      'blank-page',
      'navbar-floating',
      'footer-static'
    );
  },
  destroyed() {
    document.body.classList.remove(
      'pace-done',
      'horizontal-layout',
      'horizontal-menu',
      'blank-page',
      'navbar-floating',
      'footer-static'
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
</style>
