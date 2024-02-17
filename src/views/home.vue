<script lang="ts" setup>
import Advantages from './Advantages.vue'
import Cases from './Cases.vue'
import Indicators from './Indicators.vue'
import Attack from './Attack.vue'
import Order from './Order.vue'
</script>

<template>
   <div>
      <div class="container flex gap-1 items-center overflow-hidden bg-primary rounded-tr-3xl rounded-bl-3xl !mb-[72px]">
         <img src="@/assets/img/user.png" alt="">
         <div class="">
            <h1 class="text-white">Безопасность <br /> с первого взгляда</h1>
            <p class="mt-4 mb-8 text-white text-xl">Быстрое и безопасное решение <br /> биометрической идентификации для
               банков<br /> и
               финансового
               сектора
            </p>
            <button class="px-8 py-4 text-xl text-white bg-danger">Подключайтесь сейчас</button>
         </div>
      </div>
      <Advantages />
      <Cases />
      <Indicators />
      <Attack />
      <Order />
   </div>
</template>