<script lang="ts" setup>
import { ref } from 'vue';
import TheModal from '../components/HomeModal.vue'

const _headerRef = ref()

</script>

<template>
   <div>
      <TheModal ref="_headerRef" />

      <div
         class="lg:rounded-tr-3xl lg:rounded-bl-3xl lg:container lg:mx-auto bg-danger grid grid-cols-4 !my-[72px] !p-[72px] max-md:!p-8  max-md:flex max-md:flex-col-reverse max-md:items-start">
         <div class="col-span-3">
            <h1 class="text-white lg:pr-[30px] max-lg:text-[40px] max-sm:text-[32px] leading-[56px] max-md:leading-[40px]">
               {{ $t('OrderNow') }}</h1>
            <button @click="_headerRef.open()" class="py-4 px-8 mt-8 text-danger text-xl font-Manrope-700 bg-white">{{
               $t('ConnectNow') }}</button>
         </div>
         <div class="col-span-1">
            <img class="w-full h-full max-md:w-[180px] max-md:h-[180px]" src="@/assets/img/gift.svg" alt="">
         </div>
      </div>
   </div>
</template>