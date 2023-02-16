import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/send',
    name: 'send',
    component: () => import('../views/Home/send.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/take',
    name: 'take',
    component: () => import('../views/Home/take.vue')
  },
  {
    path: '/squery',
    name: 'squery',
    component: () => import('../views/Home/squery.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/Home/join.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Home/notice.vue')
  }, {
    path: '/enter',
    name: 'enter',
    component: () => import('../views/Home/enter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
