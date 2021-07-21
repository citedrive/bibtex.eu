import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Native BibTeX support',
    Svg: require('../../static/img/one.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Collect and organize',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Fully collaborative',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Device-agnostic',
    Svg: require('../../static/img/three.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },

  {
    title: 'Simple but powerful!',
    Svg: require('../../static/img/two.svg').default,
    description: (
      <>
        ...
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
