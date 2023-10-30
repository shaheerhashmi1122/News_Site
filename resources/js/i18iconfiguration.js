import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from '../js/Components/UserComponents/en/global.json';
import global_es from '../js/Components/UserComponents/es/global.json';
i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'en', // Default language
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });

export default i18n;