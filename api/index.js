import axios from "../untils/http"
import base from "./base"

const api = {
    // 登录接口
    login(params){
        return axios.post(base.baseUrl+base.login,params);
    },
    // 列表数据接口
    homeList(){
        return axios.get(base.baseUrl+base.list);
    }
}

export default api