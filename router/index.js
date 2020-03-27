import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import store from '../store'



Vue.use(Router)

export default function(){
  const router = new Router({
    routes: [
      {
        path: '/',
        component:Home
      },
      {
        path: '/mine',
        component:Mine,
        // 路由独享导航守卫
        // beforeEnter:(to, from, next)=>{
        //   const token = null
        //   if(token){
        //     next()
        //   }else{
        //     next({
        //       path:"/login"
        //     })
        //   }
        // }
      },
      {
        path: '/shop',
        component:Shop
      },
      {
        path: '/login',
        component:Login,
        meta:{
          isLogin:true
        }
      },
    ]
  })

  

  return router
}
