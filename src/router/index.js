import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage/Home.vue'
import HelloWorld from '../components/HelloWorld'
import GettingStarted from '../components/GettingStartedPage/GettingStarted'
import Schedule from '@/components/SchedulePage/Schedule'
import Membership from '../components/MembershipPage/Membership'
import About from '@/components/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/billy',
    name: 'billy',
    component: HelloWorld
  },
  {
    path: '/GettingStarted',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/membership',
    name: 'Membership',
    component: Membership
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
