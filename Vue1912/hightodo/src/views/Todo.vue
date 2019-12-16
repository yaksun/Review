<template>
    <div id="main">
      <h2>vue基础待办</h2>
      <hr>
      <!--<Header-->
        <!--@addtodo="addtodo2"-->
        <!--:todos2="todos"-->
      <!--&gt;</Header>-->
      <Header
       ref="header"
        :todos2="todos"
      ></Header>
      <List
        :todos3="todos"
      >
      </List>
      <Footer>
        <el-checkbox v-model="allStatus" slot="checkAll">全选/全不选</el-checkbox>
        <span slot="NumCount">全部{{todos.length}}/已完成{{computedNum}}</span>
        <el-button type="warning"  v-show="computedNum" @click.native="delAllTodo" slot="delAll">删除所有完成</el-button>
      </Footer>
      <!--<Footer-->
        <!--:todos4="todos"-->
        <!--:isAll="selectAll"-->
        <!--:delAll="delAllTodo"-->
       <!--&gt;-->
      <!--</Footer>-->
    </div>
</template>

<script>
  import Header from '../components/Header'
  import List from '../components/List'
  import Footer from '../components/Footer'
  import Pubsub from 'pubsub-js'
    export default {
        name: "Todo",
      mounted(){
          // 订阅deltodo3
          Pubsub.subscribe('deltodo3',(msg,index)=>{
            this.deltodo(index)
          })
         this.$refs.header.$on('addtodo',this.addtodo2)
      },
      data(){
          return{
            todos:[
              {
                id:1,
                title:'吃饭',
                done:false,
                status:0,

              },
              {
                id:2,
                title:'睡觉',
                done:true,
                status:1
              }
            ]
          }
      },
        components:{
            Header,
            Footer,
            List
        },

      computed:{
        // reduce函数统计已完成的数量
        computedNum(){
          return  this.todos.reduce((preNum,todo)=> preNum+(todo.done?1:0),0)
        },
        allStatus:{
          get(){
            return this.todos.length == this.computedNum && this.todos.length>0
          },
          set(val){
            this.selectAll(val)
          }
        },

      },

      methods:{
          addtodo2(val){
            this.todos.push(val)
          },
          deltodo(index){
              this.todos.splice(index,1)
          },
        // 改变复选框的状态
          selectAll(val){
              this.todos.map(todo=> todo.done =val)
          },
        // 删除所有完成的待办 使用过滤函数 留下没有完成的待办
          delAllTodo(){
            // 需要接收过滤后的数据
              this.todos = this.todos.filter(todo => !todo.done)
          },

      }
    }
</script>

<style scoped>
  #main{
    width: 600px;
    height: 400px;
    margin: 100px auto;
    text-align: center;
  }
</style>
