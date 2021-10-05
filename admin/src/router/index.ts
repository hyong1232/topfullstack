import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';
import { routerLoadHelper } from '@/utils/routerHelper';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
        {
            path: '/course/list',
            component: resolve => require(['@/views/course/list.vue'], resolve),
        },
        {
            path: '/course/edit/:id',
            component:() => routerLoadHelper('@/views/course/edit.vue'),
            props: true
        },
        {
            path: '/course/create',
            component: () => ({
              component: import('@/views/course/edit.vue')
            }),
        },
    ]
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
