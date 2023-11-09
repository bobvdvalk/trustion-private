import "../app/[lang]/overview/style.css";
import { Localized } from "@/i18n/Localized";

export interface Document {
  context: string;
  filename: string;
  hash: string;
  hashed_by: string;
  hashed_on: string;
}

export const ValidationsTable = async ({
  data,
  lang,
}: Document & Localized) => {
  return (
    <>
      <div className="has-background-white radius-16 validationsTable">
        <div className="title">All files</div>
        <table className="is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>File name</th>
              <th>File size</th>
              <th>Timestamp date</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((file) => {
              return (
                <tr>
                  <td className="has-text-centered">
                    <input type="checkbox" />
                  </td>
                  <td>{file.filename}</td>
                  <td>15kb</td>
                  <td>{file.hashed_on}</td>
                  <td>
                    <a href={`/validate/${file.hash}`}>Certicate</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
