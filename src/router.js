import Vue from 'vue'
import VueRouter from 'vue-router'
import Businesses from './components/Businesses'
import Business from './components/Business'

Vue.use(VueRouter)

const routes = [
  {name: 'home', path: '/', component: Businesses},
  {name: 'business', path: '/business/:id', component: Business}
]

export default new VueRouter({routes})
