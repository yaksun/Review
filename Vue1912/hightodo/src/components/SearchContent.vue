<template>
    <div>
      <hr>
      {{list}}
    </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
    export default {
        name: "SearchContent",
        data(){
          return {
            list:''
          }
        },
      mounted(){
          PubSub.subscribe('doSearch',(msg,keyWords)=>{
            let url = `https://www.baidu.com/s?wd=${keyWords}`
            // // 3.使用vue-resource 实例对象包含了http请求
            //   this.$http.get(url).then(
            //        response=>{
            //          console.log(response)
            //        },
            //       response=>{
            //               alert('访问失败')
            //       }
            //   )

            axios.get(url).then(
              response=>{
                console.log(response)
                this.list = response
              }
            ).catch(
              error=>{
                console.log(error)
              }
            )
          })
      }
    }
</script>

<style scoped>

</style>
