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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(TaskListPage)
      component: TaskListPage
    }
  ]
});

export default router;
