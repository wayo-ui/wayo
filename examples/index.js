import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Wayo from '@/index';

Vue.use(VueRouter);
Vue.use(Wayo);

const Router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./routers/home.vue')
  },{
    path: '/button',
    name: 'button',
    component: () => import('./routers/button.vue')
  },{
    path: '/icon',
    name: 'icon',
    component: () => import('./routers/icon.vue')
  },{
    path: '/segment',
    name: 'segment',
    component: () => import('./routers/segment.vue')
  },{
    path: '/image',
    name: 'image',
    component: () => import('./routers/image.vue')
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