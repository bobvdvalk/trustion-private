"use client";
import { PageProps } from "@/app/PageProps";
import { getTranslator } from "@/i18n/getTranslator";
import "./style.css";
import { SideNav } from "@/components/SideNav";
import React from "react";
import { TopContent } from "@/components/TopContent";
import { ValidationsTable } from "@/components/ValidationsTable";

export default function Home({ params: { lang } }: PageProps) {
  const { t } = getTranslator(lang, "translation");
  return (
    <>
      <div className="columns" id="mail-app">
        <SideNav lang={lang} />
        <div
          className="column is-8 messages hero is-fullheight"
          id="message-feed"
        >
          <TopContent lang={lang} />
          <div className="inbox-messages" id="inbox-messages">
            <div>
              <ValidationsTable lang={lang} />
            </div>
          </div>
        </div>
        <div
          className="column is-6 message hero is-fullheight"
          id="message-pane"
        >
          <div className="box message-preview">
            <div className="top">
              <div className="avatar">
                <img src="https://placehold.it/128x128" />
              </div>
              <div className="address">
                <div className="name">John Smith</div>
                <div className="email">someone@gmail.com</div>
              </div>
              <hr />
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
