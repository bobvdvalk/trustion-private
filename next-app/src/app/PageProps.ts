import { Localized } from "@/i18n/Localized";

export interface PageProps<T = {}> {
  params: T & Localized;
}
