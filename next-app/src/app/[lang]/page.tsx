import { translateServerSide } from "@/i18n/translateServerSide";
import { PageProps } from "@/app/PageProps";

export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await translateServerSide(lang, "common");
  return (
    <>
      <div className="hero  is-large is-primary">
        <div className="hero-body">
          <h1 className="title">{t("title")}</h1>
          <span className="subtitle">{t("tagline")}</span>
        </div>
      </div>
    </>
  );
}
