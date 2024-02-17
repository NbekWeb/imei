<script lang="ts" setup>
import { ref } from 'vue';
import TheModal from './HomeModal.vue'
import { _lang } from '@/i18n';
import i18n from '@/i18n'

const _headerRef = ref()

const _langOptions = ref([
   {
      name: "Uzb",
      value: 'uz'
   },
   {
      name: 'Рус',
      value: 'ru'
   },
   {
      name: 'Кирил',
      value: 'crill'
   },
])

function openModal() {
   _headerRef.value.open()
}
function handleLanguage() {
   i18n.global.locale = _lang.value
}
</script>

<template>
   <TheModal ref="_headerRef" />
   <p v-html="$t('RequestCall')"></p>
   <p v-html="$t('Security')"></p>
   <div class="container !my-[60px] flex justify-between">
      <div class="flex gap-4">
         <img src="@/assets/img/logo.svg" alt="">
         <el-select @change="handleLanguage" v-model="_lang" class="!rounded-3xl" placeholder="Select" size="large"
            style="width: 100px">
            <el-option v-for="item in _langOptions" :key="item.value" :label="item.name" :value="item.value" />
         </el-select>
      </div>
      <div class="flex gap-6 items-center">
         <div class="flex gap-3">
            <a class="text-primary font-Manrope-500" href="#"> {{ $t('advantages') }}</a>
            <a class="text-primary font-Manrope-500" href="#"> {{ $t('reliability') }}</a>
            <a class="text-primary font-Manrope-500" href="#">Продукты</a>
            <a class="text-primary font-Manrope-500" href="#">Кейсы</a>
            <a class="text-primary font-Manrope-500" href="#">Показатели</a>
         </div>
         <h2 class="font-Manrope-700">+998 99 324-42-13</h2>
         <button @click="openModal" class="bg-danger font-Manrope-700 text-white">Заказать звонок</button>
      </div>
   </div>
</template>
<style lang="scss">
i {
   color: red;
}
</style>