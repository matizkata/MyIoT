import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'
import Registry from '../Registry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/login', component: Login},
    {path: '/registry', component: Registry}
  ]
})
