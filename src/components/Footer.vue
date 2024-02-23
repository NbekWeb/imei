<script lang="ts" setup>

</script>

<template>
   <div class="bg-black py-[72px] max-md:py-4">
      <div class="container !mt-[60px] !mb-8 max-md:px-4 flex justify-between">
         <img src="@/assets/img/darkLogo.svg" alt="">
         <div class="flex gap-6 items-center ">
            <div class="flex gap-3 max-lg:hidden">
               <a class="text-white font-inter-500" href="#">{{ $t('AboutCompany') }}</a>
               <a class="text-white font-inter-500" href="#">{{ $t('News') }}</a>
               <router-link to="/identifikator" class="text-white font-inter-500" href="#">{{ $t('Products') }}</router-link>
               <a class="text-white font-inter-500" href="#">{{ $t('Contacts') }}</a>
               <a class="text-white font-inter-500" href="#">{{ $t('ReportBug') }}</a>
            </div>
            <div class="flex flex-wrap items-center justify-end gap-5">
               <h2 class="font-inter-600 text-white">+998 33 500-60-77</h2>
               <button class="bg-white font-inter-500 text-black">{{ $t('RequestCall') }}</button>
            </div>
         </div>
      </div>
      <div class="container flex justify-between max-sm:flex-col max-md:px-4">
         <router-link to="/politikaInfo" class="max-md:text-xs max-sm:mb-4 text-gray-900">{{ $t('PersonalData') }}</router-link>
         <router-link to="/politika" class="max-md:text-xs text-gray-900">{{ $t('PrivacyPolicy') }}</router-link>
      </div>

   </div>
</template>