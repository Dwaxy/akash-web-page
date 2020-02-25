import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import aboutakash from './components/akash/about-akash'
import Anton from './components/anton/Anton'
import Joel from './/components/joel/Joel'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    name: "aboutakash",
    path: "/aboutakash",
    component: aboutakash
  },
  {
    name: "anton",
    path: "/anton",
    component: Anton
  },
  {
    name: "joel",
    path: "/joel",
    component: Joel
  }
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')