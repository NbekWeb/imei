<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Advantages from './Advantages.vue'

const modules = ref([Navigation, Autoplay])
</script>

<template>
   <div id="cases" class="bg-primary py-16 mt-16">
      <div class="container px-10 max-md:px-5">
         <h1 class="text-white mb-10 max-md:text-[44px]">{{ $t('Cases') }}</h1>
         <!-- <p class="text-white mt-4 mb-8">Предусмотреть различные варианты использования, чтобы потенциальные <br />
            пользователи смогли «примерить» на свой бизнес</p> -->
      </div>
      <swiper class="container !max-w-[1330px] !px-20" :modules="modules" :autoplay="{
         delay: 35000,
         disableOnInteraction: false,
      }" :navigation="true" :space-between="20" :breakpoints="{
   '580': {
      slidesPerView: 1,
      spaceBetween: 8,
   },
   '760': {
      slidesPerView: 2,
      spaceBetween: 8,
   },
   '992': {
      slidesPerView: 3,
      spaceBetween: 16,
   },
}">
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k1.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('mobileApplication') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k2.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('vendingMachines') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k3.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('IdentificationVIP') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k4.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('FacePay') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k5.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('accountingSystem') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k6.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('genderVisitors') }}</p>
            </div>
         </swiper-slide>
         <swiper-slide class="!h-full">
            <div class="p-6 !h-full rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k7.svg" alt="">
               <p class="h-[49px] font-inter-700 max-md:h-[73px] max-md:line-clamp-3 my-2">{{ $t('visitorsEmotions') }}</p>
            </div>
         </swiper-slide>
      </swiper>
   </div>
</template>
<style lang="scss">
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
   left: var(--swiper-navigation-sides-offset, -70px);
}

.swiper-button-prev,
.swiper-rtl .swiper-button-prev {
   right: var(--swiper-navigation-sides-offset, -70px);
}

.swiper-button-prev {
   cursor: pointer;
   left: 0;
   top: 22px;
   height: 100%;
   width: 70px;
   background: #5864AB;
   border-radius: 0px 20px 0px 0px;

   &::after {
      color: white;
   }
}

.swiper-button-next {
   cursor: pointer;
   right: 0;
   top: 22px;
   height: 100%;
   width: 70px;
   background: #5864AB;
   border-radius: 0px 0px 0px 20px;

   &::after {
      color: white;
   }
}
</style>