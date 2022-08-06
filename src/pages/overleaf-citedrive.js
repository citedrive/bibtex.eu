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
import Thumbnail from "./overleaf-thumbnail.png"
import Translate, {translate} from '@docusaurus/Translate';

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
          <Translate>
          A mighty pairing for LaTeX users
           </Translate>
        </p>
        <p className={styles.subsubsubtitle}>
          <Translate>
          Complete your research pipeline with the powerful one-two combination
          of Overleaf and CiteDrive. Connect your project across both apps and
          your Overleaf paper will automatically receive updates from your
          BibTeX file with just a few clicks.
          </Translate>
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
          <Translate>▶ WATCH VIDEO</Translate>
        </button>
        <Modal
          open={open}
          close={() => setOpen(false)}
          width={"670px"}
          height={"480px"}
        >
          <YouTube videoId="KfwYySjHRPE" opts={opts} />
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
          <Translate>Perfect for Overleaf!</Translate>
        </p>
        <p>
          <Translate>Overleaf enables teams of students and researchers to write papers
          simultaneously, from anywhere, in an easy-to-use, collaborative online
          LaTeX editor. Overleaf supports a variety of packages, including
          BibTeX, where you can manage your references. When you connect
          Overleaf to CiteDrive, you can automatically synchronize your project
          and BibTeX-database with Overleaf.</Translate>
        </p>
      </div>
    </div>
  );
}

function GettingStarted() {
  const { siteConfig } = useDocusaurusContext();

  const opts = {
    height: "590",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div
      className={clsx("hero hero--primary", styles.heroBannerStarted)}
      style={{
        background: "rgb(240, 242, 255)",
        color: "#38383",
        fontSize: "1.2rem",
      }}
    >
      <div className="container">


        <div style={{background: "#fff", boxShadow: "lightgrey 2px 2px 4px", color: "#333", padding: "2rem", borderRadius: "5px", margin: "3rem"}}>
          <p style={{ color: "#000"}} className={styles.subsubtitle}>
            <Translate>Getting started</Translate>
          </p>
          <p>
            <YouTube videoId="KfwYySjHRPE" opts={opts} />
          </p>
        <ol>
          <li>
            <Translate>Create a paper in Overleaf and ensure you’ve prepared the paper to
            use BibTeX citations:</Translate>
          </li>
          <ol>
            <li>
              Ensure you include{" "}
              <strong>
                <code>apacite</code>
              </strong>{" "}
              or a similar package
            </li>

            <li>
              Set the <strong>\bibliographystyle</strong>
            </li>

            <li>
              Include a <strong>\bibliography</strong> tag before the document
              end
            </li>
          </ol>

          <li>
            Create your{" "}
            <a href="https://app.citedrive.com/sign-up/">
              free CiteDrive account
            </a>
          </li>

          <li>Create an Overleaf project within CiteDrive</li>

          <li>
            Begin collecting references by using the{" "}
            <a href="https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik">
              CiteDrive Companion browser add-on
            </a>
          </li>
          <ol>
            <li>
              You may also add references by using the built-in article or ISBN
              search within the CiteDrive app
            </li>
          </ol>

          <li>
            Click Export on the top of the page and copy the unique URL of the
            newly opened tab
          </li>

          <li>
            Within your Overleaf project, click the Upload icon on the left-hand
            pane
          </li>

          <li>
            Select External URL and paste the unique link into the top field.
            Name the file references.bib or similar. Click Ok.
          </li>

          <li>
            Ensure you have a bilbiography added to your Overleaf document.
            <a href="https://www.overleaf.com/learn/how-to/Using_bibliographies_on_Overleaf">Instructions may be found here.</a>
          </li>

          <li>
            With the CiteDrive Companion add-on installed, click the Insert Citation
            button at the top of the Overleaf screen.
          </li>

          <li>
            Select one or more references of interest by clicking on them.
          </li>

          <li>
            Click the "In-text citation" button to generate and insert a citation
            at your current cursor position within the editor.
          </li>

          <li>Regenerate your paper output to see the results.*</li>
        </ol>
        <p>
          * If you add new references after first linking your projects using
          the unique link, you will need to select references.bib from the
          left-hand pane and click Refresh in order for the latest version to be
          retrieved and new entries to show up in your rendered paper.
        </p>

        </div>

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
        <p style={{ color: "#fff" }} className={styles.subsubtitle}>
          Questions, issues or feedback?
        </p>
              <p>
                We’d love to hear what you think! Email us at{" "}
                <a href="mailto:hello@citedrive.com" style={{color: "#6c3433"}}>hello@citedrive.com</a>
              </p>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({message: 'Overleaf + CiteDrive - A mighty pairing for LaTeX users'})}
      description={translate({message: "CiteDrive is a cloud-first reference and citation management platform for Overleaf. "})}
      keywords={"overleaf"}
      image={Thumbnail}
    >
      <HomepageHeader />
      <main>
        <HomepageExplainer />
        <HomepageFeatures />
        <GettingStarted />
        <Project />
      </main>
    </Layout>
  );
}
