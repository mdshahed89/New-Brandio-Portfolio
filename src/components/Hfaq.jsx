"use client";

import { useState } from "react";
import FaqImg1 from "@/assets/FaqImg1.png";
import Image from "next/image";

export default function Hfaq() {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "Branding",
      description:
        "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "UI/UX Design",
      description:
        "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "Web Design & Development",
      description:
       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "Mobile Application",
      description:
       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "Digital Marketing",
      description:
       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "Monthly Design",
      description:
       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
    {
      title: "CMS Website",
      description:
       "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience, enhancing recognition and trust. "
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className=" bg-[#1B1714] ">
      <div className="w-full max-w-[1300px] mx-auto rounded-lg p-3 *:mix-blend-difference ">
        <p className=" text-sm text-[#fff] border-b border-[#8a8a8a] py-3 ">Services We Offer</p>
        {dataArr.map((PerAccordion, idx) => (
          <div
            key={idx}
            className="border-b border-gray-500/50 py-3 last-of-type:border-b-0"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between md:py-0 py-7 font-medium text-white outline-none"
            >
              <div className=" flex items-center gap-4 ">
                <p
                  className={`${
                    isOpen === idx ? "text-[#FF2530] " : " text-[#FFD200]"
                  } transition-colors duration-700  `}
                >
                  0{idx + 1}
                </p>
                <span className={` ${isOpen === idx ? "text-[#fff]" : "text-[#7D7D82]"} text-[1.4rem] sm:text-[1.6rem] font-semibold transition-colors duration-700 ease-in-out `}>{PerAccordion.title}</span>
              </div>
              <div className=" md:block hidden ">
                <Image
                  src={FaqImg1}
                  className={`  transition-transform duration-300 transform ${
                    isOpen === idx ? "-rotate-[20deg] " : null
                  } `}
                  style={{ transformOrigin: "right bottom" }}
                />
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-zinc-400 gap-4 transition-all duration-700 ease-in-out ${
                isOpen === idx
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className=" max-w-[30rem] lg:max-w-[40rem] pr-4 text-sm">
                {PerAccordion.description}
              </div>
              <button className=" text-[#000] bg-[#FFD200] w-36 font-semibold py-2 rounded-full ">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
