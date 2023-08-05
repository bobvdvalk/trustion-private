import React, { PropsWithChildren } from "react";
import "../../global.scss";
import { PageProps } from "@/app/PageProps";
import { translateServerSide } from "@/i18n/translateServerSide";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
