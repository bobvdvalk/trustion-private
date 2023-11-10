import { getTranslator } from "@/i18n/getTranslator";
import { Localized } from "@/i18n/Localized";
import styles from "./ValidationResult.module.scss";

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

export const ValidationResult = async ({
  result,
  hash,
  lang,
}: Props & String & Localized) => {
  const { t } = await getTranslator(lang, "translations");
  const formattedDate = new Date(result?.document?.hashedOn);
  const fileType = result?.document?.filename.split(".").pop();
  console.log(result);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="title">{t("certificateTitle")}</h1>
          <p className="subtitle is-5">{t("certificate")}</p>
          <p className="is-3" style={{ color: "#618DC1" }}>
            {result?.document?.filename}
          </p>
          <p>
            on <strong>{formattedDate.toDateString()}</strong> at{" "}
            <strong>{formattedDate.toLocaleTimeString("nl-NL")}</strong>
          </p>
          <hr />
          <div className="level">
            <div className="level-left">
              <strong>Publisher:</strong>
            </div>
            <div className="level-right" style={{ color: "#618DC1" }}>
              {result?.signer?.name}
            </div>
          </div>
          <div className="level">
            <div className="level-left">
              <strong>Validation level:</strong>
            </div>
            <div className="level-right" style={{ color: "#618DC1" }}>
              Level 3 (Blockchain verified)
            </div>
          </div>
          <div className="level">
            <div className="level-left">
              <strong>Type:</strong>
            </div>
            <div className="level-right" style={{ color: "#618DC1" }}>
              {fileType}
            </div>
          </div>
          <hr />
          <strong>Hash:</strong>

          <p style={{ color: "#618DC1" }}>{hash}</p>
          <code className={styles.contextBlock}>{result.document.context}</code>
        </div>
      </div>
    </div>
  );
};
{
  /*<div className="media">*/
}
{
  /*  <div className="media-left">*/
}
{
  /*    <figure className="image is-48x48">*/
}
{
  /*      <Image src={placeholder} width={96} alt="Placeholder image" />*/
}
{
  /*    </figure>*/
}
{
  /*  </div>*/
}
{
  /*  <div className="media-content">*/
}
{
  /*    <p className="title is-4">{result?.signer?.name}</p>*/
}
{
  /*    <p className="subtitle is-6">*/
}
{
  /*      {t("signedOn", {*/
}
{
  /*        date: DateTime.fromISO(result.document.hashedOn).toRelative({*/
}
{
  /*          locale: lang,*/
}
{
  /*        }),*/
}
{
  /*      })}*/
}
{
  /*    </p>*/
}
{
  /*  </div>*/
}
{
  /*</div>*/
}
