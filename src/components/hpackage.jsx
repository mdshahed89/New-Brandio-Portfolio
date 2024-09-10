import React from 'react'
import HomeServiceImg from "@/assets/HomeService.png"
import Image from 'next/image'
import Link from 'next/link'

const HomePackage = () => {
    return (
        <div className=' bg-[#1B1714] '>
            <div className=' max-w-[1400px] py-6 mx-auto '>

<div className='flex md:flex-row flex-col justify-center gap-10 px-3 md:px-[2rem] rounded-2xl py-[2rem]  items-center text-[#fff] '>
    <div className=' w-full md:w-1/2 '>
        <Image src={HomeServiceImg} alt="" className='w-full h-full object-cover' />
    </div>
    <div className=' w-full flex flex-col md:text-left text-center md:justify-start justify-center items-center md:items-start md:w-1/2 '>
        <div className=' mb-10 '>
            {/* <Fade direction='down' > */}
            <h2 className=' text-2xl md:text-3xl font-bold text-[#FFD200] '>Enroll for Monthly Design</h2>
            {/* </Fade> */}
            <p className=' text-sm  md:text-base mt-4 '>Explore your brand with our monthly design subscription service.
                Our experienced and creative designers are dedicated to bringing
                your vision to life. Choose from our flexible pricing plans that suits
                your needs.</p>
        </div>
        <Link href={"/packages"} className=' '>
            <button className='bg-[#FFD200] text-[#000] font-semibold hover:bg-[#d8bb3c] transition duration-300 ease-in-out w-[12rem] flex items-center justify-center text-base h-[2.5rem] rounded-full '>Explore Plan</button>
        </Link>
    </div>
</div>

</div>
        </div>
    )
}

export default HomePackage