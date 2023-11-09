import { Localized } from "@/i18n/Localized";
import "../app/[lang]/overview/style.css";

export const ValidationsTable = ({ lang }: Localized) => {
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
