<template>
  <v-row justify="center" align="center" class="home-wrap"> 
    <v-col cols="auto" align-self = "center" sm="2" md="2" >
      <div class="item">
          <div class="content">
           <v-img
            src="/img_item/5.jpg"
            max-width = 250
            min-height = 450
            max-height= 450
            >
            <div class="wrap-button">
            <v-btn class="button btn-submit"
            elevation="2"
            large
            medium            
            x-large
            >
            Trực tiếp
            </v-btn>    
            </div>
            </v-img>
          </div>
      </div>
    </v-col>
    <v-col cols="10"  sm="2" md="2" >
      <div class="item">
          <div class="content">
           <v-img
            contain = fa
            src="/img_item/1.jpg"
            max-width = 250
            min-height = 450
            max-height= 450
            >
            <div class="wrap-button">
            <v-btn class="button btn-submit"
            elevation="2"
            large
            medium            
            x-large
            >
            Lịch thi đấu
            </v-btn>    
            </div>
            </v-img>          
          </div> 
      </div>
    </v-col>
    <v-col cols="10"  sm="2" md="2" >
      <div class="item">
          <div class="content">
           <v-img
            src="/img_item/3.jpg"
            max-width = 250
            min-height = 450
            max-height= 450
            >
            <div class="wrap-button">
            <v-btn class="button btn-submit"
            elevation="2"
            large
            medium            
            x-large
            >
            Đặt Sân
            </v-btn>    
            </div>
            </v-img>           
          </div> 
      </div>
    </v-col>
    <v-col cols="10"  sm="2" md="2" >
      <div class="item">
          <div class="content">
           <v-img
            src="/img_item/4.jpg"
            max-width = 250
             min-height = 450
            max-height= 450
            >
            <div class="wrap-button">
            <v-btn class="button btn-submit"
            elevation="2"
            large
            medium            
            x-large
            >
            Cá Độ
            </v-btn>    
            </div>
            </v-img>
          </div>
      </div>
    </v-col>
    <v-col cols="10" align-self = "center"  sm="2" md="2" >
      <div class="item">
          <div class="content">
           <v-img
            src="/img_item/6.jpg"
            max-width = 250
             min-height = 450
            max-height= 450
            >
            <div class="wrap-button">
              <nuxt-link to="/client/news" class="link-home">
                  <v-btn class="button btn-submit"
                    elevation="2"
                    large
                    medium            
                    x-large
                    >
                    Tin Tức
                  </v-btn>    
              </nuxt-link>     
            </div>
            </v-img>
          </div>
      </div>
    </v-col>
  </v-row> 
</template>
<script>
export default {
  components: {
  }
}
</script>
