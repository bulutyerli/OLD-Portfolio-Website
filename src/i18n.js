import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en/translation.json";
import tr from "./locale/tr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    tr: { ...tr },
  },
  lng: "en",
});

export default i18n;
