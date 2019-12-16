<template>
    <div>
      <!--el标签加native-->
      <el-input placeholder="输入待办,按回车键提交" v-model="title" @keyup.enter.native="addTodo"></el-input>
      <!--<el-button type="success">测试按钮</el-button>-->
    </div>
</template>

<script>
    export default {
        name: "Header",
      props:{
          todos2:Array
      },
        data(){
            return{
              title:''
            }
        },
        methods:{
          addTodo() {
              // console.log('添加待办')
                let {title,todos2} = this
                let temp= title.trim()
                let id = todos2.length +1
                if(temp){
                    let todo={
                      id:id,
                      title:temp,
                      done:false,
                      status:0
                    }
                 this.$emit('addtodo',todo)
                  this.title=''

                }

            }
        }
    }
</script>

<style scoped>

</style>
