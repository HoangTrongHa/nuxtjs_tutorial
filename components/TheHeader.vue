<template>
<header class="app-header">
        <div class="header-app">
          <div class="header-wrap" v-if="!$auth.loggedIn">
            <NuxtLink class="wrap-button" to="/client/login">
                <v-btn  class="btn-login"
                  depressed
                  elevation="23"
                  x-large
                  height="60"
                >Đăng Nhập
                </v-btn>
            </NuxtLink>
            <NuxtLink class="wrap-button" to="/client/register">
            <v-btn class="btn-login"
                  depressed
                  height="60"
                  elevation="23"
                  x-large
                >Đăng Ký
                </v-btn>
            </NuxtLink>
          </div>
          <div class="header-wrap log-ined" v-if="$auth.loggedIn">
            <div class="dropdown">
                 <v-btn  class="btn-login"
                  depressed
                  elevation="23"
                  x-large
                  height="60"
                >
                  Hello {{ $auth.user.name }}
                </v-btn>
                  <div class="dropdown-content">
                  <p>Thông Tin Cá Nhân</p>
                  <p>Đăng Xuất</p>
                </div>
            </div>
          </div>
        </div>
</header>
</template>
<script>

export default {
  data (){
    return {}
  }
}
</script>

<style lang="scss">
  @import '~/assets/header.scss';
</style>