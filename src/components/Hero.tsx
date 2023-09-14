import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col`}
    >
      <div
        className={`${styles.flexStart} relative flex-1 flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row bg-discount-gradient py-[6px] px-4 rounded-[10px] items-center`}
        >
          <img src={discount} className="w-[32px] h-[32px]" />
          <p className={styles.paragraph}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex relative">
          <h1
            className={`flex-1 font-poppins md:min-w-[650px] md:text-[72px] text-[52px] text-white font-semibold ss:leading-[100px] leading-[75px]`}
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
            <br className="sm:block hidden" /> Payment Method.
          </h1>
          <div className="sm:flex hidden absolute right-12 top-0 ">
            <GetStarted />
          </div>
        </div>
        <h1
          className={`${styles.paragraph} font-poppins font-normal text-[18px] leading-[30px] max-w-[483px] my-6`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </h1>
        <div className="absolute -left-[120px] heading-gradient h-[300px] w-[200px] top-auto" />
      </div>
      <div className="relative w-[100%] h-[100%] my-3 sm:my-0">
        <div className="absolute w-[480px] robot-side-gradient -top-20 rounded-[200px] -rotate-[67deg] left-[80%] h-[615px]"></div>
        <div className="absolute w-[400px] rounded-full bottom-40 right-0 h-[470px] robot-gradient-white"></div>
        <div className="absolute w-[80%] rounded-full bottom-40 left-10 h-[80%] robot-gradient"></div>
        {/* <div className="robot-vector absolute w-[40%] top-0 h-[35%] pink__gradient"></div>
        <div className="robot-vector absolute w-[80%] rounded-full bottom-40 h-[80%] white__gradient"></div>
        <div className="robot-vector absolute w-[50%] rounded-full bottom-20 h-[50%] blue__gradient"></div> */}
        <img
          src={robot}
          alt="billing"
          className=" w-[100%] h-[100%] relative z-1"
        ></img>
      </div>
      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
