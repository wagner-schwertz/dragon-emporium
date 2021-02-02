import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "locale";

//initialize localization
let locale = localStorage.getItem("locale");
if (!["en", "pt"].includes(locale)) {
  localStorage.setItem("locale", "en");
  locale = "en";
}

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
