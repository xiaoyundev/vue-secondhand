import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import Publish from '../views/Publish.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'
import {getUser} from '../auth.js'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/list', name: 'list', component: List },
    { path: '/detail/:id', name: 'detail', component: Detail },
    { path: '/publish', name: 'publish', component: Publish },
    { path: '/login', name: 'login', component: Login },
    { path: '/mine', name: 'mine', component: Mine, meta: { requiresAuth: true } },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !getUser()) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
})

export default router