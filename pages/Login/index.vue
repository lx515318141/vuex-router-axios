<template>
    <div>
        
        <button @click="loginHandler">Login</button>
       
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const { mapMutations } = createNamespacedHelpers("loginModule")

export default {
    name:"Login",
    methods:{
        ...mapMutations(["setToken"]),
        loginHandler(){
            this.$api.login({
                username:"iwen",
                password:"123456"
            }).then((res)=> {
                // 存入vuex
                this.setToken(res.data.token)
                // 存入本地
                localStorage.setItem("token",res.data.token)
                this.$router.replace('/')
            })
        },
        
    }
}
</script>

<style scoped>

</style>