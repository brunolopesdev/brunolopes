import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ENUS from './locales/en/en-us.json'

const resources = {
  'en-us': ENUS
}

i18n.init({
  resources,
  //   lng: navigator.language,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
