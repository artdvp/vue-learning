import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Hello from "@/components/Hello"
import Bye from "@/components/Bye"

Vue.config.productionTip = false;
Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      component: Home,
      path: '/'
    },
    {
      name: 'hello',
      component: Hello,
      path: '/hello'
    },
    {
      name: 'bye',
      component: Bye,
      path: '/bye'
    },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
