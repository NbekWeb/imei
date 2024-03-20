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
      <el-dialog v-model="dialogVisible" :title="$t('InfoKiosk')" class="!max-w-[800px] sm:!w-full !w-[90%]"
         :before-close="handleClose">
         <div class="flex gap-4">
            <img class="w-52 h-40 max-sm:hidden" src="@/assets/img/Group 4.png" alt="">
            <p class="mb-2">{{ $t('InfoKiosk1') }}</p>
         </div>

      </el-dialog>   

   </div>
</template>
<style lang="scss">
.el-dialog {
   border-radius: 0px 30px 0px 30px;
   padding: 36px !important;

   @media(max-width: 500px) {
      padding: 25px !important;
   }

   li {
      margin-left: 24px;
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