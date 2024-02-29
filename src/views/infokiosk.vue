<script setup>
import { ref } from "vue"
import InfoModal from "@/components/InfoModal.vue"
const openModal = ref()
</script>
    
<template>
   <InfoModal ref="openModal" />
   <div
      class="px-10 max-md:px-5 container !mt-[72px] grid grid-cols-2 max-md:grid-cols-1  gap-x-4 max-md:flex max-md:flex-col max-md:items-center">
      <div>
         <h1 class="text-[56px] max-md:text-[40px] leading-[64px] mb-[24px]">{{ $t('InfoKiosk') }}</h1>
         <p class="text-[16px] leading-[22px] mb-[12px] mr-[50px]">{{ $t('InformationKiosk') }}</p>
         <button @click="openModal?.open()" class="px-5 py-2 text-base text-white bg-primary">{{ $t('MoreDetails')
         }}</button>
      </div>
      <div>
         <img src="@/assets/img/Group 4.png" alt="">
      </div>
   </div>
</template>


<style></style>