<template  v-slot:activator="{ on, attrs }">
  <span class="overflow-hidden">
      <a
        color="deep-purple"
        outlined
        @click="active = !active"
        v-bind="attrs"
        v-on="on"
      >
        Trả Lời
      </a>
    <v-bottom-navigation v-show="active"
    class="form-height"
      v-model="value"
      :input-value="active"
      color="indigo"
      max-height="550"
      max-width="550"
    >
        <v-form ref="commentUser" @submit.prevent="sendComment">
                    <div class="form-commentt">
                        <v-img class="avatar-comment"
                        max-height="50px"
                        max-width="50px"
                        border-radius="50px"
                        src="/avatar/1.png"
                        >
                        </v-img>           
                        <v-text-field
                        v-model="body"
                          label="Để lại bình luận"
                        >                
                        </v-text-field>
                        
                    </div>
          </v-form>
    </v-bottom-navigation>
  </span>
</template>
<script>
  export default {
    data () {
      return {
        value: 1,
        active: false,
      }
    },
  }
</script>
<style lang="scss">
  @import '~/assets/news.scss';
  @import '~/assets/CommentNews.scss';
  @import '~/assets/Reply.scss';
</style>
