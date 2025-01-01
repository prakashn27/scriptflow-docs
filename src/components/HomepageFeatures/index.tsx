import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Secure by Design',
    Svg: require('@site/static/img/private-cloud-icon.svg').default,
    description: (
      <>
        Built and run on Atlassian.Experience the confidence of running automations on Atlassian's trusted platform, backed by enterprise-level security and reliability.
      </>
    ),
  },
  {
    title: 'Unlimited automations Endless possibilities',
    Svg: require('@site/static/img/unlimited.svg').default,
    description: (
      <>
        Break free from limitations with JAB's comprehensive automation platform. Create any number of event handlers to tackle your unique business needs, from simple issue updates to complex cross-project workflows.
      </>
    ),
  },
  {
    title: 'Javascript based scripting engine',
    Svg: require('@site/static/img/mono-javascript.svg').default,
    description: (
      <>
        Write powerful automation scripts using familiar JavaScript syntax. The built-in scripting engine provides access to Jira's API, custom functions, and utilities while running in a secure sandbox environment. Create complex workflows, data transformations, and integrations without leaving Jira.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
