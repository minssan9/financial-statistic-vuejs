<template>
  <div>
    <!--  <img alt="Vue logo" src="./assets/logo.png">-->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link to="/home">Home</router-link>

    <a href="http://blog.voyagerss.com">Blog</a>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
