import React, { PropsWithChildren } from "react";
import "../../global.scss";
import { PageProps } from "@/app/PageProps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import styles from "./layout.module.scss";
import { getTranslator } from "@/i18n/getTranslator";

export async function generateMetadata({ params: { lang } }: PageProps) {
  const { t } = await getTranslator(lang, "translation");

  return {
    title: t("title"),
    description: t("tagline"),
  };
}

export default function RootLayout({
  params: { lang },
  children,
}: PropsWithChildren & PageProps) {
  return (
    <html lang={lang}>
      <body className={styles.body}>
        <Navbar lang={lang} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
