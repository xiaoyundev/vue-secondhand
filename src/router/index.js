import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/list', name: 'list', component: List },
    { path: '/detail/:id', name: 'detail', component: Detail },
  ],
})

export default router