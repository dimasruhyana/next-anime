"use client";
import { ArrowFatLineUp } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";

const ButtonBackTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleButton = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ButtonBackToTop = () => {
    return (
      <div className="fixed bottom-3 right-4 flex justify-center items-center rounded-full shadow-xl bg-accent md:bottom-4 md:p-3 p-2 hover:bg-green-600 transition-all">
        <ArrowFatLineUp
          size={32}
          className="font-bold dark:text-white text-white"
          onClick={() => handleButton()}
        />
      </div>
    );
  };

  return backToTop ? <ButtonBackToTop /> : null;
};

export default ButtonBackTop;
