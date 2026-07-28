import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../components/top_page.vue';
import MainView from '../components/main.vue';

const routes = [
  {
    path: '/',
    component: TopPage,
  },
  {
    path: '/top',
    redirect: '/',
  },
  {
    path: '/main',
    name: 'MainView',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
