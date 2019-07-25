import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout1 from '@/layouts/layout1'
import Layout2 from '@/layouts/layout2'

import Red from '@/views/Red.vue'
import Blue from '@/views/Blue.vue'
import Green from '@/views/Green.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout1',
    components: {
      default: Blue,
      other1: Red,
    },
    meta: {
      layout: Layout1,
    },
  },
  {
    path: '/layout2',
    components: {
      default: Red,
      other2: Green,
    },
    meta: {
      layout: Layout2,
    },
  },
  {
    path: '*',
    redirect: '/layout1',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
