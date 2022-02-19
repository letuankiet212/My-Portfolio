import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/profile')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/product')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
