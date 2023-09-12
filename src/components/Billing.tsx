import styles from "../style";
import { apple, check, google, paypal } from "../assets";
import { transactions } from "../constants";
import Button from "./Button";
interface Props {
  style: string;
}
const Paypal = ({ style }: Props) => (
  <div
    className={`bg-black-gradient rounded-[10px] p-5 flex flex-col gap-3 ${style}`}
  >
    <div className={`flex gap-3 items-center`}>
      <div
        className={`bg-white rounded-full ${styles.flexCenter} min-w-[56px] h-[56px]`}
      >
        <img src={paypal} alt="paypal" />
      </div>
      <div>
        <h4 className={`font-poppins text-[24px] font-semibold text-white`}>
          Paypal<p className={`${styles.paragraph}`}>Checkout</p>
        </h4>
      </div>
    </div>
    <div className="flex gap-3 items-center justify-between">
      <h4 className={`text-white font-poppins text-[18px] font-medium`}>
        <p className={`${styles.paragraph}`}>Total</p>$210
      </h4>
      <div
        className={`bg-blue-gradient w-[70px] h-[33px] p-[2px] rounded-[5px]`}
      >
        <div className="bg-black-gradient w-[100%] h-[100%] rounded-[5px]">
          <button
            className={` text-gradient w-[100%] h-[100%] font-poppins font-normal text-[12px] ${styles.flexCenter}`}
          >
            Change
          </button>
        </div>
      </div>
    </div>
    <div>
      <Button title="Make Payment" styles="w-[100%] h-[33px] font-medium" />
    </div>
  </div>
);
const Transaction = ({ style }: Props) => (
  <div className={style}>
    <h2 className={`text-[22px] font-poppins font-semibold text-white`}>
      Last Transaction
    </h2>
    <div className="flex flex-col gap-3">
      {transactions.map((transaction, index) => (
        <div
          key={transaction.id}
          className={`flex justify-between items-center`}
        >
          <div className={`flex gap-5 items-center`}>
            <img
              src={transaction.icon}
              className={
                index !== transactions.length - 3
                  ? "bg-white w-[40px] h-[40px] rounded-full p-[5px]"
                  : ""
              }
            />
            <h4
              className={`text-white font-poppins text-[16px] font-semibold leading-[22px]`}
            >
              {transaction.title}
              <p className={styles.paragraph}>{transaction.date}</p>
            </h4>
          </div>
          <div className={`flex gap-3`}>
            <img src={transaction.secIcon} />
            <p className="text-white">{transaction.amount}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const Payment = ({ style }: Props) => (
  <p
    className={`bg-white font-poppins font-medium text-[14px] p-3 rounded-[10px] flex gap-3 items-center ${style}`}
  >
    <img src={check} alt="check" />
    Great! Your Payment is Successful
  </p>
);
const Billing = () => {
  return (
    <section
      id="product"
      className={`flex items-center md:justify-between justify-center md:flex-row flex-col-reverse sm:gap-32 gap-16 relative z-[1] ${styles.paddingY} flex-wrap`}
    >
      <div className={`flex flex-col items-center flex-1`}>
        <div className="md:self-start sm:flex hidden relative mt-20">
          <Transaction style="bg-black-gradient rounded-[10px] p-5 flex flex-col gap-9 min-w-[335px]" />
          <Paypal style="absolute z-1 -top-[150px] -right-[150px]" />
          <Payment style="absolute z-1 -right-[180px] -bottom-[30px]" />
        </div>
        <div className="flex flex-col gap-3 sm:hidden">
          <Transaction style="bg-black-gradient rounded-[10px] p-5 flex flex-col gap-9 ss:min-w-[335px]" />
          <Paypal style="" />
          <Payment style="" />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-[470px] md:text-start text-center">
        <h2 className={`${styles.heading2}`}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-9 items-center md:justify-start justify-center">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
      <div className="white__gradient__02 w-[350px] h-[400px] absolute -left-[400px] bottom-[50%] rounded-[450px] rotate-[176deg] -z-[1]"></div>
      <div className="pink__gradient__02 w-[350px] h-[450px] absolute -left-[400px] top-[50%] rounded-[450px] rotate-[156deg] -z-[1]"></div>
    </section>
  );
};

export default Billing;
