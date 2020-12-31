<template>
  <div>
    <Navbar />
    <!--        <img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Hello~~~~~~~~~" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld";
    import Navbar from './components/base/Navbar'
    import Footer from './components/base/Footer'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Navbar,
            Footer
        }
    }
</script>
