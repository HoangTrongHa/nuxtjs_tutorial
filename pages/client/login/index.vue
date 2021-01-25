<template>
   <v-form @submit.prevent="login">
       <v-container>
           <div class="login-wrap">
               <div class="form-login">
                    <v-row>
                        <v-col
                            cols="12"
                            md="12"
                            >
                            <v-text-field class="color-text"
                            v-model="user.email"
                            type="email"
                            :counter="30"
                            label="Tài khoản Email"
                            required
                            color="light-green"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="12"
                            >
                            <v-text-field class="color-text"
                            v-model="user.password"
                            type="password"
                            :counter="30"
                            label="Mật khẩu"
                            required
                            color="light-green"
                            ></v-text-field>
                        </v-col>
                    
                        <div class="btn-submit">
                                  <v-btn
                        elevation="24"
                        x-large
                        type="submit"
                        height="60"
                        color="light-green darken-1"
                        >
                        <span>  
                                Đăng nhập
                        </span>
                        </v-btn>
                        </div>
                    </v-row>
             </div>
           </div>
       </v-container>
   </v-form>

</template>
<style lang="scss">
  @import '~/assets/login.scss';
</style>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
    
            await this.$auth.login({
                data: this.user
            })
            .then(response => {
                this.$router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>