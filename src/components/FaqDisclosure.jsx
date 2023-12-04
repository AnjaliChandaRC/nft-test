import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import { BulbIcon, MailIcon } from "@/common/Icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "" : "rotate-180"
      } h-5 w-5 transition-transform`}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M2.34049 12.0455C2.55146 12.2564 2.83756 12.3749 3.13587 12.3749C3.43418 12.3749 3.72027 12.2564 3.93124 12.0455L9.49999 6.47674L15.0687 12.0455C15.2809 12.2504 15.5651 12.3638 15.8601 12.3612C16.155 12.3587 16.4372 12.2404 16.6458 12.0318C16.8544 11.8232 16.9727 11.541 16.9753 11.2461C16.9778 10.9511 16.8644 10.6669 16.6595 10.4547L10.2954 4.09062C10.0844 3.87971 9.7983 3.76123 9.49999 3.76123C9.20168 3.76123 8.91559 3.87971 8.70462 4.09062L2.34049 10.4547C2.12959 10.6657 2.01111 10.9518 2.01111 11.2501C2.01111 11.5484 2.12959 11.8345 2.34049 12.0455Z"
        fill="white"
      />
    </svg>
  );
}

const TestFaq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (window.innerWidth > 374 && window.innerWidth < 1199.99) {
      let Colfrist = gsap.timeline({
        scrollTrigger: {
          trigger: "#Faq",
          start: "top 60%",
          end: "bottom 70%",
          once: true,
          scrub: 3,
        },
      });
      Colfrist.fromTo(
        ".ColCardfaq",
        {
          x: -500,
          opacity: 0,
          duration: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );
      Colfrist.fromTo(
        ".ColCardfaq2",
        {
          x: 500,
          duration: 1,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );
    } else if (window.innerWidth > 1200) {
      let Colfrist = gsap.timeline({
        scrollTrigger: {
          trigger: "#Faq",
          start: "top 70%",
          end: "80% 100%",
          once: true,
          scrub: 3,
        },
      });
      Colfrist.fromTo(
        ".ColCardfaq",
        {
          x: -500,
          opacity: 0,
          duration: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );
      Colfrist.fromTo(
        ".ColCardfaq2",
        {
          x: 500,
          duration: 1,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );
    }
  }, []);
  return (
    <>
      <Fragment>
        <Accordion
          className={`relative z-10 px-4 md:px-6 py-4 md:py-6 ${
            open === 1
              ? "border-t border border-[#697685] rounded-[10px] bg-dark_blue3 pb-4 md:pb-6"
              : ""
          }`}
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border-none outline-none py-0"
          >
            <p className="text-lg sm:text-xl py-0 lg:text-2xl 3xl:text-[28px] text-white font-bold ff_open">
              Q: What is MyPipsPlus Hands-Free Trading platform?
            </p>
          </AccordionHeader>
          <AccordionBody className="ff_raleway font-normal pt-3 pb-0 opacity-70 text-white text-base md:text-lg 3xl:text-[20px]">
            MyPipsPlus is a groundbreaking Hands-Free Trading platform designed
            to enable users to achieve impressive monthly returns ranging from
            10% to 50%, all without the need for manual trading. This innovative
            system aims to simplify the complexities of traditional trading and
            usher in a new era of effortless profitability.
          </AccordionBody>
        </Accordion>
        <Accordion
          className={`relative z-10 px-4 md:px-6 py-4 md:py-6 ${
            open === 2
              ? "border-t border border-[#697685] rounded-[10px] bg-dark_blue3 pb-4 md:pb-6"
              : ""
          }`}
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            className="border-none outline-none py-0"
            onClick={() => handleOpen(2)}
          >
            <p className="text-lg sm:text-xl py-0 lg:text-2xl 3xl:text-[28px] text-white font-bold ff_open">
              Q: How does Hands-Free Trading work?
            </p>
          </AccordionHeader>
          <AccordionBody className="ff_raleway font-normal pt-3 pb-0 opacity-70 text-white text-base md:text-lg 3xl:text-[20px]">
            MyPipsPlus utilizes an advanced trading algorithm to automate the
            trading process on your behalf. By connecting your account to our
            master account, trades are executed automatically based on pre-set
            parameters and market analysis. This hands-free approach eliminates
            the need for manual trading, making it easier for users to
            capitalize on market opportunities.
          </AccordionBody>
        </Accordion>
        <Accordion
          className={`relative z-10 px-4 md:px-6 py-4 md:py-6 ${
            open === 3
              ? "border-t border border-[#697685] rounded-[10px] bg-dark_blue3 pb-4 md:pb-6"
              : ""
          }`}
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            className="border-none outline-none py-0"
            onClick={() => handleOpen(3)}
          >
            <p className="text-lg sm:text-xl py-0 lg:text-2xl 3xl:text-[28px] text-white font-bold ff_open">
              {" "}
              Q: What kind of returns can I expect from MyPipsPlus?
            </p>
          </AccordionHeader>
          <AccordionBody className="ff_raleway font-normal pt-3 pb-0 opacity-70 text-white text-base md:text-lg 3xl:text-[20px]">
            MyPipsPlus promises the potential for monthly returns ranging from
            10% to 50%. However, it's important to note that trading carries
            inherent risks, and actual returns can vary based on market
            conditions and individual factors. MyPipsPlus aims to provide
            attractive returns, but users should be aware that there is no
            guaranteed profitability.
          </AccordionBody>
        </Accordion>
        <Accordion
          className={`relative z-10 px-4 md:px-6 py-4 md:py-6 ${
            open === 4
              ? "border-t border border-[#697685] rounded-[10px] bg-dark_blue3 pb-4 md:pb-6"
              : ""
          }`}
          open={open === 4}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader
            className="border-none outline-none py-0"
            onClick={() => handleOpen(4)}
          >
            <p className="text-lg sm:text-xl py-0 lg:text-2xl 3xl:text-[28px] text-white font-bold ff_open">
              {" "}
              Q: Is my investment safe with MyPipsPlus?
            </p>
          </AccordionHeader>
          <AccordionBody className="ff_raleway font-normal pt-3 pb-0 opacity-70 text-white text-base md:text-lg 3xl:text-[20px]">
            MyPipsPlus takes measures to safeguard your investment, including
            utilizing advanced risk management strategies. Any trades causing
            equity to go over a max drawdown of 20% is closed out. While the
            platform aims to minimize risks, it's crucial to understand that
            trading inherently involves uncertainties. Users should only invest
            funds they can afford to lose and carefully consider their risk
            tolerance before participating in the platform.
          </AccordionBody>
        </Accordion>
        <Accordion
          className={`relative z-10 px-4 md:px-6 py-4 md:py-6 ${
            open === 5
              ? "border-t border border-[#697685] rounded-[10px] bg-dark_blue3 pb-4 md:pb-6"
              : ""
          }`}
          open={open === 5}
          icon={<Icon id={5} open={open} />}
        >
          <AccordionHeader
            className="border-none outline-none py-0"
            onClick={() => handleOpen(5)}
          >
            <p className="text-lg sm:text-xl py-0 lg:text-2xl 3xl:text-[28px] text-white font-bold ff_open">
              {" "}
              Q: How do I get started with MyPipsPlus Hands-Free Trading?
            </p>
          </AccordionHeader>
          <AccordionBody className="ff_raleway font-normal pt-3 pb-0 opacity-70 text-white text-base md:text-lg 3xl:text-[20px]">
            To begin with MyPipsPlus, the first step is to acquire a
            subscription plan from our website. After completing the
            registration process, we will assist you in seamlessly linking your
            trading account, giving you complete control of your account and
            ensuring you retain 100% of your profits. MyPipsPlus will then take
            charge of trade execution on your behalf through copy trading on the
            account, adhering to the risk settings determined by the skilled
            trader overseeing the master account. This approach enables you to
            potentially achieve returns without the need for hands-on trade
            management.
          </AccordionBody>
        </Accordion>
      </Fragment>
      {/* <section id="Faq" className="pb-12 pt-6 sm:py-16 xl:py-24 ">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 mt-4">
          <div className="sm:w-[90%] mx-auto md:w-full">
            <h2 className=" text-lightBlack sm:pb-0.5 ff_roboto font-semibold leading-[120%] text-[30px] md:text-[40px] lg:text-3xl">
              FAQ’s
            </h2>
            <div className="flex flex-col lg:flex-row justify-between flex-wrap">
              <div className=" ColCardfaq lg:w-7/12 lg:pe-10">
              
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default TestFaq;
