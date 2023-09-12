import styles from "../style";
import { features } from "../constants";
import { layout } from "../style";
import Button from "./Button";
import CustomCard from "./CustomCard";
import { useState } from "react";
export interface Feat {
  id: string;
  icon: string;
  title: string;
  content: string;
}
const Business = () => {
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <section
      id="features"
      className={`${layout.section} md:gap-6 gap-16 relative`}
    >
      <div
        className={`${layout.sectionInfo} md:items-start xs:gap-8 gap-4 text-center items-center md:text-start`}
      >
        <h2 className={`text-white ${styles.heading2}`}>
          You do the business,
          <br className={`sm:block hidden`} /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph}`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button
          title="Get Started"
          styles={`w-[170px] h-[64px] text-[18px] font-medium`}
        />
      </div>
      <div
        className={`${styles.flexCenter} flex-col gap-6 flex-1 md:items-end flex-wrap`}
      >
        {features.map((feat, index) => (
          <CustomCard
            key={feat.id}
            handleFeatureClick={() => setIndex(index)}
            feat={feat}
            style={index === selectedIndex ? `bg-black-gradient` : ``}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
