import { createI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'

import uz from './uz/index.json'
import ru from './ru/index.json'
import crill from './crill/index.json'

export const _lang = useStorage<('ru' | 'uz' | 'crill')>('locale', () => 'ru')

const i18n = createI18n({
   // legacy: false,
   locale: _lang.value,
   fallbackLocale: 'uz',
   allowComposition: true,
   messages: {
      uz,
      ru,
      crill
   }
})

export default i18n
