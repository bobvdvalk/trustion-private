import { Localized } from "@/i18n/Localized";
import { getTranslator } from "@/i18n/getTranslator";
import React from "react";
import "../app/[lang]/overview/style.css";

export const TopCertificate = async ({ lang }: Localized) => {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <div className="topcertificate level" style={{ marginTop: "15px" }}>
        <div className="level-left">
          <div className="level-item">
            <a href="/" className="button">
              <i className="fa fa-chevron-left" />
              Go back
            </a>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button eigenwijs is-medium has-text-weight-bold radius-8">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
