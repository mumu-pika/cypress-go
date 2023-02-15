<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import MessageForm from './components/MessageForm.vue'
import MessageList from './components/MessageList.vue'

import { reactive } from 'vue'
const messages = reactive([])

function handleSend(msg) {
  messages.push(msg)
}
</script>

<template>
  <div class="app-wrapper">
    <div class="homepage-container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <Button />
    </div>
    <MessageForm @send="handleSend" />
    <MessageList :messages="messages" />
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homepage-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
