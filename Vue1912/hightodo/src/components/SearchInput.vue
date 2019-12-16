<template>
    <div>
      <el-input placeholder="请输入关键词搜索"  v-model="keyWords" @keydown.enter.native="doSearch"></el-input>
    </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
    export default {
        name: "Input",
      data(){
          return{
            keyWords:''
          }
      },
      methods:{
          // 执行搜索函数
          doSearch(){
            console.log('触发了搜索')
            const {keyWords} = this
            let tempKey = keyWords.trim()
            if(tempKey){
              Pubsub.publish('doSearch',tempKey)
              this.keyWords=''
            }

          }
      }
    }
</script>

<style scoped>

</style>
