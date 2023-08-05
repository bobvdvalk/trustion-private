"use client";

import Link from "next/link";
import { useState } from "react";
import { classNames } from "@/lib/classNames";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <i className="fas fa-shield-alt" /> TRUSTION
        </Link>

        <button
          role="button"
          {...classNames("navbar-burger", expanded && "is-active")}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNav"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="mainNav" {...classNames("navbar-menu", expanded && "is-active")}>
        <div className="navbar-start">
          <Link href="/" className="navbar-item">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
