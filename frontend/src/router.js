import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(
        /* webpackChunkName: "main" */
        './pages/Home.vue'
      ),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import(
        /* webpackChunkName: "main" */
        './pages/Main.vue'
      ),
    },
    {
      path: '/contents',
      name: 'Contents',
      component: () => import(
        /* webpackChunkName: "main" */
        './pages/Contents.vue'
      ),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  next();
});

router.onError((err) => {
  console.log(err);
});

export default router;
