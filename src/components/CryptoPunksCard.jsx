import React from "react";
import card_two_logo from "../assets/images/png/bestnft-img-2.png";
import starIcon2 from "../assets/images/svg/star-2.svg";
import { BestCardIcon } from "../common/Icons";
const CryptoPunksCard = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 pt-20">
        <div className="rounded-[25px] bg-white best_card_border py-[48px] px-5 lg:px-[70px] sm:flex justify-between items-center">
          <div>
            <img src={card_two_logo} alt="bestnft-img-2" className="m-auto" />
          </div>
          <div className="pt-10 sm:pt-0">
            <div className="text-center">
              <img className="m-auto" src={starIcon2} alt="star2" />
              <p className="text-lg ff_josefin text-black opacity-[0.6]">4.3</p>
            </div>
            <div className="sm:mt-[140px] text-center">
              <button className="text-md font-semibold ff_josefin text-white text-center bg-[#27A099] h-[36.95px] px-[20px] border-[1px] border-solid border-[#27A099] rounded-[25px] hover:text-[#27A099] hover:bg-white transition-all ease-in-out duration-300">
                Get a free quote
              </button>
            </div>
          </div>
          <div className="sm:w-[250px] lg:w-[319px]">
            <div className="flex justify-between pt-3">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Items
              </p>
              <p className="text-lg ff_josefin text-black">10.0k</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Owners
              </p>
              <p className="text-lg ff_josefin text-black">3.4k</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Floor price
              </p>
              <div className="flex justify-center items-center">
                <BestCardIcon />
                <p className="text-lg ff_josefin text-black pl-[10px]">--</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ff_josefin opacity-[0.6] text-black">
                Volume trade
              </p>
              <div className="flex justify-center items-center">
                <BestCardIcon />
                <p className="text-lg ff_josefin text-black pl-[10px]">
                  851.3k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoPunksCard;
