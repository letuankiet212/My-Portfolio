import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const EventBus = new Vue();

Vue.prototype.$eventBus = EventBus;
Vue.prototype.$ = $;
Vue.prototype.$$ = $$;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.dispatch('onLoading', true);
  console.log(store.state.isLoading);
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  setTimeout(function () {
    store.dispatch('onLoading', false);
    console.log(store.state.isLoading);
  }, 3000);
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
