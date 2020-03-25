import Vue from 'vue'
import App from './App'
import "../node_modules/bulma/css/bulma.css"
import VueRouter from "vue-router"
import HomePage from "./components/HomePage"
import ListeUsers from "./components/ListeUsers"
import User from "./components/User"

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "home"
    },
    {
      path: "/users",
      component: ListeUsers,
      name: "users"
    },
    {
      path: "/user/:user",
      component: User,
      name: "user"
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})



new Vue({
  router,
  render: component => component(App),
}).$mount('#app')
