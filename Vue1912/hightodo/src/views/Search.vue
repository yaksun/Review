<template>
    <div>
      <SearchInput />
      <SearchContent />
    </div>
</template>

<script>
  import SearchInput from '../components/SearchInput'
  import SearchContent from '../components/SearchContent'
    export default {
        name: "Search",
      components: {
          SearchContent,
        SearchInput

        }
    }
</script>

<style scoped>

</style>
