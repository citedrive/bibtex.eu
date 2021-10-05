import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import OverleafCiteDrive from "./overleaf_citedrive.svg";
import Pin from "./pin.svg";
import EveryOne from "./everyone.svg";
import Modal from "../components/modal";
import YouTube from "react-youtube";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [open, setOpen] = useState(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <OverleafCiteDrive />
        <p style={{ color: "#000" }} className={styles.subsubtitle}>
          A mighty pairing for LaTeX users
        </p>
        <p className={styles.subsubsubtitle}>
          Complete your research pipeline with the powerful one-two combination
          of Overleaf and CiteDrive. Connect your project across both apps and
          your Overleaf paper will automatically receive updates from your
          BibTeX file with just a few clicks.
        </p>
        <button
          className={styles.watch}
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://app.citedrive.com/sign-up", "_blank");
          }}
        >
          TRY FOR FREE
        </button>

        <button
          onClick={() => setOpen(true)}
          className={styles.started}
          style={{ color: "#000", cursor: "pointer" }}
        >
          ▶ WATCH VIDEO
        </button>
        <Modal
          open={open}
          close={() => setOpen(false)}
          width={"670px"}
          height={"480px"}
        >
          <YouTube videoId="X_piDbr4bMw" opts={opts} />
        </Modal>
      </div>
    </header>
  );
}

function HomepageExplainer() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ background: "#f5f5f5", color: "#38383", fontSize: "1.2rem" }}
    >
      <div className="container">
        <Pin style={{ width: "15px", height: "100px" }} />
        <p style={{ color: "#000" }} className={styles.subsubtitle}>
          Perfect for Overleaf!
        </p>
        <p>
          Overleaf enables teams of students and researchers to write papers
          simultaneously, from anywhere, in an easy-to-use, collaborative online
          LaTeX editor. Overleaf supports a variety of packages, including
          BibTeX, where you can manage your references. When you connect
          Overleaf to CiteDrive, you can automatically synchronize your project
          and BibTeX-database with Overleaf.
        </p>
      </div>
    </div>
  );
}

function Project() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ background: "#F7B4B4", color: "#fff", fontSize: "1.2rem" }}
    >
      <div className="container">
        <EveryOne style={{ maxWidth: "600" }} />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Overleaf + CiteDrive - A mighty pairing for LaTeX users`}
      description="CiteDrive is a cloud-first reference and citation management platform for Overleaf. "
    >
      <HomepageHeader />
      <main>
        <HomepageExplainer />
        <HomepageFeatures />
        <Project />

        {/**/}
      </main>
    </Layout>
  );
}
