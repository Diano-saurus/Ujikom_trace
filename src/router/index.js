import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('../view/Home.vue')),
  },
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router