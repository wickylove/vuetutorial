<template>
  <div id="app">
    <img src="./assets/logo.png" id="logo">
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/down">連結二</router-link>
      <router-link to="/down1">連結3</router-link>
    </nav>
    <router-view/>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<script>
  import SiteFooter from '@/components/SiteFooter.vue'    // 載入組件
  export default {
    name: 'app',
    components: {
      SiteFooter        // 宣告組件
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo{
  max-width: 60px;
}
</style>
