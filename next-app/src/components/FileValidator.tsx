"use client";
import { Localized } from "@/i18n/Localized";
import { useTranslation } from "@/i18n/useTranslation";
import { ChangeEvent, FormEvent, useState } from "react";

export const FileValidator = ({ lang }: Localized) => {
  const { t } = useTranslation(lang, "translation");
  const [file, setFile] = useState<File>();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.item(0) || undefined);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="section">
      <div className="container">
        <h2 className="title">{t("validateNow")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="field file has-name is-right is-fullwidth">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="document"
                onChange={handleChange}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">{t("pickFile")}</span>
              </span>
              <span className="file-name">{file?.name || "..."}</span>
            </label>
          </div>
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button disabled={!file} className="button is-primary">
                {t("validate")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
