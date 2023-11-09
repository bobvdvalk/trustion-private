import { Localized } from "@/i18n/Localized";
import { getTranslator } from "@/i18n/getTranslator";

export const SideNav = async ({ lang }: Localized) => {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <aside className="column is-2 aside hero is-fullheight">
        <div className="main">
          <a href="#" className="item active">
            <span className="icon">
              <i className="fa fa-house" />
            </span>
            <span className="name">Overview</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <i className="fa fa-user-alt" />
            </span>
            <span className="name">Timestamp</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <i className="fa fa-fingerprint" />
            </span>
            <span className="name">Verify</span>
          </a>
        </div>
      </aside>
    </>
  );
};
