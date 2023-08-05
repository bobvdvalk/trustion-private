import { Language } from "@/i18n/settings";

export interface PageProps<T = {}> {
  params: T & {
    lang: Language;
  };
}
