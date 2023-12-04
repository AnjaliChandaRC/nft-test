import React from "react";
import card_one_logo from "../assets/images/png/bestnft-img-1.png";
import starIcon from "../assets/images/svg/star.svg";
import { BestCardIcon } from "../common/Icons";

const AboutAntonymCard = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 pt-20">
        <div className="rounded-[25px] bg-white best_card_border py-[48px] px-5 lg:px-[70px] sm:flex justify-between items-center">
          <div>
            <img
              src={card_one_logo}
              alt="bestnft-img-1"
              className="m-auto"
            />
          </div>
          <div className="pt-10 sm:pt-0">
            <div className="text-center">
              <img className="m-auto" src={starIcon} alt="star" />
              <p className="text-lg ff_josefin text-black opacity-[0.6]">4.8</p>
            </div>
            <div className="sm:mt-[140px] text-center">
              <button className="text-md font-semibold ff_josefin text-white text-center bg-[#27A099] h-[36.95px] px-[20px] border-[1px] border-solid border-[#27A099] rounded-[25px] hover:text-[#27A099] hover:bg-white transition-all ease-in-out duration-300">
                Get a free quote
              </button>
            </div>
          </div>
          <div>
            <p className="text-[28px] sm:text-[30px] font-bold ff_josefin text-black text-center pt-6">
              Antonym: GENESIS
            </p>
            <div className="flex justify-between pt-3">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Items
              </p>
              <p className="text-lg ff_josefin text-black">4.3k</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Owners
              </p>
              <p className="text-lg ff_josefin text-black">3.6k</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Floor price
              </p>
              <div className="flex justify-center items-center">
                <BestCardIcon />
                <p className="text-lg ff_josefin text-black pl-[10px]">1</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Volume trade
              </p>
              <p className="text-lg ff_josefin text-black pl-[10px]">1.6k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAntonymCard;
