<template>
    <div>
      <el-checkbox v-model="allStatus">全选/全不选</el-checkbox>
      <span>全部{{todos4.length}}/已完成{{computedNum}}</span>
      <el-button type="warning"  v-show="computedNum" @click.native="delall">删除所有完成</el-button>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            todos4:Array,
          isAll:Function,
          delAll:Function
        },

        computed:{
          // reduce函数统计已完成的数量
          computedNum(){
            return  this.todos4.reduce((preNum,todo)=> preNum+(todo.done?1:0),0)
          },
          allStatus:{
            get(){
              return this.todos4.length == this.computedNum && this.todos4.length>0
            },
            set(val){
              this.isAll(val)
            }
          },

        },
      methods:{
        delall(){
          this.delAll()
        }
      }

    }
</script>

<style scoped>

</style>
