// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'
import api from './api'
import store from './store'

const router = VueRouter()


Vue.prototype.$api = api
Vue.config.productionTip = false

// 正常来讲应该先校验token是否过期
const localhostToken = localStorage.getItem("token")
if(localhostToken){
  store.commit("loginModule/setToken",localhostToken)
}

// 此方法为所有页面都需要登录
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item => item.meta.isLogin)){
    next()
  }else{
    const token = store.state.loginModule.token
    if(token){
      next()
    }else{
      next({
        path:"/login"
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
