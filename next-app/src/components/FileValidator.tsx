"use client";
import { Localized } from "@/i18n/Localized";
import { useTranslation } from "@/i18n/useTranslation";

export const FileValidator = ({ lang }: Localized) => {
  const { t } = useTranslation(lang, "translation");
  return (
    <div className="section">
      <div className="container">
        <h2>{t("title")}</h2>
      </div>
    </div>
  );
};
