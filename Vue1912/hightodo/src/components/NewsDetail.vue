<template>
    <div>新闻详情---{{id}}</div>
</template>

<script>
    export default {
        name: "NewsDetail",
      data(){
          return {
              id:0
          }
      },
      // 监听路由的变化
     watch:{
      // $route:function(val){
      //         console.log(val.query.id)
      //          this.id = val.query.id*1
      //       }

        $route:function (val) {
              console.log(val.params.id)
          this.id = val.params.id*1
        }
     }
    }
</script>

<style scoped>

</style>
