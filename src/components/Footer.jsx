import React from "react";
import { DiscordIcon, InstaIcon, TeleIcon, TwitterIcon } from "../common/Icons";

const Footer = () => {
  return (
    <>
      <div className="bg-black sm:h-[280px] mt-16 rounded-[25px] py-10">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="sm:flex justify-between items-center sm:h[280px]">
            <h6 className="ff_chonburi text-lg text-white text-center">
              Top NFT Of <br /> 2022
            </h6>
            <div className="w-[400]">
              <p className="text-[20px] font-bold ff_josefin text-white text-center">
                Get the latest updates
              </p>
              <form className="rounded-[25px] w-full sm:w-[432px] h-[35px] flex justify-between mt-[25px] bg-[#3F3F46]">
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="bg-[#3F3F46] rounded-[25px] w-[60%] focus:outline-none text-white pl-3 sm:pl-[28px] pe-3"
                />
                <button className="text-md font-semibold ff_josefin text-black bg-white w-[140px] sm:w-[185px] pt-1 flex justify-center items-center rounded-[0px_25px_25px_0px] hover:bg-black hover:text-white hover:border-white hover:border-[1px] transition-all ease-in-out duration-300">
                  SUBSCRIBE
                </button>
              </form>
              <div className="flex justify-center pt-[34px] pb-5 sm:pb-[47px]">
                <a
                  href="/"
                  className="hover:scale-[0.9] transition-all ease-in-out duration-300"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="/"
                  className="pl-4 hover:scale-[0.9] transition-all ease-in-out duration-300"
                >
                  <DiscordIcon />
                </a>
                <a
                  href="/"
                  className="pl-4 hover:scale-[0.9] transition-all ease-in-out duration-300"
                >
                  <InstaIcon />
                </a>
                <a
                  href="/"
                  className="pl-4 hover:scale-[0.9] transition-all ease-in-out duration-300"
                >
                  <TeleIcon />
                </a>
              </div>
              <p className="text-[12px] font-bold ff_josefin text-white text-center opacity-[0.5] hidden sm:block">
                © Copyright 2022 Destroyers of Fiat . All Rights Reserved.
              </p>
            </div>
            <ul>
              <li className="text-sm font-medium ff_josefin text-white opacity-[0.6] hover:opacity-[1] transition-all ease-in-out duration-300">
                <a href="#">Home</a>
              </li>
              <li className="text-sm font-medium ff_josefin text-white opacity-[0.6] hover:opacity-[1] transition-all ease-in-out duration-300 pt-[24px]">
                <a href="best-nft">Best NFT</a>
              </li>
              <li className="text-sm font-medium ff_josefin text-white opacity-[0.6] hover:opacity-[1] transition-all ease-in-out duration-300 pt-[24px]">
                <a href="quote">NFT Quote</a>
              </li>
              <li className="text-sm font-medium ff_josefin text-white opacity-[0.6] hover:opacity-[1] transition-all ease-in-out duration-300 pt-[24px]">
                <a href="faqs">FAQ</a>
              </li>
            </ul>
            <p className="text-[12px] font-bold ff_josefin text-white text-center opacity-[0.5] sm:hidden pt-5">
              © Copyright 2022 Destroyers of Fiat . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
