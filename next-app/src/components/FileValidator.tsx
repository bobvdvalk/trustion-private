"use client";
import { Localized } from "@/i18n/Localized";
import { useTranslation } from "@/i18n/useTranslation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { classNames } from "@/lib/classNames";

function base64EncodeURL(byteArray: Uint8Array) {
  return btoa(
    Array.from(new Uint8Array(byteArray))
      .map((val) => {
        return String.fromCharCode(val);
      })
      .join(""),
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export const FileValidator = ({ lang }: Localized) => {
  const { t } = useTranslation(lang, "translation");
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.item(0) || undefined);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!file) {
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      try {
        const hash = await crypto.subtle.digest(
          "SHA-1",
          await file.arrayBuffer(),
        );
        const base64 = base64EncodeURL(new Uint8Array(hash));
        router.push(`/${lang}/validate/${base64}`);
      } finally {
        setLoading(false);
      }
    });
  }

  return (
    <div className="section">
      <div className="container">
        <h2 className="title">{t("validateNow")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="field  is-fullwidth">
            <label
              htmlFor="file-upload"
              className="custom-file-upload is-fullwidth"
            >
              <i className="fa fa-cloud-upload"></i> Drag and drop files, or
              Browse
            </label>
            <input
              className=""
              type="file"
              name="document"
              id="file-upload"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <div className="control">
              <button
                disabled={!file}
                {...classNames(
                  "button",
                  "eigenwijs",
                  "is-primary",
                  loading && "is-loading",
                )}
              >
                {t("validate")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
