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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
