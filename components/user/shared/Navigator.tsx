"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Navigator = () => {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const navigateTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    navigateTop();
  }, []);

  return (
    <>
      {scrolling >= 10 && (
        <div
          onClick={navigateTop}
          className="fixed z-20 p-2 cursor-pointer hover:bg-gray-800 flex justify-center items-center bottom-8 rounded-full right-6 bg-gray-300 text-white"
        >
          <IoIosArrowUp size={25} />
        </div>
      )}
    </>
  );
};

export default Navigator;
