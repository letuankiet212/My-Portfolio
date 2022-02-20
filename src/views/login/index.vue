<template>
  <auth-layout>
    <div class="card-body">
      <h4 class="card-title mb-1">Welcome to Vuexy! 👋</h4>
      <p class="card-text mb-2">Please sign-in to your account and start the adventure</p>

      <div class="auth-login-form mt-2">
        <button
          class="btn btn-google w-100 waves-effect waves-float waves-light"
          @click="SignInWithFirebase()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import authLayout from '../../layouts/authLayout.vue';
import { APIAuth } from './_script';
export default {
  components: { authLayout },
  mixins: [APIAuth],
  methods: {
    SignInWithFirebase() {
      this.signInSocial();
    },
    async checkLogin() {
      this.getInfo();
    }
  },
  created() {
    this.checkLogin();
  }
};
</script>

<style></style>
