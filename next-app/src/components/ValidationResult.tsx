import { getTranslator } from "@/i18n/getTranslator";
import { Localized } from "@/i18n/Localized";
import { DateTime } from "luxon";
import styles from "./ValidationResult.module.scss";
import placeholder from "@/images/96x96.png";
import Image from "next/image";

export interface Props {
  result: {
    signer: {
      name: string;
    };
    document: {
      filename: string;
      hashedOn: string;
      context: string;
    };
  };
}

export const ValidationResult = async ({ result, lang }: Props & Localized) => {
  const { t } = await getTranslator(lang, "translations");
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <Image src={placeholder} width={96} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{result?.signer?.name}</p>
            <p className="subtitle is-6">
              {t("signedOn", {
                date: DateTime.fromISO(result.document.hashedOn).toRelative({
                  locale: lang,
                }),
              })}
            </p>
          </div>
        </div>

        <div className="content">
          <code className={styles.contextBlock}>{result.document.context}</code>
        </div>
      </div>
    </div>
  );
};
