import React, { PropsWithChildren } from "react";
import "./overview/style.css";
import "../../global.scss";
import { PageProps } from "@/app/PageProps";
import { getTranslator } from "@/i18n/getTranslator";
import { SideNav } from "@/components/SideNav";
import { ShowUserBox } from "@/components/ShowUserBox";

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
      <body>
        {/*<Navbar lang={lang} />*/}
        <main className="columns" id="mail-app">
          <SideNav lang={lang} />
          <div
            className="column is-8 messages hero is-fullheight"
            id="message-feed"
          >
            {children}
          </div>
          <div
            className="column is-6 message hero is-fullheight"
            id="message-pane"
          >
            <ShowUserBox
              first_name="Bob"
              last_name="van der Valk"
              email="bob@trustion.io"
            />
          </div>
        </main>
      </body>
    </html>
  );
}
