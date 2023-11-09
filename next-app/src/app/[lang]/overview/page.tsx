import { PageProps } from "@/app/PageProps";
import { getTranslator } from "@/i18n/getTranslator";
import "./style.css";
import { SideNav } from "@/components/SideNav";
import React from "react";

export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await getTranslator(lang, "translation");
  return (
    <>
      <div className="columns" id="mail-app">
        <SideNav lang={lang} />
        <div
          className="column is-8 messages hero is-fullheight"
          id="message-feed"
        >
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-medium radius-8"
                      type="text"
                      placeholder="Search"
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-search" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button className="button eigenwijs is-medium has-text-weight-bold radius-8">
                  Verify
                </button>
              </div>
            </div>
          </div>
          <div className="inbox-messages" id="inbox-messages">
            <div>
              <div className="card-content">
                <div className="msg-header">
                  <span className="msg-from">
                    <small>
                      From: {"{"}
                      {"{"} msg.from {"}"}
                      {"}"}
                    </small>
                  </span>
                  <span className="msg-timestamp" />
                  <span className="msg-attachment">
                    <i className="fa fa-paperclip" />
                  </span>
                </div>
                <div className="msg-subject">
                  <span className="msg-subject">
                    <strong id="fake-subject-1">
                      {"{"}
                      {"{"} msg.subject {"}"}
                      {"}"}
                    </strong>
                  </span>
                </div>
                <div className="msg-snippet">
                  <p id="fake-snippet-1">
                    {"{"}
                    {"{"} msg.snippet {"}"}
                    {"}"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="column is-6 message hero is-fullheight"
          id="message-pane"
        >
          <div className="action-buttons">
            <div className="control is-grouped">
              <a className="button is-small">
                <i className="fa fa-inbox" />
              </a>
              <a className="button is-small">
                <i className="fa fa-exclamation-circle" />
              </a>
              <a className="button is-small">
                <i className="fa fa-trash-o" />
              </a>
            </div>
            <div className="control is-grouped">
              <a className="button is-small">
                <i className="fa fa-exclamation-circle" />
              </a>
              <a className="button is-small">
                <i className="fa fa-trash-o" />
              </a>
            </div>
            <div className="control is-grouped">
              <a className="button is-small">
                <i className="fa fa-folder" />
              </a>
              <a className="button is-small">
                <i className="fa fa-tag" />
              </a>
            </div>
          </div>
          <div className="box message-preview">
            <div className="top">
              <div className="avatar">
                <img src="https://placehold.it/128x128" />
              </div>
              <div className="address">
                <div className="name">John Smith</div>
                <div className="email">someone@gmail.com</div>
              </div>
              <hr />
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
