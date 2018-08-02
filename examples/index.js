import './styles/index.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Wayo from 'wayo';
import Home from './routers/home.vue';

Vue.use(VueRouter);
Vue.use(Wayo);

const Router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/button',
    name: 'button',
    component: () => import('./routers/button.vue')
  },{
    path: '/icon',
    name: 'icon',
    component: () => import('./routers/icon.vue')
  },{
    path: '/stripe',
    name: 'stripe',
    component: () => import('./routers/stripe.vue')
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
    path: '/block',
    name: 'block',
    component: () => import('./routers/block.vue')
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
  },{
    path: '/imageviewer',
    name: 'imageviewer',
    component: () => import('./routers/imageviewer.vue')
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