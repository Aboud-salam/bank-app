import { arrowUp } from "../assets";
import styles from "../style";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] `}
  >
    <div
      className={`bg-primary w-[100%] h-[100%] rounded-full ${styles.flexCenter} cursor-pointer`}
    >
      <p className="font-poppins font-medium leading-[23px] text-gradient text-[18px]">
        Get <img src={arrowUp} className="inline-block"></img> <br />
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
