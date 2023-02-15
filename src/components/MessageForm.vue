<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'
const message = ref('')
const emit = defineEmits(['send'])

// 发送消息, 属于是组件的行为
function send() {
  emit('send', message.value) // 发送消息
  message.value = '' // 清空输入框内的值
}


</script>

<template>
  <div class="input-container">
    <input type="text" data-test="messageText" v-model="message" />
    <button @click="send">send</button>
  </div>
</template>

<style>
.input-container {
  margin: 1rem;
}
</style>
