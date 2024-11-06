<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Greeting /> -->
   <Homepage />
   <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Greeting from './components/Greeting.vue'
import Homepage from './components/Homepage.vue';

export default {
  name: 'App',
  components: {
    Homepage
    // HelloWorld,
    // Greeting
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
