import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <>
      {showButton && (
        <div
          className="topscroll d-flex justify-content-center align-items-center cursor-pointer relative"
          onClick={() => scrollToTop()}
        >
          <div className="absolute top-[21%] left-[24%]">
            <UpArrowIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;

export const UpArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      aria-hidden="true"
      role="img"
      width="20"
      height="20"
      fill="#42b0ef"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  );
};
