import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLanguage, languages } from "@/i18n/settings";

const initI18next = async (lang: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      lng: lang,
      supportedLngs: languages,
      fallbackLng: fallbackLanguage,
      ns,
      defaultNS: "translation",
      fallbackNS: "translation",
    });
  return i18nInstance;
};

export async function translateServerSide(
  lang: string,
  ns: string,
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
