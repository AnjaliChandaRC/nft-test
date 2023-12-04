import React, { useState } from "react";
import { faqs } from "../common/Helper";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (faqId) => {
    if (open === faqId) {
      setOpen(null);
    } else {
      setOpen(faqId);
    }
  };

  return (
    <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 pt-16">
      <h1 className="text-2xl font-bold ff_josefin text-black mb-4 text-center">
        FAQs
      </h1>
      <div className="accordion">
        {faqs.map((faq) => (
          <div
            className={`border rounded-md mb-[23px] ${
              open === faq.id ? "border-black border-[2px]" : "border-gray-300"
            }`}
            key={faq.id}
          >
            <button
              className="w-full text-left py-3 px-4 bg-white flex justify-between items-center rounded-[10px] sm:h-[67px]"
              onClick={() => toggleAnswer(faq.id)}
            >
              <span className="text-[20px] sm:text-[23px] font-bold ff_josefin text-black">
                {faq.question}
              </span>
              <span
                className={`transform transition duration-300 ${
                  open === faq.id ? "rotate-180" : ""
                }`}
              >
                ^
              </span>
            </button>
            <div
              className={`accordion-content px-4 pb-3 ${
                open === faq.id ? "block transition-all max-h-screen" : "hidden"
              }`}
            >
              <p className="text-[16px] sm:text-md ff_josefin text-black mb-2 opacity-[0.7] pt-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
