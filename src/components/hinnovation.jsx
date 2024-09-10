import React from "react";
import HomeServiceImg from "@/assets/InnovationImg.png";
import Link from "next/link";
import Image from "next/image";

const HomeInnovation = () => {
  return (
    <div className=" bg-[#F4F1EF] py-5 ">
      <div className=" max-w-[1400px] mx-auto ">
        <div className="flex md:flex-row flex-col justify-center gap-14 px-3 md:px-[2rem] rounded-2xl py-[2rem]  items-center text-[#000] ">
          <div className=" w-full flex flex-col md:text-left text-center md:justify-start justify-center items-center md:items-start md:w-1/2 ">
            <div className=" mb-10 ">
              {/* <Fade direction="down"> */}
                <h2 className=" text-2xl md:text-3xl font-bold text-[#000] ">
                  Innovation Starts Here
                </h2>
              {/* </Fade> */}
              <p className=" text-sm  md:text-base mt-4 ">
                Welcome to our Design & Development Company! We are a passionate
                team of creative designers and Development experts who are
                dedicated to crafting intuitive and impactful digital
                experiences for our clients.
              </p>
            </div>
            <Link href={"/packages"} className=" ">
              <button className="bg-[#FFD200] text-[#000] font-bold hover:bg-[#d8bb3c] transition duration-300 ease-in-out w-[12rem] flex items-center justify-center text-base h-[2.5rem] rounded-full ">
                More About Us
              </button>
            </Link>
          </div>
          <div className=" w-full md:w-1/2 ">
            <Image
              src={HomeServiceImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInnovation;
