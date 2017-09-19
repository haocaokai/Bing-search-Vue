import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Tab from '@/components/Tab';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    }
  ]
});
