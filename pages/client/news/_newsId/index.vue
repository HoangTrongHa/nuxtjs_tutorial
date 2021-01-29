  <template>
  <v-container >
      <div class="news-wrap">
            <h1>
              {{ show.title }}
            </h1>
      <span>
          {{ show.body }}
      </span>
      <div>
        
      </div>
      <v-img
        max-height  = 500
        max-width = 300
        src="/img_item/3.jpg"
      ></v-img>
        <span>
            Điệp khúc quen thuộc của người Anh: “Sáng thứ 2, CLB sẽ sa thải ông” đã ứng với Frank Lampard. Trận thắng đối thủ vô danh Luton Town ở vòng 4 FA Cup vô nghĩa với HLV người Anh, hay chính xác là với ban lãnh đạo Chelsea. Rõ ràng, họ không thể nhìn vào đấu trường FA Cup và một trận đấu dễ dàng như vậy để thay đổi đánh giá về Lampard. Chiến lược gia trẻ người Anh đã hết cơ hội từ trận thua Leicester City trước đó 3 ngày, và The Blues chỉ muốn kéo dài thời gian để đàm phán với người thay thế - Thomas Tuchel.

            Thực tế, Chelsea đã kiên nhẫn với Lampard hơn thường lệ. Cho dù người hâm mộ Chelsea tỏ ra thất vọng với cách họ sa thải Lampard, nhưng tất cả đều hiểu HLV này đã có đủ cơ hội để tự cứu mình. Lampard không xoay chuyển được tình thế, và việc ông ra đi là tất yếu. Chelsea không thể vứt bỏ một mùa giải mà họ chi ra 230 triệu bảng mua sắm cầu thủ, trong khi phần lớn nước Anh và châu Âu chỉ có thể tiêu xài dè xẻn.

        </span>
        
      </div>
         <div class="comment-wrap">
      <div class="start-comment">
        <h1>
          Viết Bình Luận Của Bạn
        </h1>          
          <v-form ref="commentUser" @submit.prevent="sendComment">
            <div class="form-comment">
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
                <v-btn class="button-comment" type="submit"
                >Bình Luận</v-btn>
            </div>
          </v-form>
      </div>
      <div class="start-comment height-comment">
        <div class="form-comment" v-for="comment of show.comments" :key="comment.id">
                <v-img class="avatar-comment"
                max-height="50px"
                max-width="50px"
                border-radius="50px"
                src="/avatar/2.png"
                >
                </v-img>           
               <span>
                 {{ comment.body }}
                 <div class="status">
                   <a
                   >
                    <v-btn
                    class="ma-2"
                    text
                    icon
                    color="blue lighten-2"
                    >
                      <v-icon>mdi-thumb-up</v-icon>
                    </v-btn>
                    
                    <span  class="mdi mdi-thumb up">
                     21                     
                    </span>
                   </a>
                      <a
                   >
                    <v-btn
                    class="ma-2"
                    text
                    icon
                    color="red lighten-2"
                  >
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                    <span  class="mdi mdi-thumb up">
                     51                     
                    </span>

                   </a>
                   <a class="rep-comment" id="app">
    
                      <span>
                         <Reply/>
                  
                      </span>
                   </a>

                 </div>
               </span>
          </div>
          
      </div>
    </div>
  </v-container>
</template>
<script>
  export default {
      auth: true,
      data() {
          return  { 
          value: 1,
          active: false,
          dialog: false,       
          body: '',
          show: {
              comments:[]
           },
          }
      },
      methods: {
         
      async showDetail() {
        let getDetailsPost = await this.$axios.get(`/api/posts/${this.$route.params.newsId}`)

        this.show = getDetailsPost.data.details,
       
        this.getComment = getDetailsPost.data.details.comments
      },
      async sendComment() {
        const data = {
          body: this.body,
          post_id: this.show.id,
          parent_id: '',
          user_id: this.$auth.user.id
        }
           
          await this.$repositories.comment.postComment(data)
          .then((result) => {
           
          }).catch((err) => {
            return err
          });
       },
      async showReply() {
        let getDataReply = await this.$axios.get()
      },
      },
    created() {
      this.showDetail()
    }
}
</script>
<style lang="scss">
  @import '~/assets/news.scss';
  @import '~/assets/CommentNews.scss';
</style>
