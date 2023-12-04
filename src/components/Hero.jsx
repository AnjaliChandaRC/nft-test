import React from "react";
import heroLogo from "../assets/images/svg/hero-logo.svg";
const Hero = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/png/hero-bg.png')] h-[300px] sm:h-[350px] bg-no-repeat bg-center xl:bg-cover flex justify-center items-center">
        <div className="px-1">
          <h1 className="text-[32px] sm:text-xl font-semibold ff_playfair text-white text-center">
            "Best New NFT to look out for"
          </h1>
          <p className="text-[30px] sm:text-[36px] font-semibold ff_playfair text-white text-center mt-[-10px]">
            Which is Destroyer-of-fiat
          </p>
        </div>
      </div>
      <div className="text-center mt-[-50px] sm:mt-[-100px]">
        <img
          src={heroLogo}
          alt="hero-logo"
          className="w-[35%] sm:w-[25%] lg:w-[15%] m-auto"
        />
        <button className="text-[#27A099] text-md font-semibold ff_josefin h-[36.95px] px-[20px] border-[1px] border-solid border-[#27A099] rounded-[25px] mt-4 hover:text-white hover:bg-[#27A099] transition-all ease-in-out duration-300">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Hero;
