import { PageProps } from "@/app/PageProps";
import { FileValidator } from "@/components/FileValidator";
import { getTranslator } from "@/i18n/getTranslator";
import { SignModal } from "@/components/SignModal";

export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <div className="hero  is-large custom-background">
        <div className="hero-body">
          <h1 className="title">{t("title")}</h1>
          <span className="subtitle">{t("tagline")}</span>
        </div>
      </div>
      <FileValidator lang={lang} />
    </>
  );
}
