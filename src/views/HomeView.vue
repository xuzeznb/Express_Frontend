<template>
  <div class="home">
    <HelloWorld />
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src</script>
