import { Localized } from "@/i18n/Localized";
import { getCurrentUser, logout } from "@/lib/api";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { DirectusUser } from "models";
import { LoginModal } from "@/components/LoginModal";

export const MyAccountButtons = ({ lang }: Localized) => {
  const [user, setUser] = useState<DirectusUser | false>();
  const { t } = useTranslation(lang, "translation");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch((e) => {
        // no login available
        setUser(false);
      });
  }, []);

  if (user === false) {
    return (
      <>
        <div className="buttons">
          <button
            className="button is-primary"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            {t("login")}
          </button>
        </div>
        {showLogin && (
          <LoginModal
            lang={lang}
            onClose={() => {
              setShowLogin(false);
            }}
          />
        )}
      </>
    );
  }

  if (user) {
    return (
      <div className="buttons">
        <button
          className="button is-light"
          onClick={async () => {
            await logout();
          }}
        >
          {t("logout")}
        </button>
      </div>
    );
  }
  return null;
};
