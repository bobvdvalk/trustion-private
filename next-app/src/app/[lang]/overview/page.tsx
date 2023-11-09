import { PageProps } from "@/app/PageProps";
import "./style.css";
import React from "react";
import { TopContent } from "@/components/TopContent";
import { ValidationsTable } from "@/components/ValidationsTable";
import { Response } from "next/dist/compiled/@edge-runtime/primitives";

async function getData() {
  const url = new URL(`${process.env.DIRECTUS_INTERNAL_URL}/items/validations`);
  const response: Response = await fetch(url);
  const body = await response.json();
  console.log(`data ${body}`);
  return body;
}

export default async function Overview({ params: { lang } }: PageProps) {
  const data = await getData();
  if (data.error) {
    return (
      <>
        <h1>error no content</h1>
      </>
    );
  }
  return (
    <>
      <div className="overview-content is-fullheight">
        <TopContent lang={lang} />
        <div className="inbox-messages" id="inbox-messages">
          <div>
            <ValidationsTable lang={lang} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
