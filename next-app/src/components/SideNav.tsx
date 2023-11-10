import { Localized } from "@/i18n/Localized";
import { getTranslator } from "@/i18n/getTranslator";
import Image from "next/image";
import logo from "../images/logo.png";
import validate from "../images/validate.png";
import { FileValidator } from "@/components/FileValidator";
import Link from "next/link";

export const SideNav = async ({ lang }: Localized) => {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <aside className="column is-2 aside hero is-fullheight">
        <div className="main">
          <div className="level logo">
            <div className="level-left">
              <Image src={logo} width={140} height={32} alt="logo Trustion" />
            </div>
            <div className="level-right">
              <Image
                src={validate}
                width={101}
                height={32}
                alt="logo Trustion"
              />
            </div>
          </div>
          <Link href="/" className="item active">
            <span className="icon">
              <i className="fa fa-house" />
            </span>
            <span className="name">Overview</span>
          </Link>
          <Link href="/timestamp" className="item">
            <span className="icon">
              <i className="fa fa-user-alt" />
            </span>
            <span className="name">Timestamp</span>
          </Link>
          <a href="#" className="item">
            <span className="icon">
              <i className="fa fa-fingerprint" />
            </span>
            <span className="name">Verify</span>
          </a>
        </div>
        <div>
          <FileValidator lang={lang} />
        </div>
        <div className="main">
          <a href="/overview" className="item">
            <span className="icon">
              <i className="fa fa-people-group" />
            </span>
            <span className="name">Team</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <i className="fa fa-headset" />
            </span>
            <span className="name">Support</span>
          </a>
          <a href="#" className="item">
            <span className="icon">
              <i className="fa fa-gear" />
            </span>
            <span className="name">Settings</span>
          </a>
        </div>
      </aside>
    </>
  );
};
