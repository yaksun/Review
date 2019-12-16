<template>

      <li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style={background:bgColor}>
        <el-checkbox  v-model="todo3.done" class="item">{{todo3.title}}</el-checkbox> <el-button v-if="flag" type="warning" @click="delTodo()">删除</el-button>

      </li>

</template>

<script>
    export default {
        name: "Item",
        props:{
            todo3:Object,
          deltodo3:Function,
          index2:Number

        },
      data(){
          return{
            flag:false,
            bgColor:'white'
          }
      },
      methods:{
        showBtn(val){
            if(val){
                this.flag = true,
                  this.bgColor='gray'
            }else{
              this.flag=false,
                this.bgColor='white'
            }
        },
        delTodo(){
          const {todo3,index2} = this
          if(window.confirm(`你确定要删除${todo3.title}?`)){
              this.deltodo3(index2)
          }
        }
      }
    }
</script>

<style scoped>
    li{
      font-size: 40px;
    }
  .item{
  }
</style>
