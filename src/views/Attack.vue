<script lang="ts" setup>

</script>
<template>
   <div class="bg-primary py-16 mt-16">
      <div class="container px-10 max-md:px-5">
         <h1 class="text-white max-md:text-[40px]">{{ $t('ProtectionAgainst') }}</h1>
         <p class="mt-2 mb-8 text-white text-xl">
            Найти головную боль юзеров и указать – как именно решение может помочь им
         </p>
         <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-lg:gap-2">
            <div
               class="p-6 max-md:p-[10px] max-md:!pb-0 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center justify-between">
               <p class="text-white md:text-xl max-md:mt-4 mb-4 text-center font-Manrope-700">{{ $t('showPhoto') }}</p>
               <img src="@/assets/img/b1.png" alt="">
            </div>
            <div
               class="p-6 max-md:p-[10px] max-md:!pb-0 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center justify-between">
               <p class="text-white md:text-xl max-md:mt-4 mb-4 text-center font-Manrope-700">{{ $t('showVideo') }}</p>
               <img src="@/assets/img/b2.png" alt="">
            </div>
            <div
               class="p-6 max-md:p-[10px] max-md:!pb-0 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center justify-between">
               <p class="text-white md:text-xl max-md:mt-4 mb-4 text-center font-Manrope-700">{{ $t('masks') }}</p>
               <img src="@/assets/img/b3.png" alt="">
            </div>
         </div>
      </div>
   </div>
</template>

<style></style>