import React from 'react'
import HomePortfolio1 from "@/assets/HomePortfolio1.png"
import HomePortfolio2 from "@/assets/HomePortfolio2.png"
import HomePortfolio3 from "@/assets/HomePortfolio3.png"
import HomePortfolio4 from "@/assets/HomePortfolio4.png"
import HomePortfolio5 from "@/assets/HomePortfolio5.png"
import HomePortfolio6 from "@/assets/HomePortfolio6.png"
import Image from 'next/image'
import Link from 'next/link'


const HomePortfolio = () => {
    return (
        <div className=' bg-[#1B1714] '>
            <div className=' max-w-[1400px] mx-auto text-[#fff] py-10 '>
            <div className=' rounded-lg py-7 '>
                {/* <Fade direction='down'> */}
                <h3 className=' text-center font-bold text-3xl '>Portfolio at a Glance</h3>
                {/* </Fade> */}
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-0 place-items-center py-5 px-3 md:px-[5rem] lg:px-[10rem] xl:px-[15rem] '>
                    <div>
                        <Image src={HomePortfolio1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <Image src={HomePortfolio2} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <Image src={HomePortfolio3} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <Image src={HomePortfolio4} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <Image src={HomePortfolio5} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <Image src={HomePortfolio6} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <Link href={"/portfolio"} ><button className='w-[14rem] h-[2.6rem] hover:bg-[#b69e33] font-semibold transition duration-300 ease-in-out bg-[#FFD200] text-[#1B1714] text-base rounded-full '>Show More</button></Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePortfolio