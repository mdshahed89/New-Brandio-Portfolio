import React from "react";
import HeroBanner from "@/public/images/HeroImg.png";
import Link from "next/link";
import Image from "next/image";
import HeroVideo from '@/public/images/HeroVideo.gif';


const Hero = () => {
  return (
    <div className="bg-[#000] relative pt-[50px] lg:pt-[200px] pb-36 px-3 ">
      <div className="mx-auto max-w-[1300px] h-[650px] lg:h-[440px] flex items-center lg:flex-row flex-col gap-10 ">

        <div className=" lg:flex-1 lg:order-1 order-2 ">
        <div className=" mb-14 ">
            <h2 className=" text-[#FFD200] text-[2rem] lg:text-[2.8rem] font-semibold leading-tight mb-2 ">Innovation Starts Here</h2>
            <p className=" text-[#fff] max-w-[35rem] text-sm lg:text-base ">Brandio is a global leader in branding and development, dedicated to 
            redefining brand experiences and empowering business growth.</p>
        </div>
        <Link href={''} className=" bg-[#FFD200] px-6 py-3 rounded-full font-semibold   ">
            <span className=" lg:text-base text-sm ">Have a project in your mind</span>
        </Link>
        </div>

        <div className=" lg:flex-1 lg:order-2 order-1 ">
        <Image src={HeroVideo} alt="My Gif" className=" w-full h-[30rem]  object-cover "  />
        </div>

      </div>
    </div>
  );
};

export default Hero;
