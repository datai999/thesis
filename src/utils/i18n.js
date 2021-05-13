import langEN from "assets/languages/lang_EN.json";
import langVI from "assets/languages/lang_VI.json";
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: langEN,
  },
  vi: {
    translation: langVI,
  },
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
