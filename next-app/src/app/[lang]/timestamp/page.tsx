import "../overview/style.css";
import { PageProps } from "@/app/PageProps";
import { getTranslator } from "@/i18n/getTranslator";
import { SignForm } from "@/components/SignForm";

export default async function Timestamp({ params: { lang } }: PageProps) {
  const { t } = await getTranslator(lang, "translation");

  return (
    <>
      <div className="main">
        <h1 className="title">Timestamp </h1>
        <SignForm lang={lang} />
      </div>
    </>
  );
}
