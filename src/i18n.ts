import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./Locales/en/translation.json";
import th from "./Locales/th/translation.json";

const resources = {
  en: {
    translation: en,
  },
  th: {
    translation: th,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
