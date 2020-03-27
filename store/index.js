import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        loginModule:{
            namespaced:true,
            state:{
                token:null,
                user:""
            },
            mutations:{
                setToken(state,token){
                    state.token = token
                },
                updataToken(state,token){
                    state.token = token
                }
            },
            action:{},
            getters:{}
        }
    }
})