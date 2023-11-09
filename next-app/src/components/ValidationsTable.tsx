import "../app/[lang]/overview/style.css";
import { Localized } from "@/i18n/Localized";

export interface Documents {
  data: [
    document: {
      context: string;
      filename: string;
      hash: string;
      hashed_by: string;
      hashed_on: string;
    },
  ];
}

export const ValidationsTable = async ({
  data,
  lang,
}: Documents & Localized) => {
  console.log(data);
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
            <tr>
              <td className="has-text-centered">
                <input type="checkbox" />
              </td>
              <td>Banaan.pdf</td>
              <td>15kb</td>
              <td>23-12-2022</td>
              <td></td>
            </tr>
            <tr>
              <td className="has-text-centered">
                <input type="checkbox" />
              </td>
              <td>Cool.pdf</td>
              <td>15kb</td>
              <td>23-12-2022</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
