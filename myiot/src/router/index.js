import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'
import Registry from '../Registry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/login', name: 'Login', component: Login},
    {path: '/registry', name:'Registry', component: Registry},
    {path: '*', redirect: 'Home'}
  ],
  // mode: 'history'
})