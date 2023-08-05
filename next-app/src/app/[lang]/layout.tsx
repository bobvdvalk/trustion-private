import React, { PropsWithChildren } from "react";
import "../../global.scss";
import { PageProps } from "@/app/PageProps";
import { translateServerSide } from "@/i18n/translateServerSide";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import styles from "./layout.module.scss";

export async function generateMetadata({ params: { lang } }: PageProps) {
  const { t } = await translateServerSide(lang, "common");

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
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
