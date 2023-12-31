import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Events',
    link: '/events/welcome',
    Svg: require('@site/static/img/event.svg').default,
    description: (
      <>
        Learn AI Safety for self evolving AGI.
      </>
    ),
  },
  {
    title: 'Podcasts',
    link: '/Podcasts/welcome',
    Svg: require('@site/static/img/pocasts.svg').default,
    description: (
      <>
        Learn to Build & Evaluate Safe AI apps.
      </>
    ),
  },
  {
    title: 'Blogs',
    link: '/blog/welcome',
    Svg: require('@site/static/img/moonbase.svg').default,
    description: (
      <>
        Follow the path to AGI.
      </>
    ),
  },
  
];

function Feature({ link, Svg, title, description}) {
  return (
    
    <div className={clsx('col col--4', styles.flexContainer)}>
  <div className={styles.flexItem}>
    <Svg className={styles.featureSvg} role="img" />
  </div>
  <div className={clsx('content', styles.flexItem1)}>
    <a style={{color: '#FC84B7'}} href={link}><h3>{title}</h3></a>
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
