<template>
  <div>
    <!--  <img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/home">
      Home
    </router-link>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Menu',
  components: {
    HelloWorld
  }
}
</script> 
