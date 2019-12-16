<template>
   <li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style="{background:bgcolor}">
     <el-checkbox v-model="todo.done">{{todo.title}}</el-checkbox>
     <el-button v-if="flag" @click="delTodo" type="warning">删除</el-button>
   </li>
</template>

<script>
    export default {
        name: "Item",
      props:{
          todo:Object,
         id:Number
      },
      data(){
          return {
            bgcolor:'white',
            flag:false
          }
      },
      methods:{
        showBtn(val){
          if(val){
            this.bgcolor = 'gray'
            this.flag = true
          }else{
            this.bgcolor = 'white'
            this.flag = false
          }

        },
        delTodo(){
          if(window.confirm(`你确定删除${this.todo.title}`)){
             const {id} = this
            this.$store.dispatch('delTodo',id)
          }
        }
      }
    }
</script>

<style scoped>

</style>
