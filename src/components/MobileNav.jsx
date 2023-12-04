import React from "react";
import { HeaderCrossIcons } from "../common/Icons";

const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  return (
    <>
      <div
        className={`fixed lg:hidden bg-black top-0 h-full flex flex-col transition-all duration-200 ease-in items-center justify-center z-[41] w-full ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <ul className="text-center">
          <li>
            <a
              href="#profile"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-lg sm:text-[25px] ff_josefin font-semibold transition duration-500 ease-in-out hover:text_gradient"
              aria-current="page"
            >
              My Profile
            </a>
          </li>
          <li className="py-4 sm:py-10">
            <a
              href="#explore"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-lg sm:text-[25px] ff_josefin font-semibold transition duration-500 ease-in-out hover:text_gradient"
              aria-current="page"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#news"
              onClick={() => setActiveNavOverlay(false)}
              className="text-center text-white text-lg sm:text-[25px] ff_josefin font-semibold transition duration-500 ease-in-out hover:text_gradient"
              aria-current="press"
            >
              News
            </a>
          </li>
          <li className="py-4 sm:py-10">
            <a
              href="#activity"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-lg sm:text-[25px] ff_josefin font-semibold transition duration-500 ease-in-out hover:text_gradient"
              aria-current="page"
            >
              Activity
            </a>
          </li>
        </ul>
        <a
          href="#pricing"
          className="h-[42px] pt-[4px] px-[26px] text-white text-lg font-semibold ff_josefin rounded-[42px] border border-white hover:border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300 "
        >
          SIGN IN
        </a>
        <div className="absolute top-6 md:top-8 right-4 z-[60] sm:right-8 md:right-14">
          <button onClick={() => setActiveNavOverlay(false)}>
            <HeaderCrossIcons />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
