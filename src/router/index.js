import { createRouter, createWebHistory } from 'vue-router';
import Add from '../views/Add.vue';
import List from '../views/List.vue';
import My from '../views/My.vue';

const routes = [
  { path: '/', name: 'Add', component: Add },
  { path: '/list', name: 'List', component: List },
  { path: '/my', name: 'My', component: My },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
