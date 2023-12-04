import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { ToggleIcon, HeaderLogo, SearchIcon } from "../common/Icons";

const Header = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow_overlay_hidden");
    } else if (!activeNavOverlay) {
      document.body.classList.remove("overflow_overlay_hidden");
    }
  }, [activeNavOverlay]);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <MobileNav
        activeNavOverlay={activeNavOverlay}
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="w-full bg-dark_blue xl:h-[100px] 3xl:h-[110px] flex items-center">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="relative flex items-center justify-between">
            <div
              className={`flex-1 flex items-center justify-between xl:mr-3 ${
                isTextVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex-shrink-0 flex items-center pt-2">
                <a href="/">
                  <HeaderLogo />
                </a>
              </div>
              <div className="hidden lg:flex">
                <div className="flex justify-center items-center border-[1px] border-solid border-[#b3b3b3] rounded-[25px] w-[183px] ps-[12px] me-[59px]">
                  <div>
                    <SearchIcon />
                  </div>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="ps-[8px] ff_josefin text-lightblack rounded-[25px] pe-1 w-[150px] focus:outline-none"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="#profile"
                    className="text-black opacity-[0.6] text-base 3xl:text-lg ff_josefin font-medium transition duration-500 ease-in-out relative  hover:opacity-[1]"
                    aria-current="page"
                  >
                    My Profile
                  </a>
                  <a
                    href="#explore"
                    className="text-black opacity-[0.6] text-base 3xl:text-lg ff_josefin font-medium transition duration-500 ease-in-out relative ml-[29px] hover:opacity-[1]"
                  >
                    Explore
                  </a>
                  <a
                    href="#news"
                    className="text-black opacity-[0.6] text-base 3xl:text-lg ff_josefin font-medium transition duration-500 ease-in-out relative ml-[29px] hover:opacity-[1]"
                  >
                    News
                  </a>
                  <a
                    href="#activity"
                    className="text-black opacity-[0.6] text-base 3xl:text-lg ff_josefin font-medium transition duration-500 ease-in-out relative ml-[29px] hover:opacity-[1]"
                  >
                    Activity
                  </a>
                </div>
                <div>
                  <a
                    href="#pricing"
                    className="hidden lg:block h-[36.95px] pt-[6px] px-[26px] ml-[61px] text-white bg-black text-md font-semibold ff_josefin rounded-[25px] border hover:border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300"
                  >
                    SIGN IN
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveNavOverlay(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-md lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <ToggleIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
