import { PropsWithChildren } from "react";
import { useKeyBinding } from "@/hooks/useKeyBinding";

export interface Props {
  title: string;
  onClose: () => void;
}

export const Modal = ({
  children,
  onClose,
  title,
}: PropsWithChildren & Props) => {
  useKeyBinding("Escape", onClose);
  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              onClose();
            }}
          ></button>
        </header>
        {children}
      </div>
    </div>
  );
};
