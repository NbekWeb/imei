import './assets/css/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueMask from '@devindex/vue-mask';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(ElementPlus).use(VueMask).use(i18n)

app.mount('#app')
