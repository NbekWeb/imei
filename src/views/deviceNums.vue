<script lang="ts" setup></script>

<template>
  <div class="p-12 rounded-xl bg-primary-800">
    <p class="text-[48px] font-medium font-inter-tight">
      Количество устройств в разрезе мобильных операторов
      <span class="text-[40px]"> (последние 30 дней) </span>
    </p>
    <div
      class="flex items-center gap-2 border-b-4 border-dashed border-[#294066] py-14"
    >
      <p class="text-[40px] w-56 font-medium font-inter-tight">UMS</p>
      <div class="grow">
        <div class="h-8 ums w-[75%] rounded-tr-3xl rounded-br-3xl"></div>
      </div>
      <p class="font-inter-600 text-[48px]">8 318 320</p>
    </div>
    <div
      class="flex items-center gap-2 border-b-4 border-dashed border-[#294066] py-14"
    >
      <p class="text-[40px] w-56 font-medium font-inter-tight">BEELINE</p>
      <div class="grow">
        <div class="h-8 beline w-[95%] rounded-tr-3xl rounded-br-3xl"></div>
      </div>
      <p class="font-inter-600 text-[48px]">9 000 877</p>
    </div>
    <div
      class="flex items-center gap-2 border-b-4 border-dashed border-[#294066] py-14"
    >
      <p class="text-[40px] w-56 font-medium font-inter-tight">UCELL</p>
      <div class="grow">
        <div class="h-8 usel w-[65%] rounded-tr-3xl rounded-br-3xl"></div>
      </div>
      <p class="font-inter-600 text-[48px]">7 627 144</p>
    </div>
    <div
      class="flex items-center gap-2 border-b-4 border-dashed border-[#294066] py-14"
    >
      <p class="text-[40px] w-56 font-medium font-inter-tight">UZMOBILE</p>
      <div class="grow">
        <div class="h-8 uzmobile w-[85%] rounded-tr-3xl rounded-br-3xl"></div>
      </div>
      <p class="font-inter-600 text-[48px]">8 875 630</p>
    </div>
    <div
      class="flex items-center gap-2 pt-14"
    >
      <p class="text-[40px] w-56 font-medium font-inter-tight">HUMANS</p>
      <div class="grow">
        <div class="h-8 humans w-[30%] rounded-tr-3xl rounded-br-3xl"></div>
      </div>
      <p class="font-inter-600 text-[48px]">1 026 598</p>
    </div>
  </div>
</template>
<style scoped>
.ums {
  background: linear-gradient(
    90deg,
    rgba(230, 0, 5, 0.2) 0%,
    rgba(230, 0, 5, 1) 100%
  );
}

.beline {
  background: linear-gradient(
    90deg,
    rgba(254, 208, 0, 0.2) 0%,
    rgba(254, 208, 0, 1) 100%
  );
}

.usel {
  background: linear-gradient(
    90deg,
    rgba(123, 36, 178, 0.2) 0%,
    rgba(123, 36, 178, 1) 100%
  );
}

.uzmobile {
  background: linear-gradient(
    90deg,
    rgba(4, 125, 194, 0.2) 0%,
    rgba(4, 125, 194, 1) 100%
  );
}

.humans {
  background: linear-gradient(
    90deg,
    rgba(181, 138, 16, 0.2) 0%,
    rgba(181, 138, 16, 1) 100%
  );
}
</style>
