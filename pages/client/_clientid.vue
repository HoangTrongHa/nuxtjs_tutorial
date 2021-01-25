<template>
  <h1>
      Client Page - Id : {{ this.$route.params.clientid }}
  </h1>
</template>

<script>
export default {
   mounted(){
       console.log(this.$route.params.clientid)
   }
}
</script>

<style>

</style>