<script setup lang="ts">
import Wellcome from '../components/Wellcome.vue'
import Versions from '../components/Versions.vue'
</script>

<template>
  <div class="hi">
    <Wellcome />
    <Versions />
  </div>
</template>

<style scoped lang="less">
.hi {
  @apply flex-center flex-col w-full h-full; 

  background-image: url('../assets/wavy-lines.svg');
  background-size: cover;
}
</style>