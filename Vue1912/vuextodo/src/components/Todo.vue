<template>
    <div>
      <h2>我的待办</h2>
      <Header />
      <List />
      <Footer />
    </div>
</template>

<script>
  import Header from './Header'
  import List from './List'
  import Footer from './Footer'
    export default {
        name: "Todo",
      components:{
          List,
        Header,
        Footer
      }
    }
</script>

<style scoped>

</style>
