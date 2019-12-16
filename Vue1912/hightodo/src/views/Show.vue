<template>
      <div>
        <router-link to="/show/home">首页</router-link>
        <router-link to="/show/news">新闻</router-link>


        <router-view></router-view>

      </div>

</template>

<script>
    export default {
        name: "Show"
    }
</script>

<style scoped>

</style>
