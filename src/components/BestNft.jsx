import React from "react";
import { BestNftData } from "../common/Helper";
import { BestCardIcon } from "../common/Icons";
const BestNft = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 pt-20 xl:pt-[103px]">
        <h2 className="text-[35px] sm:text-2xl font-bold ff_josefin text-black text-center">
          Best NFT's Of 2022
        </h2>
        <div className="flex justify-center xl:justify-between flex-wrap sm:pt-[30px] xl:pt-[90px]">
          {BestNftData.map((obj, index) => (
            <div
              className="w-full sm:w-[47%] lg:w-[40%] xl:w-[32%] rounded-[25px] border-[1px] border-solid bg-white best_card_border p-[30px] mt-12 xl:mt-0 mx-2 lg:mx-6 xl:mx-0"
              key={index}
            >
              <p className="text-md font-semibold ff_josefin text-white text-center bg-black h-[40px] w-[166px] px-[20px] pt-[7px] rounded-[16px] mx-auto mt-[-50px]">
                {obj.rating}
              </p>
              <img
                src={obj.img}
                alt="card_img"
                className="m-auto pt-4 w-[48%] sm:w-[63%]"
              />
              <h4 className="text-[28px] sm:text-[30px] font-bold ff_josefin text-black text-center pt-6 leading-[0.9] max-h-[60px]">
                {obj.heading}
              </h4>
              <div
                className={`${
                  index === 2 ? "pt-10 sm:pt-2" : "pt-4"
                } flex justify-between`}
              >
                <p className="text-lg ff_josefin opacity-[0.6] text-black">
                  Items
                </p>
                <p className="text-lg ff_josefin text-black">{obj.item}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ff_josefin opacity-[0.6] text-black">
                  Owners
                </p>
                <p className="text-lg ff_josefin text-black">{obj.owners}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ff_josefin opacity-[0.6] text-black">
                  Floor price
                </p>
                <div className="flex justify-center items-center">
                  <BestCardIcon />
                  <p className="text-lg ff_josefin text-black pl-[10px]">
                    {obj.price}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ff_josefin opacity-[0.6] text-black">
                  Volume trade
                </p>
                <div className="flex justify-center items-center">
                  <BestCardIcon />
                  <p className="text-lg ff_josefin text-black pl-[10px]">
                    {obj.trade}
                  </p>
                </div>
              </div>
              <div className="mt-[42px] text-center">
                <button className="text-md font-semibold ff_josefin text-white text-center bg-[#27A099] h-[36.95px] px-[20px] border-[1px] border-solid border-[#27A099] rounded-[25px] hover:text-[#27A099] hover:bg-white transition-all ease-in-out duration-300">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestNft;
