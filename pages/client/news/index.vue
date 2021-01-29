<template>
  <v-container >
      <div class="news-wrap">
          <div>
            <h1>Nuxt Mountains</h1>
            <ul>
              <li v-for="mountain of mountains" :key="mountain.id">
                <nuxt-link :to="`/client/news/${mountain.id}`">{{ mountain.title }}</nuxt-link>
              </li>
            </ul>
            <button @click="test">Refresh</button>
          </div>
     </div>
  </v-container>
  </template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    methods: {
      async test() {
        const mountainRsp = await this.$axios.get('/api/posts')
        this.mountains = mountainRsp.data.data
      },
    },
    created() {
      this.test()
    }
  }
</script>
<style lang="scss">
  @import '~/assets/news.scss';
</style>