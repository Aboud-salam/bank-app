import styles from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";
import { useState } from "react";
export interface Client {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}
const Testimonials = () => {
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <section id="clients" className={`${styles.paddingY} mt-10`}>
      <div
        className={`flex justify-center md:justify-between md:text-left text-center items-center flex-wrap`}
      >
        <h1 className={`${styles.heading2} max-w-[450px]`}>
          What people are saying about us
        </h1>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex md:gap-5 gap-7 justify-center md:justify-between md:text-left text-center mt-20 flex-wrap">
        {feedback.map((client, index) => (
          <FeedBackCard
            style={selectedIndex === index ? "bg-black-gradient" : ""}
            key={client.id}
            handleClientClick={() => setIndex(index)}
            index={index}
            client={client}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
