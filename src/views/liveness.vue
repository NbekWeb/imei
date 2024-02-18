<script lang="ts" setup>

</script>
<template>
   <div class="bg-primary py-16 mt-16">
      <div class="container px-10 max-md:px-5">
         <h1 class="text-white max-md:text-[40px]">{{ $t('LivenessScore') }}</h1>
         <p class="mt-2 mb-4 text-white">
            {{ $t('LivenessScoreTitle') }}
         </p>
         <button class="px-5 py-2 text-base text-primary bg-white mb-8">{{ $t('MoreDetails') }}</button>
         <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-lg:gap-2">
            <div class="p-6 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center">

               <img src="@/assets/img/b1.png" alt="">
            </div>
            <div class="p-6 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center">

               <img src="@/assets/img/b2.png" alt="">
            </div>
            <div class="p-6 pb-0 border-2 rounded-tr-2xl rounded-bl-2xl border-white/15 flex flex-col items-center">
               <img src="@/assets/img/b3.png" alt="">
            </div>
         </div>
      </div>
   </div>
</template>

<style></style>