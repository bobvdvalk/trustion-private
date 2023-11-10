"use client";
import { useEffect, useState } from "react";
import { DirectusUser } from "models";
import { getCurrentUser, logout } from "@/lib/api";

export const ShowUserBox = () => {
  const [user, setUser] = useState<DirectusUser | false>();
  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch((e) => {
        // no login available
        setUser(false);
      });
  }, []);
  if (user === false) {
    return null;
  }
  return (
    <>
      <div className="media" style={{ marginTop: "15px" }}>
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">Bob van der Valk</p>
          <p className="subtitle is-6">admin@example.com</p>
          <button
            className="button is-light"
            onClick={async () => {
              await logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
