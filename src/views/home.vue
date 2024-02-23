<script lang="ts" setup>
import { ref } from 'vue';
import TheModal from '../components/HomeModal.vue'

import Advantages from './Advantages.vue'
import Cases from './Cases.vue'
import Indicators from './Indicators.vue'
import Attack from './Attack.vue'
import Order from './Order.vue'

const _headerRef = ref()

</script>

<template>
   <div>
      <TheModal ref="_headerRef" />

      <div
         class="lg:container lg:mx-auto flex gap-1 items-center overflow-hidden bg-primary lg:rounded-tr-3xl lg:rounded-bl-3xl !mb-[72px] max-sm:flex-col-reverse">
         <img src="@/assets/img/user.png" alt="">
         <img class="hidden" src="@/assets/img/userlg.png" alt="">
         <div class="max-sm:mt-[72px] max-sm:mb-[32px] px-5">
            <h1 class="text-white font-inter-700 max-lg:text-[40px]">{{ $t('Security') }}</h1>
            <p class="mt-4 mb-8 text-white text-xl md:mr-[170px]">
               {{ $t('biometricIdentification') }}
            </p>
            <button @click="_headerRef.open()" class="px-8 py-4 text-white bg-danger">{{ $t('ConnectNow')
            }}</button>
         </div>
      </div>
      <Advantages />
      <Cases />
      <Indicators />
      <Attack />
      <Order />
   </div>
</template>