<template>
    <div class="greeting">
      <h1>Welcome to Vue</h1>
      <input type="text" v-model="name" placeholder="Enter your name">
      <button @click="displayGreeting">Confirm</button>
      <p v-if="greeting" class="greeting">{{ greeting }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GreetingComponent',
    data() {
      return {
        name: '',
        greeting: ''
      };
    },
    methods: {
      displayGreeting() {
        if (this.name) {
          this.greeting = `Hello, ${this.name}!`;
        } else {
          this.greeting = '';
        }
      }
    }
  };
  </script>
  
<style scoped>
    greeting {
        text-align: center;
        font-family: Arial;
    }
    input {
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
    }
    button {
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
  