<script lang="ts" setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
   <div style="min-height: 100vh;" class="flex flex-col justify-between">
      <Header />
      <div>
         <RouterView />
      </div>
      <Footer />
   </div>
</template>