import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <div
      className={`flex md:justify-between justify-center items-center ${styles.paddingY} flex-wrap gap-8`}
    >
      {clients.map((client) => (
        <img key={client.id} src={client.logo} alt="" className="w-[192px]" />
      ))}
    </div>
  );
};

export default Clients;
