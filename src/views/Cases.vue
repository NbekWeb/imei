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
   <div class="bg-primary py-16 mt-16">
      <div class="container px-10">
         <h1 class="text-white">Кейсы</h1>
         <p class="text-white mt-4 mb-8">Предусмотреть различные варианты использования, чтобы потенциальные <br />
            пользователи смогли «примерить» на свой бизнес</p>
      </div>
      <swiper class="container !max-w-[1330px] !px-20" :modules="modules" :autoplay="{
         delay: 35000,
         disableOnInteraction: false,
      }" :navigation="true" :slides-per-view="3" :space-between="20">
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k1.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Интеграция с мобильным приложением банка</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k2.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Киоски самообслуживания и картоматы</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k3.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Выявление VIP-клиентов среди посетителей</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k4.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Использование технологии FacePay</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k5.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Система контроля и учёта доступа</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="p-6 rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k6.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Оценка возраста и пола посетителей</p>
            </div>
         </swiper-slide>
         <swiper-slide class="!h-full">
            <div class="p-6 !h-full rounded-tr-2xl rounded-bl-2xl border-2 border-primary-200 bg-white">
               <img src="@/assets/img/k7.svg" alt="">
               <p class="font-Manrope-700 text-xl my-2">Оценка эмоций <br> посетителей</p>
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
   &::after {
      color: white;
   }
}
</style>