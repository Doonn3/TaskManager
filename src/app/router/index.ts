import { createRouter, createWebHistory } from 'vue-router';
import { MainPage } from '@/pages/MainPage';
import { TaskListPage } from '@/pages/TaskListPage';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/tasks',
      name: 'tasks',

      component: TaskListPage
    }
  ]
});

export default router;
