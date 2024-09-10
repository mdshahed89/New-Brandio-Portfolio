import React from 'react'
import Partner1 from "@/assets/1.png"
import Partner2 from "@/assets/2.png"
import Partner3 from "@/assets/3.png"
import Partner4 from "@/assets/4.png"
import Partner5 from "@/assets/5.png"
import Partner6 from "@/assets/6.png"
import Partner7 from "@/assets/7.png"
import Partner9 from "@/assets/9.png"
import Partner10 from "@/assets/10.png"
import Partner11 from "@/assets/11.png"
import Partner12 from "@/assets/12.png"
import Partner13 from "@/assets/13.png"
import Partner14 from "@/assets/14.png"
import Partner15 from "@/assets/15.png"
import Partner16 from "@/assets/16.png"
import Partner8 from "@/assets/8.png"
import Image from 'next/image'

const Partner = () => {
  return (
    <div className=' bg-[#fff] '>
        <div className='max-w-[1300px] mx-auto py-16 px-5 '>
        <div className='text-center '>
            {/* <Fade direction='down' > */}
            <h2 className='text-3xl font-bold text-[#1B1714]  '>100+ Branding Partner</h2>
            <p className='text-[#1B1714] mt-2 font-medium '>Brands are the cultural connection between companies and their communities.</p>
            {/* </Fade> */}
        </div>

        <div className='grid grid-cols-2 mt-[1rem] mb-[3rem] md:grid-cols-8 place-items-center gap-7 md:gap-5 '>
            <div className='mt-6'>
                <Image src={Partner1} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner2} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner3} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner4} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner5} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner6} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner7} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner8} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner9} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner10} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner11} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner12} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner13} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner14} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner15} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <Image src={Partner16} alt="" className=' w-[80%] md:w-full' />
            </div>

        </div>

    </div>
    </div>
  )
}

export default Partner