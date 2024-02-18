<script lang="ts" setup>

</script>

<template>
   <div class="container px-10 max-md:px-5">
      <div>
         <h1 class="max-md:text-[40px]">{{ $t('advantages') }}</h1>
         <p class="mt-4 mb-8 md:text-2xl">Обоснование, почему наше решение хорошее</p>
         <div class="grid grid-cols-4 max-md:grid-cols-2  max-sm:grid-cols-1  gap-4 max-lg:gap-2">
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a1.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('ReliableVerification') }}</p>
               <p class="text-gray-600">{{ $t('ReliableVerificationTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a2.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2 pr-6">{{ $t('ProcessingSpeed') }}</p>
               <p class="text-gray-600">{{ $t('ProcessingSpeedTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a3.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('MinPositives') }}</p>
               <p class="text-gray-600">{{ $t('MinPositivesTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a4.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('Identification') }}</p>
               <p class="text-gray-600">{{ $t('IdentificationTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a5.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('LivenessPhoto') }}</p>
               <p class="text-gray-600">{{ $t('LivenessPhotoTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a6.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('IdentificationForeigner') }}</p>
               <p class="text-gray-600">{{ $t('IdentificationForeignerTitle') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/a7.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('MicroserviceArchitecture') }}</p>
               <p class="text-gray-600">{{ $t('MicroserviceArchitectureTitle') }}</p>
            </div>
         </div>
      </div>
      <div class="mt-16">
         <h1 class="max-md:text-[40px]">{{ $t('advantages') }}</h1>
         <p class="mt-4 mb-8 md:text-2xl">Обоснование, почему наше решение может быть использовано</p>
         <div class="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-2">
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('systemDeployed') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('CompliesNational') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">{{ $t('algorithmRanks') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl my-3">{{ $t('ProcessingPersonal') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('FullyComplies') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('ReceivedInternational') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('CompliesISO') }}</p>
            </div>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200">
               <img src="@/assets/img/check.svg" alt="">
               <p class="font-Manrope-700 text-xl mt-3">{{ $t('solutionActively') }}</p>
            </div>

         </div>
      </div>
   </div>
</template>