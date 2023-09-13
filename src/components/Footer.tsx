import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => {
  return (
    <section className={``}>
      <div
        className={`flex sm:gap-16 md:gap-32 gap-12 sm:flex-row flex-col justify-center items-center ${styles.paddingY} text-center`}
      >
        <div>
          <img src={logo} alt="" />
          <p
            className={`${styles.paragraph} max-w-[320px] font-poppins ss:mt-8 mt-4`}
          >
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div
          className={`flex ss:justify-between  flex-1 ss:flex-row flex-col flex-wrap gap-5`}
        >
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-poppins text-[18px] font-medium ss:mb-6 mb-3">
                {section.title}
              </h4>
              {/* {footerLinks.map(({ links }, i) =>
              i === index ? (
                <ul className="list-none">
                  {links.map((link) => (
                    <li className="text-dimWhite">{link.name}</li>
                  ))}
                </ul>
              ) : null
            )} */}
              <ul className="footer-links list-none ss:gap-2 flex flex-col">
                {footerLinks[index].links.map((link, i) => (
                  <li
                    key={i}
                    className={`${styles.paragraph} text-[16px]  hover:text-white hover:underline transition duration-150`}
                  >
                    <a href={link.link}> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center flex ss:justify-between gap-3 justify-center pt-6 pb-2 border-t-[1px] border-gray-600 flex-wrap-reverse">
        <p className={`${styles.paragraph}`}>
          <span className="text-dimWhite text-[18px] font-abel font-normal">
            Copyright
          </span>{" "}
          <span>&copy;</span> 2021 HooBank. All Rights Reserved.
        </p>
        <ul className="list-none flex gap-6">
          {socialMedia.map((icon) => (
            <li key={icon.id}>
              <a href={icon.link}>
                <img src={icon.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Footer;
