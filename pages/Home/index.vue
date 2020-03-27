<template>
    <div>
        Home
    </div>
</template>

<script>
export default {
    name:"Home",
    mounted(){
        this.$api.homeList().then(res => {
            console.log(res.data)
        })
    }
}
</script>

<style scoped>

</style>