import axios from 'axios'
import qs from 'querystring'
import VueRouter from '../router'
import store from '../store'
const router = VueRouter()

const toLogin = () => {
    router.push({
        path:"/login"
    })
}

const errorHandler = (status, other) => {
    switch(status){
        case 400:
            toLogin()
            console.log("信息校验失败");
            break
        case 401:
            toLogin()
            console.log("认证失败")
            break
        case 403:
            // 当token过期时一定要先清除token，本地的和vuex的都要清除
            localStorage.removeItem("token")
            toLogin()
            console.log("token校验失败")
            break
        case 404:
            console.log("请求资源失败")
            break
        default:
            console.log(message)
            break
    }
}

var instance = axios.create({ timeout: 5000 });
// post请求传输数据的类型，不是一定的，要看后台，如果后台的请求头格式是别的数据类型，则要修改
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 由于main.js中代码执行先后顺序的问题这里无法直接获取到vuex中的token，所有改在请求拦截器中设置token
// instance.defaults.headers.common['Authorization'] = localStorage.getItem("token")


instance.interceptors.request.use(function(config){
    if(config.method === 'post'){
        config.data = qs.stringify(config.data)
    }
    // 获取vuex中的token
    const token = store.state.loginModule.token
    if(token){
        config.headers.Authorization = token
    }
    return config;
},function(error){
    return Promise.reject(error)
})

instance.interceptors.response.use(
    res => res.status ===200 ? Promise.resolve(res) : Promise.reject(res), 
    error =>{
        const { response } = error
        if(response){
            errorHandler(response.status, response.data.message)
            return Promise.reject(response)
        }else{
            console.log("断网了")
        }
    }
);

export default instance