import { PageProps } from "@/app/PageProps";
import "./style.css";
import React from "react";
import { TopContent } from "@/components/TopContent";
import { ValidationsTable } from "@/components/ValidationsTable";

export default function Home({ params: { lang } }: PageProps) {
  return (
    <>
      <div className="overview-content is-fullheight">
        <TopContent lang={lang} />
        <div className="inbox-messages" id="inbox-messages">
          <div>
            <ValidationsTable lang={lang} />
          </div>
        </div>
      </div>
    </>
  );
}
