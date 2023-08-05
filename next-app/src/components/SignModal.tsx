import { Localized } from "@/i18n/Localized";
import { Modal } from "@/components/Modal";
import { useTranslation } from "@/i18n/useTranslation";
import { classNames } from "@/lib/classNames";
import { FormEvent, useState } from "react";
import { signDocument } from "@/lib/api";
import { useRouter } from "next/navigation";

export interface Props {
  onClose: () => void;
}

export const SignModal = ({ lang, onClose }: Localized & Props) => {
  const { t } = useTranslation(lang, "translations");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>();
  const [context, setContext] = useState("");
  const [alreadySigned, setAlreadySigned] = useState(false);
  const router = useRouter();

  async function handleSign(e: FormEvent) {
    e.preventDefault();

    if (!file || !context) {
      return;
    }

    setLoading(true);
    try {
      setAlreadySigned(false);
      const result = await signDocument(file, context);
      router.push(`/${lang}/validate/${result.hash}`);
      router.refresh();
      onClose();
    } catch (e) {
      if (e === "ALREADY_SIGNED") {
        setAlreadySigned(true);
        return;
      }
      console.error("Error", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal title={t("signNew")} onClose={onClose}>
      <form onSubmit={handleSign} onReset={onClose}>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">{t("document")}</label>
            <div
              {...classNames(
                "file",
                "has-name",
                "is-fullwidth",
                alreadySigned && "is-danger",
              )}
            >
              <label className="file-label">
                <input
                  required
                  {...classNames("file-input")}
                  type="file"
                  name="document"
                  onChange={(e) => {
                    setFile(e.target.files?.item(0) || undefined);
                  }}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">{t("pickFile")}</span>
                </span>
                <span className="file-name">{file?.name || "..."}</span>
              </label>
            </div>
            <p className="help is-danger">
              {alreadySigned && t("alreadySignedError")}
            </p>
          </div>
          <div className="field">
            <label className="label">{t("context")}</label>
            <textarea
              required
              className="textarea"
              rows={7}
              onChange={(e) => {
                setContext(e.target.value);
              }}
            ></textarea>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            {...classNames("button", "is-primary", loading && "is-loading")}
            type="submit"
            disabled={loading || !file || !context}
          >
            {t("sign")}
          </button>
          <button className="button" type="reset">
            {t("cancel")}
          </button>
        </footer>
      </form>
    </Modal>
  );
};
