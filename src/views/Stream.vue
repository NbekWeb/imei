<script>

</script>
    
<template>
    <div class="bg-primary">
        <div
            class="container px-10 max-md:px-5 !py-[72px] grid grid-cols-2 max-md:grid-cols-1  gap-x-4  max-md:flex max-md:flex-col-reverse max-md:items-center">
            <div class="max-md:mt-[56px]">
                <img src="@/assets/img/mac2.png" alt="">
            </div>
            <div class="flex flex-col justify-center items-start">
                <h1 class="text-white text-[56px] max-md:text-[40px] leading-[64px] mb-[24px]">{{ $t('Stream') }}</h1>
                <p class="text-[16px] text-white leading-[22px] mb-[12px] mr-[50px]">{{ $t('StreamTitle') }}</p>
                <button class="px-5 py-2 text-base text-primary bg-white">{{ $t('MoreDetails') }}</button>
            </div>
        </div>
    </div>
</template>


<style></style>