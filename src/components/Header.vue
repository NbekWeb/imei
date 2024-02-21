<script lang="ts" setup>
import { ref, watch } from 'vue';
import TheModal from './HomeModal.vue'
import { _lang } from '@/i18n';
import i18n from '@/i18n'
import { useRouter } from 'vue-router';

const _headerRef = ref()
const _openMenu = ref(false)
const Router = useRouter()
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

watch(() => Router, () => _openMenu.value = false, { deep: true })

</script>

<template>
   <TheModal ref="_headerRef" />
   <div class="container px-10 max-md:px-5 !my-[60px] max-lg:!my-[32px] flex justify-between max-lg:relative">
      <div class="flex gap-4">
         <img src="@/assets/img/logo.svg" alt="">
         <el-select @change="handleLanguage" v-model="_lang" class="!rounded-3xl" placeholder="Select" size="large"
            style="width: 100px">
            <el-option v-for="item in _langOptions" :key="item.value" :label="item.name" :value="item.value" />
         </el-select>
      </div>
      <div class="flex gap-6 max-md:gap-4 items-center ">
         <img @click="_openMenu = true" class="hidden max-lg:block cursor-pointer" src="@/assets/img/menuOpen.svg" alt="">
         <div
            class="flex gap-3 max-lg:absolute max-lg:flex-col max-lg:p-9 max-lg:w-[244px] open_menu max-lg:top-[-350px] max-lg:!z-99 max-lg:transition-all max-lg:bg-white"
            :class="_openMenu && '!top-0'">
            <img @click="_openMenu = false" class="hidden max-lg:block cursor-pointer absolute right-5 top-5"
               src="@/assets/img/menuClose.svg" alt="">
            <h2 class="font-Manrope-700 cursor-pointer sm:hidden">+998 99 324-42-13</h2>
            <router-link to="/" class="text-primary font-Manrope-500"> {{ $t('advantages') }}</router-link>
            <router-link to="/identifikator" class="text-primary font-Manrope-500"> {{ $t('reliability') }}</router-link>
            <router-link to="/politika" class="text-primary font-Manrope-500"> {{ $t('Products') }}</router-link>
            <router-link to="/politikaInfo" class="text-primary font-Manrope-500"> {{ $t('Cases') }}</router-link>
            <router-link to="/" class="text-primary font-Manrope-500"> {{ $t('Indicators') }}</router-link>
         </div>
         <h2 class="font-Manrope-700 cursor-pointer max-sm:hidden">+998 99 324-42-13</h2>
         <button @click="openModal"
            class="bg-danger font-Manrope-700 text-white md:text-xl max-md:px-4 max-md:py-2">{{ $t('RequestCall') }}</button>
      </div>

   </div>
</template>
<style lang="scss">
i {
   color: red;
}

.el-select--large .el-select__wrapper {
   border-radius: 20px;
   color: rgb(58, 73, 156) !important;
   width: 100px !important;
}

.el-select__placeholder,
.el-select__caret {
   color: rgb(58, 73, 156) !important;

}

@media (max-width: 1100px) {
   .open_menu {
      box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
      border-radius: 0px 20px;
      left: 50%;
      transform: translate(-50%);
   }
}
</style>