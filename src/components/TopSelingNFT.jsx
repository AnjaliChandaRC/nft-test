import React from "react";
import topsellingOne from "../assets/images/png/topselling-1.png";
import topsellingTwo from "../assets/images/png/topselling-2.png";
const TopSelingNFT = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 pt-[80px] xl:pt-[91px]">
        <h2 className="text-[35px] sm:text-2xl font-bold ff_josefin text-black text-center">
          Top Seling NFT Projects of 2021
        </h2>
        <div className="rounded-[25px] bg-white best_card_border py-[28px] px-5 lg:px-5 lg:flex justify-between items-center mt-10 lg:mt-[60px]">
          <img src={topsellingOne} alt="anticipated-img-1" className="m-auto" />
          <div className="lg:pl-[29px] pt-5 sm:pt-0">
            <h5 className="text-[30px] font-bold ff_josefin text-black">
              CryptoPunks, Larva Labs
            </h5>
            <p className="text-md font-semibold ff_josefin text-black opacity-[0.8] leading-[120%]">
              CryptoPunks are the OG of NFTs, according to DappRadar. The
              collection launched back in 2017 before the ERC-721 NFT standard
              existed. Larva Labs released all 10,000 punks for free to Ethereum
              users and since then, CryptoPunks’ popularity and value on the
              secondary market have boomed! In June 2021, an alien punk sold at
              Sotheby’s for $11.75 million. In August, Visa acquired a $150,000
              CryptoPunk for its corporate collection and Hollywood agency UTA
              inked a deal to use CryptoPunks in mainstream media. August 2021
              saw a record $400 million spent on CryptoPunks in a single month.
              In September, Reddit co-founder Alexis Ohanian attended the Met
              Gala sporting a CryptoPunk badge. CryptoPunks has seen the highest
              trading volume on OpenSea with 756,984 Ether (ETH) ($3.03
              billion). Its increasing value and historical relevance makes it
              the top NFT collection.
            </p>
          </div>
        </div>
        <div className="rounded-[25px] bg-white best_card_border py-[28px] px-5 lg:px-5 lg:flex justify-between items-center mt-[48px]">
          <img src={topsellingTwo} alt="anticipated-img-2" className="m-auto" />
          <div className="lg:pl-[29px] pt-5 sm:pt-0">
            <h5 className="text-[30px] font-bold ff_josefin text-black">
              Bored Ape Yacht Club, Yuga Labs
            </h5>
            <p className="text-md font-semibold ff_josefin text-black opacity-[0.8] leading-[120%]">
              The collection with the second highest historical trading volume
              is Bored Ape Yacht Club, or BAYC, with 266,843 ETH ($1.07
              billion). The core team behind Yuga Labs is made up of four
              friends who wanted “to make some dope apes, test our skills and
              try to build something ridiculous” this year, according to their
              website. The lead artist behind BAYC is All Seeing Seneca. As an
              owner of one of the 10,000 Bored Apes, an NFT can double as a
              Yacht Club membership card and grant members-only access to THE
              BATHROOM, the Bored Ape Kennel Club and Mutant Ape Yacht Club, or
              MAYC. In September, Sotheby's sold a collection of 107 BAYC NFTs,
              made up of 101 Bored Apes and six Mutant Apes, for $24.4 million.
              This is the third-highest off-chain NFT art sale at an auction
              house to date, after Beeple’s NFT pieces. In November, a surge in
              OpenSea sales appeared to be connected with a more than 900%
              uptick in the sale volume of BAYC and MAYC NFTs, likely due to
              celebrity buyers like Jimmy Fallon,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSelingNFT;
