<template>
    <div id="main">
      <h2>vue基础待办</h2>
      <hr>
      <Header
        :addtodo="addtodo2"
        :todos2="todos"
      ></Header>
      <List
        :todos3="todos"
        :deltodo3="deltodo"
      >
      </List>
      <Footer
        :todos4="todos"
        :isAll="selectAll"
        :delAll="delAllTodo"
       >
      </Footer>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import List from '../components/List'
  import Footer from '../components/Footer'
    export default {
        name: "Todo",
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
          }
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
