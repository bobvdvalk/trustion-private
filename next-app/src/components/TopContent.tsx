import { Localized } from "@/i18n/Localized";
import { getTranslator } from "@/i18n/getTranslator";
import React from "react";

export const TopContent = async ({ lang }: Localized) => {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-medium radius-8"
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-search" />
                </span>
              </p>
            </div>
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
