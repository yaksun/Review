<template>
    <div>
      <ul>
        <Item
          v-for="(item,index) in todos3"
          :todo3="item"
          :key="index"
          :index2="index"
        >
        </Item>
      </ul>

    </div>
</template>

<script>
  import Item from './Item.vue'
    export default {
        props:{
          todos3:Array,
        },
        name: "List",
        components:{Item}
    }
</script>

<style scoped>

</style>
