import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learning CSS",
    Svg: require("@site/static/img/svg_css3.svg").default,
    description: (
      <>
        For 5 years, I'm struggling with cssing. I want to be better than that!
      </>
    ),
  },
  {
    title: "Shameless pirate",
    Svg: require("@site/static/img/svg_pirate.svg").default,
    description: (
      <>
        As a self-taught coder, I'd like to copycat master's code here and
        there!
      </>
    ),
  },
  {
    title: "Want to be an web dev!",
    Svg: require("@site/static/img/svg_web.svg").default,
    description: <>Want to be an awesome web dev!</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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
