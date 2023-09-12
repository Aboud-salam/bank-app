import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <div
      className={`flex justify-between items-center p-20 bg-black-gradient rounded-[20px] ${styles.marginY}`}
    >
      <h2 className={`${styles.heading2} font-poppins`}>
        Let's try our service now!
        <p className={`${styles.paragraph} max-w-[450px] font-poppins`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </h2>
      <Button
        title="Get Started"
        styles={`w-[170px] h-[64px] text-[18px] font-medium`}
      />
    </div>
  );
};

export default CTA;
