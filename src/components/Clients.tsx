import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <div className={`flex justify-between items-center ${styles.paddingY}`}>
      {clients.map((client) => (
        <img key={client.id} src={client.logo} alt="" className="w-[192px]" />
      ))}
    </div>
  );
};

export default Clients;
