<template>
    <div>
      <el-input placeholder="输入待办名，按回车键添加" v-model="title" @keyup.enter.native="addTodo"></el-input>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Header",
      data(){
          return {
            title:''
          }
      },
      computed:{
        ...mapState(['todos'])
      },
      methods:{
        addTodo(){

          const {title,todos} = this
            if(! title.trim() ){
                alert('待办名不能为空')
            }
            let temp = {
              id:todos.length+1,
              title:title,
              done:false,
              status:1
            }


            this.$store.dispatch('addTodo',temp)
          this.title=''

        }
      }
    }
</script>

<style scoped>

</style>
