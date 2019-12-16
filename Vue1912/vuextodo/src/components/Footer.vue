<template>
    <div>
      <el-checkbox v-model="allStatus"><span>全选/全不选</span></el-checkbox>
      <span>已完成数:{{computednNum}}/待办总数:{{allNum}}</span>
      <el-button v-if="computednNum" @click="delComputed">删除已完成待办</el-button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "Footer",
        computed:{
          ...mapGetters(['computednNum','allNum']),
          // 双向绑定选中状态
          allStatus:{
            get(){
              return this.computednNum==this.allNum && this.allNum>0
            },
            set(val){
                this.$store.dispatch('isAll',val)
            }
          }
        },
      methods:{
        delComputed(){
            this.$store.dispatch('delComputed')
        }
      }
    }
</script>

<style scoped>

</style>
