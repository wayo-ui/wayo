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
  },{
    path: '/tag',
    name: 'tag',
    component: () => import('./routers/tag.vue')
  },{
    path: '/rate',
    name: 'rate',
    component: () => import('./routers/rate.vue')
  },{
    path: '/flex',
    name: 'flex',
    component: () => import('./routers/flex.vue')
  },{
    path: '/lath',
    name: 'lath',
    component: () => import('./routers/lath.vue')
  },{
    path: '/separator',
    name: 'separator',
    component: () => import('./routers/separator.vue')
  },{
    path: '/card',
    name: 'card',
    component: () => import('./routers/card.vue')
  },{
    path: '/tabs',
    name: 'tabs',
    component: () => import('./routers/tabs.vue')
  },{
    path: '/toast',
    name: 'toast',
    component: () => import('./routers/toast.vue')
  },{
    path: '/showcase',
    name: 'showcase',
    component: () => import('./routers/showcase.vue')
  },{
    path: '/slides',
    name: 'slides',
    component: () => import('./routers/slides.vue')
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