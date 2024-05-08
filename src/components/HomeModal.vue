<script lang="ts" setup>
import { ref } from 'vue'
import { postCall_API } from '@/services/phone';
const dialogVisible = ref(false)
const dialogVisibleClose = ref(false)
const _phone = ref('+998')
function handleClose() {
   dialogVisible.value = false
}

function open() {
   dialogVisible.value = true
}

defineExpose({
   open
})


 async function handleCall() {
    const [error, response] = await postCall_API(_phone.value.replaceAll(' ',''))
    if (error) return
    dialogVisibleClose.value = true;
    dialogVisible.value = false
    _phone.value = '+998'
}
</script>

<template>
   <div>
      <el-dialog v-model="dialogVisible" :title="$t('RequestCall')" class="!max-w-[500px] sm:!w-full !w-[90%]" :before-close="handleClose">
         <!-- <span>Заказать звонок</span> -->
         <p class="pr-12">{{ $t('useSolution') }}</p>
         <el-input type="text" name="mask" v-model="_phone" v-mask="'+000 00 000 00 00'" size="large" class="my-4"
            :autocomplete="$t('phoneNumber')" />
         <button @click="handleCall" :disabled="_phone.length < 17"
            class="font-inter-700 py-2 px-8 bg-gray text-white" :class="{ '!bg-danger': _phone.length > 16 }">{{ $t('RequestCall') }}</button>
      </el-dialog>
      <el-dialog v-model="dialogVisibleClose" class="!max-w-[500px] sm:!w-full !w-[90%]" :title="$t('ThankOrder')" width="500">
         <p class="pr-12">{{ $t('orderedCall') }}</p>
         <button @click="dialogVisibleClose = false" class="font-inter-700 mt-4 py-3 px-8 bg-danger text-white">
            {{ $t('close') }}</button>
      </el-dialog>
   </div>
</template>
<style lang="scss">
.el-dialog {
   border-radius: 0px 30px 0px 30px;
   padding: 36px !important;
   @media(max-width: 500px){
      padding: 25px!important;
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