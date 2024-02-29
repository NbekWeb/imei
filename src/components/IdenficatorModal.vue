<script lang="ts" setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
function handleClose() {
   dialogVisible.value = false
}

function open() {
   dialogVisible.value = true
}

defineExpose({
   open
})
</script>

<template>
   <div>
      <el-dialog v-model="dialogVisible" :title="$t('IdentificationPlatform')" class="!max-w-[900px] sm:!w-full !w-[90%]"
         :before-close="handleClose">
         <div class="flex gap-2">
            <div>
               <p class="mb-2">{{ $t('IdentificationPlatform1') }}</p>
               <ul type="circle">
                  <li class="">{{ $t('IdentificationPlatform2') }}</li>
                  <li class="">{{ $t('IdentificationPlatform3') }}</li>
                  <li class="">{{ $t('IdentificationPlatform4') }}</li>
                  <li class="">{{ $t('IdentificationPlatform5') }}</li>
                  <li class="">{{ $t('IdentificationPlatform6') }}</li>
               </ul>
            </div>
            <img class="w-52 h-32 max-sm:hidden" src="@/assets/img/mac.png" alt="">
         </div>
         <p class="my-2">{{ $t('IdentificationPlatform7') }}</p>
         <p class="mb-2">{{ $t('IdentificationPlatform8') }}</p>
      </el-dialog>

   </div>
</template>
<style lang="scss">
.el-dialog {
   border-radius: 0px 30px 0px 30px;
   padding: 36px !important;

   @media(max-width: 1000px) {
      padding: 25px !important;
      width: 90% !important;
   }

   li {
      margin-left: 16px;
      list-style-type: disc;
   }

   .el-dialog__title {
      font-family: 'inter-700';
      font-size: 20px;
   }

   .el-dialog__headerbtn {
      top: 16px;
      right: 16px;

      i {
         color: black;
      }
   }
}
</style>