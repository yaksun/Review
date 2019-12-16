<template>
    <div>
      <ul>
        <Item v-for="(todo,index) in todos" :key="index"
          :todo="todo"
           :id="index"
        ></Item>
      </ul>
    </div>
</template>

<script>
  import Item from './Item'
  import {mapState} from 'vuex'
    export default {
        name: "List",
      computed:{
        ...mapState(['todos'])
      },
      components:{
          Item
      },
      watch:{
          todos:{
            handler:function(val){
              window.localStorage.setItem('todos_key',JSON.stringify(val) )
            },
            deep:true
          }
      }

    }
</script>

<style scoped>

</style>
