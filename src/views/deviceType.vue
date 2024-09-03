<script setup></script>
<template>
  <div class="flex flex-col p-12 rounded-xl bg-primary-800">
    <p class="text-[48px] font-medium font-inter-tight">
      В разрезе типа устройств
    </p>
    <div class="flex flex-grow w-full pt-13">
      <div
        class="w-[20%] border-r-4 border-dashed border-[#294066] h-full justify-between flex flex-col"
      >
        <p class="text-[40px] font-medium font-inter-tight text-center px-4">
          Смартфоны
        </p>
        <div class="flex flex-col items-center">
          <div class="dt h-[490px] w-8 rounded-t-[15px] mb-6"></div>
          <span class="font-semibold font-inter-tight text-[48px] text-white">
            52 242 399
          </span>
        </div>
      </div>
      <div
        class="w-[20%] border-r-4 border-dashed border-[#294066] h-full justify-between flex flex-col"
      >
        <p class="text-[40px] font-medium font-inter-tight text-center px-4">
          Кнопочные телефоны
        </p>
        <div class="flex flex-col items-center">
          <div class="dt h-[245px] w-8 rounded-t-[15px] mb-6"></div>
          <span class="font-semibold font-inter-tight text-[48px] text-white">
            20 180 111
          </span>
        </div>
      </div>
      <div
        class="w-[20%] border-r-4 border-dashed border-[#294066] h-full justify-between flex flex-col"
      >
        <p class="text-[40px] font-medium font-inter-tight text-center px-4">
          Портативные устройства
        </p>
        <div class="flex flex-col items-center">
          <div class="dt h-[79px] w-8 rounded-t-[15px] mb-6"></div>
          <span class="font-semibold font-inter-tight text-[48px] text-white">
            237 640
          </span>
        </div>
      </div>
      <div
        class="w-[20%] border-r-4 border-dashed border-[#294066] h-full justify-between flex flex-col"
      >
        <p class="text-[40px] font-medium font-inter-tight text-center px-4">
          Планшеты
        </p>
        <div class="flex flex-col items-center">
          <div class="dt h-[125px] w-8 rounded-t-[15px] mb-6"></div>
          <span class="font-semibold font-inter-tight text-[48px] text-white">
            1 183 850
          </span>
        </div>
      </div>
      <div class="w-[20%] h-full justify-between flex flex-col">
        <p class="text-[40px] font-medium font-inter-tight text-center px-4">
          Другие
        </p>
        <div class="flex flex-col items-center">
          <div class="dt h-[184px] w-8 rounded-t-[15px] mb-6"></div>
          <span class="font-semibold font-inter-tight text-[48px] text-white">
            3 468 667
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dt {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, #ffffff 100%);
}
</style>
