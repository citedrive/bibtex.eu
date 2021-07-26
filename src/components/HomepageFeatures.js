import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Native BibTeX support',
    Svg: require('../../static/img/one.svg').default,
    description: (
      <>
        We have designed our infrastructure for a <b>BibTeX</b> compliant delivery. We support all official entry and field types, which can be easily entered or imported with one click using our browser plugin: no tedious usage of converters or manual handling. Your project is always kept up to date for Overleaf and in a fashion that LaTeX will support.
      </>
    ),
  },
  {
    title: 'Collect and organize',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
        Notably, with a bigger team working on a single project, copy-pasting or manually entering data to BibTeX databases (.bib-file) can cause much confusion, and mistakes can quickly occur. With CiteDrive, you can easily add references with one click thanks to the browser extension and group the references orderly simply by dragging and dropping.
      </>
    ),
  },
  {
    title: 'Fully collaborative',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
      We know how essential teamwork is for scientists. Comprehensive tools for teams have become commonplace, and most importantly, papers are rarely written alone. We have therefore built our platform for collaboration.
Add colleagues to your project at any time. You and your team collect, structure, and annotate references and material for your work, clearly organized in one project.
      </>
    ),
  },
  {
    title: 'Device-agnostic',
    Svg: require('../../static/img/three.svg').default,
    description: (
      <>
        We conceptualized CiteDrive from the beginning as a form factor and device-agnostic platform for a seamless experience on all devices. Your on-the-go experience reviewing a paper your colleague presently saved should feel just as natural as CiteDrive on the desktop.
      </>
    ),
  },

  {
    title: 'Simple but powerful!',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
        CiteDrive aspires to be an actually easy to use, collaborative and expandable tool for citing, managing references, creating bibliographies and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
    {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>*/}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
