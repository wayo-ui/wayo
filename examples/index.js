import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Wayo from '@/index';

Vue.use(VueRouter);
Vue.use(Wayo);

const Router = new VueRouter({
  esModule: false,
  mode: 'history',
  routes: [{
    path: '/button',
    component: () => import('./routers/button.vue')
  }]
});

new Vue({
  el: '#app',
  template: '<app></app>',
  router: Router,
  components: {
    App
  }
});