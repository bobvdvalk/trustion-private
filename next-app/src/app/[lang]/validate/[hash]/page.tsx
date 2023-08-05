import { PageProps } from "@/app/PageProps";
import { getTranslator } from "@/i18n/getTranslator";
import { ValidationResult } from "@/components/ValidationResult";
import styles from "./page.module.scss";
import { classNames } from "@/lib/classNames";
import { DateTime } from "luxon";

export async function getData(hash: string) {
  const url = new URL(`${process.env.DIRECTUS_INTERNAL_URL}/validateDocument`);
  url.searchParams.set("hash", hash);
  const response = await fetch(url);
  const body = await response.json();
  console.log(`Validated document ${hash}`);
  return body;
}

export default async function Validate({
  params: { lang, hash },
}: PageProps<{ hash: string }>) {
  const { t } = await getTranslator(lang, "translation");
  const data = await getData(hash);
  if (data.error) {
    return (
      <div className={styles.results}>
        <div className="section">
          <div className="container is-max-desktop">
            <div className="card">
              <div className="card-content">
                <h1 className="title">{t("documentNotFound")}</h1>
                <p className="subtitle">{t("documentNotFoundSubtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.results}>
      <div className="section">
        <div className="container is-max-desktop">
          <ValidationResult lang={lang} result={data} />
        </div>
      </div>
    </div>
  );
}
