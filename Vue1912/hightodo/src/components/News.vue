<template>
    <div>
      <h2>新闻</h2>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <!--get传值-->
          <!--<router-link :to= " `/show/news/detail?id=${index}` " >{{item}}</router-link>-->
          <!--动态路由传值-->
          <router-link   :to= " `/show/news/detail/${index}` " >{{item}}</router-link>
          <el-button @click="pushRoute(index)">推进跳转</el-button>
          <!--代替跳转忽略小路径，只跳转大路径-->
          <el-button @click="replaceRoute(index)">代替跳转</el-button>
        </li>
      </ul>

      <el-button type="warning" @click="$router.back()">返回</el-button>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "News",
      data(){
          return {
            list:[]
          }
      },
      mounted(){
          for(let i=0;i<10;i++){
            this.list.push(`我是第${i}条新闻`)
          }
      },
      methods:{
        pushRoute(id){
          this.$router.push(`/show/news/detail/${id}`)
        },
        replaceRoute(id){
         this.$router.replace(`/show/news/detail/${id}`)
        }
      }
    }
</script>

<style scoped>

</style>
