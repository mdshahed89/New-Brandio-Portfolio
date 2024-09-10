import React from 'react'
import HomeVimg from "@/assets/HomeVimg.png"
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Image from 'next/image';


function HomeVideo() {
  return (
    <div>
       <div className=' h-[50rem] relative '>
       <Image src={HomeVimg} alt="" className=' w-full h-full object-cover ' />
       <div className=' absolute w-full h-full left-0 top-0 flex justify-center items-center '>
       <MdOutlineSlowMotionVideo  className=' text-[3rem] text-[#fff]  '/>
       </div>
       </div>
    </div>
  )
}

export default HomeVideo