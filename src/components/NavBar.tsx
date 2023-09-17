import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
const NavBar = () => {
  const [toggleNav, setNavToggle] = useState(false);
  const [selectedIndex, setIndex] = useState(0);
  return (
    <div className="flex justify-between items-center py-6 relative z-[1]">
      <div className="logo">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </div>
      <ul className="nav list-none sm:flex hidden sm:gap-10 md:gap-20 gap-10 flex-1 items-center justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] cursor-pointer transition duration-150 ${
              index === selectedIndex ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setIndex(index)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 items-center justify-end">
        <img
          alt="menu"
          src={toggleNav ? close : menu}
          className="cursor-pointer w-[28px] h-[28px]"
          onClick={() => setNavToggle(!toggleNav)}
        />
        <div
          className={`${
            toggleNav ? "flex" : "hidden"
          } bg-black-gradient p-6 mx-4 my-2 sidebar rounded-xl absolute right-0 top-20 min-w-[140px] z-[1]`}
        >
          <ul className="nav list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-white"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
