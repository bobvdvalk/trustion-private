import { useTranslation } from "@/i18n/useTranslation";
import { Localized } from "@/i18n/Localized";
import { FormEvent, useState } from "react";
import { Modal } from "@/components/Modal";
import { login } from "@/lib/api";
import { classNames } from "@/lib/classNames";

export interface Props {
  onClose: () => void;
}

export const LoginModal = ({ lang, onClose }: Localized & Props) => {
  const { t } = useTranslation(lang, "translation");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      setError(false);
      await login(email, password);
      onClose();
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal onClose={onClose} title={t("login")}>
      <form onSubmit={handleLogin}>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">{t("email")}</label>
            <div className="control">
              <input
                {...classNames("input", error && "is-danger")}
                type="email"
                placeholder="username@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">{t("password")}</label>
            <div className="control">
              <input
                {...classNames("input", error && "is-danger")}
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            {...classNames("button", "is-primary", loading && "is-loading")}
            type="submit"
            disabled={!email || !password || loading}
          >
            {t("login")}
          </button>
          <button className="button" type="reset">
            {t("cancel")}
          </button>
        </footer>
      </form>
    </Modal>
  );
};
