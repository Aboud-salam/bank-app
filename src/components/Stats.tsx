import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} lg:justify-between flex-wrap gap-6 ${styles.paddingY}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${styles.flexCenter} lg:gap-6 gap-3 font-poppins`}
        >
          <h2 className={`text-white text-[40px] font-semibold leading-[53px]`}>
            {stat.value}
          </h2>
          <p className="text-gradient text-[20px] leading-[26px] font-normal uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
