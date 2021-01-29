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
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
              <div class="dropdown-content">
              <a>
                <v-icon class="icon icon-create">mdi-card-account-details</v-icon>
                <span>
                  Thông Tin Cá Nhân
                </span>                    
                </a>
                <a @click="logout">
                  <v-icon class="icon icon-logout">mdi-logout</v-icon>
                  <span>Đăng xuất</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="scss">
  @import '~/assets/header.scss';
</style>