import Vue from 'vue'
import VueRouter from "vue-router"
import App from "./App"
import Content from "./components/Content.vue"
import Homepage from "./components/Homepage.vue"

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage,
      name: "home"
    }, {
      path: "/article/:page",
      component: Content,
      name: "content"
    }, {
      path: "*",
      redirect: "/"
    }
  ]
})

new Vue({
  router,
  render: component => component(App),
}).$mount('#app')
