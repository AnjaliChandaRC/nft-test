import React from "react";
import typeNftImg from "../assets/images/png/typenft.png";
const TypesOfNFT = () => {
  return (
    <>
      <div className="pt-20 px-5 xl:px-0">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto">
          <h3 className="text-[35px] sm:text-2xl font-bold ff_josefin text-black text-center">
            Types of NFT
          </h3>
          <p className="text-md font-semibold ff_josefin text-black opacity-[0.8] leading-[120%] pt-[25px] lg:pt-[50px] xl:px-[36px] m-auto">
            “NFT” has been crowned Collin Dictionary’s Word of the Year for
            2021. After all, NFTs, or non-fungible tokens, have amassed a
            following like no other over the past year. So much so that the use
            of this abbreviation increased by 11,000% in 2021. Collins Learning
            managing director, Alex Beecroft, told the Guardian, “NFTs seem to
            be everywhere, from the arts sections to the financial pages and in
            galleries and auction houses and across social media platforms.” In
            keeping with that, we have rounded up the top five NFT types to
            watch for in 2022.
          </p>
          <div className="sm:flex justify-between items-center pt-10 xl:px-[36px]">
            <div className="flex justifybetween">
              <div>
                <p className="text-[24px] font-bold ff_josefin text-[#595959] text-center">
                  #
                </p>
                <p className="text-[24px] font-bold ff_josefin text-[#595959] text-center">
                  #
                </p>
                <p className="text-[24px] font-bold ff_josefin text-[#595959] text-center">
                  #
                </p>
                <p className="text-[24px] font-bold ff_josefin text-[#595959] text-center">
                  #
                </p>
                <p className="text-[24px] font-bold ff_josefin text-[#595959] text-center">
                  #
                </p>
              </div>
              <div className="pl-6">
                <p className="text-[20px] sm:text-[24px] font-bold ff_josefin pt-[6px] sm:pt-0 text-[#595959]">
                  NFT art
                </p>
                <p className="text-[20px] sm:text-[24px] font-bold ff_josefin pt-[6px] sm:pt-0 text-[#595959]">
                  NFT music
                </p>
                <p className="text-[20px] sm:text-[24px] font-bold ff_josefin pt-[6px] sm:pt-0 text-[#595959]">
                  NFT games
                </p>
                <p className="text-[20px] sm:text-[24px] font-bold ff_josefin pt-[6px] sm:pt-0 text-[#595959]">
                  NFT fashion
                </p>
                <p className="text-[20px] sm:text-[24px] font-bold ff_josefin pt-[6px] sm:pt-0 text-[#595959]">
                  NFT memes
                </p>
              </div>
            </div>
            <div className="pt-5 sm:pt-0">
              <img src={typeNftImg} alt="typenft" />
            </div>
          </div>
          <p className="text-md font-semibold ff_josefin text-black opacity-[0.8] leading-[120%] xl:px-[36px] m-auto pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default TypesOfNFT;
