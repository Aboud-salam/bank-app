import { useState } from "react";
import { arrowDown, scan, vectorOne, vectorTwo } from "../assets";
import { months, paymentMethods } from "../constants";
import styles from "../style";
import Button from "./Button";
interface Props {
  style: string;
}
const Analysis = ({ style }: Props) => {
  const [selectedIndex, setIndex] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const options = [1, 2, 3];
  return (
    <div
      className={`box bg-black-gradient p-[20px] rounded-[20px] flex flex-col gap-5 min-w-[270px] ${style}`}
    >
      <div className={`flex justify-between`}>
        <h4 className={`text-white font-poppins font-semibold text-[16px]`}>
          Online Analysis
        </h4>
        <div
          className={`flex justify-between cursor-pointer items-start relative`}
          onClick={() => setToggle(!isToggled)}
        >
          <div
            className={`bg-transparent text-white slide-left transition duration-400 cursor-pointer outline-none appearance-none absolute right-[22px] w-[70px] bg-black-gradient rounded-[10px] top-0 ${
              isToggled ? "opacity-100" : "opacity-0"
            }`}
          >
            {options.map((option, index) => (
              <p
                key={option}
                className=" hover:bg-primary transition duration-150 rounded-[10px] p-1"
              >
                {`${index + 1} Month`}
              </p>
            ))}
          </div>
          <img src={arrowDown} alt="" />
        </div>
      </div>
      <div className={`flex justify-between`}>
        <h5 className={`text-[14px] font-poppins font-medium text-green`}>
          $ 2,334,67
          <p className={`font-poppins font-normal text-[10px]`}>Income</p>
        </h5>
        <h5 className={`text-[14px] font-poppins font-medium text-blue`}>
          $ 5.31M
          <p className={`font-poppins font-normal text-[10px]`}>Expense</p>
        </h5>
      </div>
      <div className="vector relative w-fit">
        <img src={vectorOne} alt="" />
        <img
          src={vectorTwo}
          alt="vector"
          className="absolute right-[31px] top-[28px]"
        />
      </div>
      <ul className="list-none flex gap-3 items-center">
        {months.map((month, index) => (
          <li
            onClick={() => setIndex(index)}
            key={month.id}
            className={`font-poppins font-normal text-[11px] cursor-pointer transition duration-150 ${
              index === selectedIndex
                ? "bg-green-gradient text-primary p-[5px] rounded-[5px] "
                : "text-dimWhite"
            }`}
          >
            {month.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Scan = ({ style }: Props) => (
  <div
    className={`box bg-black-gradient p-[20px] rounded-[20px] flex flex-col justify-center items-center ${style}`}
  >
    <img src={scan} alt="scan" className="bg-primary p-2 rounded-[10px]" />
    <h5 className="text-white font-poppins font-semibold mt-7 mb-1 text-center">
      Scan Credit Cards
    </h5>
    <p
      className={`font-poppins font-normal text-dimWhite text-[12px] max-w-[170px] text-center`}
    >
      Scan your credit card in 4 minutes.
    </p>
  </div>
);
const PaymentMethods = ({ style }: Props) => (
  <div className={`box bg-black-gradient p-[20px] rounded-[20px] ${style}`}>
    <div className="flex justify-between mb-9">
      <h4 className="font-poppins font-semibold text-white">Payment Method</h4>
      <img src={arrowDown} alt="" />
    </div>
    <div className="flex gap-3">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`rounded-[20px] bg-white w-[48px] h-[48px] ${styles.flexCenter}`}
        >
          <img src={method.icon} className="w-[24xp] h-[24px]" />
        </div>
      ))}
    </div>
  </div>
);
const CardDeal = () => {
  return (
    <section
      className={`${styles.paddingY} flex gap-12 justify-between items-center flex-col md:flex-row mt-10`}
    >
      <div className={`max-w-[600px] text-center md:text-start`}>
        <h2 className={`${styles.heading2} mb-3`}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mb-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button
          title="Get Started"
          styles={`w-[170px] h-[64px] text-[18px] font-medium`}
        />
      </div>
      <div className="ss:flex hidden items-center relative min-w-[450px] h-[450px] ">
        <div className="overlay absolute w-[100%] h-[100%] bg-primary opacity-70"></div>
        <Analysis style="absolute -right-[80px] top-[65px] " />
        <Scan style="absolute -left-[65px] top-[120px]" />
        <PaymentMethods style="absolute -bottom-[40px] left-[90px]" />
        <div className="bg-blue-gradient w-[100%] h-[100%] rounded-full p-2">
          <div className="bg-primary w-full h-full rounded-full flex justify-center items-center">
            <div className="bg-blue-gradient w-[70%] h-[70%] rounded-full p-1">
              <div className="bg-primary rounded-full w-[100%] h-[100%] flex justify-center items-center">
                <div className="bg-blue-gradient w-[50%] h-[50%] rounded-full p-1">
                  <div className="bg-primary  rounded-full w-[100%] h-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
          PaymentMethods
        </div>
      </div>
      <div className="ss:hidden flex flex-col gap-3 overflow-hidden">
        <Analysis style="" />
        <PaymentMethods style="" />
        <Scan style="" />
      </div>
    </section>
  );
};

export default CardDeal;
