import React from "react";

const Top3Nft = () => {
  return (
    <>
      <div className="pt-20 xl:pt-[110px] px-5 xl:px-0">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 rounded-[25px] bg-white top_3_nft_bg py-10 sm:pt-[62px] sm:pb-[58px]">
          <h3 className="text-[35px] sm:text-2xl font-bold ff_josefin text-black text-center">
            Top 3 NFTs
          </h3>
          <p className="text-md font-semibold ff_josefin text-black text-center opacity-[0.8] leading-[120%] pt-2 max-w-[969px] m-auto">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="flex justify-center pt-[35px]">
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
            </div>
            <div className="pl-6">
              <p className="text-[20px] sm:text-[24px] font-bold ff_josefin text-[#595959]">
                Antonym: GENESIS
              </p>
              <p className="text-[20px] sm:text-[24px] font-bold ff_josefin text-[#595959]">
                CryptoPunks
              </p>
              <p className="text-[20px] sm:text-[24px] font-bold ff_josefin text-[#595959]">
                Clone X - X Takashi Murakami
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top3Nft;
