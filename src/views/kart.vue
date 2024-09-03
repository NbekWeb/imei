<script setup>
import UzCard from "../components/UzCard.vue";
</script>

<template>
  <div class="flex flex-col gap-20 p-12 mt-3 rounded-xl bg-primary-800">
    <div>
      <p class="text-[48px] font-medium font-inter-tight">
        Регистрация в разрезе регионов
      </p>
    </div>
    <div class="flex">
      <uz-card />
      <div class="flex-grow">
        <div class="flex items-center w-full bg-primary-600 h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white"> Ташкент </span>
              <div class="w-[950px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">18 753 877</span>
              <span class="text-[32px] text-[#41D2FF]">23,65%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Ферганская область
              </span>
              <div class="w-[888px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">12 073 645</span>
              <span class="text-[32px] text-[#41D2FF]">15,22%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full bg-primary-600 h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Бухарская область
              </span>
              <div class="w-[822px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">8 871 586</span>
              <span class="text-[32px] text-[#41D2FF]">11,19%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Хорезмская область
              </span>
              <div class="w-[728px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">5 882 974</span>
              <span class="text-[32px] text-[#41D2FF]">7,42%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15 bg-primary-600">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white"
                >Сурхандарьинская область
              </span>
              <div class="w-[625px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">3 442 213</span>
              <span class="text-[32px] text-[#41D2FF]">4,34%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Самаркандская область
              </span>
              <div class="w-[691px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">4 600 983</span>
              <span class="text-[32px] text-[#41D2FF]">5,80%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15 bg-primary-600">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Кашкадарьинская область
              </span>
              <div class="w-[636px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">3 602 449</span>
              <span class="text-[32px] text-[#41D2FF]">4,54%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Ташкентская область
              </span>
              <div class="w-[624px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">3 287 710</span>
              <span class="text-[32px] text-[#41D2FF]">4,15%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15 bg-primary-600">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Навоийская область</span
              >
              <div class="w-[606px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">3 254 315</span>
              <span class="text-[32px] text-[#41D2FF]">4,10%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Сырдарьинская область
              </span>
              <div class="w-[543px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">2 568 759</span>
              <span class="text-[32px] text-[#41D2FF]">3,24%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15 bg-primary-600">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Наманганская область
              </span>
              <div class="w-[728px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">5 355 391</span>
              <span class="text-[32px] text-[#41D2FF]">6,75%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Андижанская область
              </span>
              <div class="w-[636px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">3 098 353</span>
              <span class="text-[32px] text-[#41D2FF]">3,91%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15 bg-primary-600">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Джизакская область
              </span>
              <div class="w-[543px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">2 351 288</span>
              <span class="text-[32px] text-[#41D2FF]">2,96%</span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full h-15">
          <div class="px-[30px] flex justify-between w-full">
            <div class="flex items-center">
              <span class="w-[500px] text-[32px] text-white">
                Республика Каракалпакстан
              </span>
              <div class="w-[531px] bg h-5 rounded-r-[15px]"></div>
            </div>
            <div class="flex items-center gap-11">
              <span class="text-[40px] text-white">2 169 124</span>
              <span class="text-[32px] text-[#41D2FF]">2,73%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #ffffff 100%);
}
</style>
