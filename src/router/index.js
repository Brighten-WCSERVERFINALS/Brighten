import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about')
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../components/appointment')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListAppointment')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UpdateAppointment')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../components/contacts')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router