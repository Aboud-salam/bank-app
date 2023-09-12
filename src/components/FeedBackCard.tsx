import { doubleQ } from "../assets";
import styles from "../style";
import { Client } from "./Testimonials";

interface Props {
  client: Client;
  index: number;
  style: string;
  handleClientClick: () => void;
}
const FeedBackCard = ({ client, handleClientClick, style }: Props) => {
  return (
    <div
      className={`testimonial flex flex-col gap-5 transition duration-500 cursor-pointer p-5 rounded-[20px] ${style}`}
      onClick={handleClientClick}
    >
      <img src={doubleQ} alt="" className="w-[40px] h-[27px] mb-6" />
      <p className="font-poppins text-[18px] font-normal text-white max-w-[290px]">
        {client.content}
      </p>
      <div className="flex items-center gap-3">
        <img src={client.img} alt="" className="w-[48px] h-[48px]" />
        <h4 className="font-poppins font-normal text-[20px] text-white">
          {client.name}
          <p className={`${styles.paragraph}`}>{client.title}</p>
        </h4>
      </div>
    </div>
  );
};

export default FeedBackCard;
