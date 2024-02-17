<script lang="ts" setup>
import { ref } from 'vue'
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
</script>

<template>
   <div>
      <el-dialog v-model="dialogVisible" title="Заказать звонок" width="500" :before-close="handleClose">
         <!-- <span>Заказать звонок</span> -->
         <p class="pr-12">Использование решений в различных ситуациях может отличаться. Наши менеджеры готовы дать свои
            консультации и
            ответить на все ваши вопросы. Просто оставьте свой номер телефона и мы вам перезвоним</p>
         <el-input type="text" name="mask" v-model="_phone" v-mask="'+000 00 000 00 00'" size="large" class="my-4"
            placeholder="Ваш номер телефона" />
         <button @click="dialogVisibleClose = true ; dialogVisible = false" :disabled="_phone.length < 17"
            class="font-Manrope-700 py-2 px-8 bg-gray text-white" :class="{ '!bg-danger': _phone.length > 16 }">Заказать
            звонок</button>
      </el-dialog>
      <el-dialog v-model="dialogVisibleClose" title="Спасибо за заказ!" width="500">
         <p class="pr-12">Вы заказали звонок, ожидайте в ближайшее
            время наши сотрудники свяжутся с вами.</p>
         <button @click="dialogVisibleClose = false" class="font-Manrope-700 mt-4 py-2 px-8 bg-danger text-white">
            Закрыть</button>
      </el-dialog>
   </div>
</template>
<style lang="scss">
.el-dialog {
   border-radius: 0px 30px 0px 30px;
   padding: 36px !important;

   .el-dialog__title {
      font-family: 'Manrope-700';
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