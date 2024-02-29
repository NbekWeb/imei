<script lang="ts" setup>
import { ref } from 'vue'
import Liveness from './liveness.vue'
import Infokiosk from './infokiosk.vue'
import Stream from './Stream.vue'
import Order from './Order.vue'
import IdenficatorModal from "@/components/IdenficatorModal.vue"
const _openModalRef = ref()
</script>
    
<template>
   <div>

      <IdenficatorModal  ref="_openModalRef"/>
      <div class="px-10 max-md:px-5 container !mb-[72px] grid grid-cols-2 max-md:grid-cols-1  gap-x-4">
         <div>
            <h1 class="text-[56px] max-md:text-[40px] leading-[64px] mb-[24px]">{{ $t('IdentificationPlatform') }}</h1>
            <p class="text-[16px] leading-[22px] mb-[12px]">{{ $t('main1') }}</p>
            <p class="text-[16px] leading-[22px] mb-[24px]">{{ $t('main2') }}</p>
            <button @click="_openModalRef?.open()" class="px-5 py-2 text-base text-white bg-primary">{{ $t('MoreDetails') }}</button>
         </div>
         <div>
            <img class="mt-[88px]" src="@/assets/img/mac.png" alt="">
         </div>
      </div>
      <Liveness />
      <Infokiosk />
      <Stream />
      <Order />
   </div>
</template>


<style></style>