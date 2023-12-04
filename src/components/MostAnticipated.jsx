import React from "react";
import { MostNftData } from "../common/Helper";
const MostAnticipated = () => {
  return (
    <>
      <div
        className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 pt-[66px]"
        id="explore"
      >
        <h2 className="text-[35px] sm:text-2xl font-bold ff_josefin text-black text-center">
          Most Anticipated NFT'S of 2022
        </h2>
        <div className="flex justify-center xl:justify-between flex-wrap sm:pt-[30px] xl:pt-[70px]">
          {MostNftData.map((obj, index) => (
            <div
              className="w-full sm:w-[47%] lg:w-[40%] xl:w-[32%] rounded-[25px] border-[1px] border-solid bg-white best_card_border px-4 py-[30px] mt-12 xl:mt-0 mx-2 lg:mx-6 xl:mx-0"
              key={index}
            >
              <p className="text-md font-semibold ff_josefin text-white text-center bg-black h-[40px] w-[166px] px-[20px] pt-[7px] rounded-[16px] mx-auto mt-[-50px]">
                {obj.rating}
              </p>
              <img
                src={obj.img}
                alt="card_img"
                className="m-auto pt-4 w-[100%] px-3"
              />
              <h4 className="text-[24px] font-bold ff_josefin text-black text-center pt-6 leading-[1]">
                {obj.heading}
              </h4>
              <p className="text-md font-semibold ff_josefin text-black text-center pt-3 opacity-[0.8] leading-[120%] max-h-[123px]">
                {obj.para}
              </p>
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

export default MostAnticipated;
