import Vue from 'vue';
import Router from 'vue-router';

import store from './store';
import Home from './views/Home.vue';
import LogIn from './views/LogIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (store.getters.loggedIn) {
          next();
        } else {
          next('/log-in');
        }
      },
    },
    {
      path: '/log-in',
      name: 'logIn',
      component: LogIn,
    },
  ],
});
