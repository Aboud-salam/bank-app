import styles from "../style";
import { Feat } from "./Business";

interface Props {
  feat: Feat;
  style: string;
  handleFeatureClick: () => void;
}
const CustomCard = ({ feat, style, handleFeatureClick }: Props) => {
  return (
    <div
      className={`gap-3 ${styles.flexCenter} items-center ${style} p-5 cursor-pointer rounded-[20px]`}
      onClick={handleFeatureClick}
    >
      <div
        className={`${styles.flexCenter} min-w-[64px] h-[64px] rounded-full bg-gray-gradient`}
      >
        <img src={feat.icon} alt="star" className="w-[32px]  rounded-full" />
      </div>
      <div className={`${styles.flexStart} flex-col gap-1 max-w-[360px]`}>
        <h4
          className={`font-poppins font-semibold capitalize text-[18px] text-white`}
        >
          {feat.title}
        </h4>
        <p
          className={`font-poppins font-medium text-[16px] ${styles.paragraph}`}
        >
          {feat.content}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
