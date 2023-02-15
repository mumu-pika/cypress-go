<template>
  <div class="output-container">
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{message}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps(['messages'])
</script>

<style>

</style>