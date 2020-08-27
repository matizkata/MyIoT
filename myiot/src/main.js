import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import Login from './Login.vue';
import Registry from './Registry.vue';
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

//Vue.config.productionTip = false

Vue.use(VueRouter);

const routes= [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/login', component: Login},
  {path: '/registry', component: Registry}
];

const router = new VueRouter({
routes: routes,
mode: 'history'
});

new Vue({
 el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
