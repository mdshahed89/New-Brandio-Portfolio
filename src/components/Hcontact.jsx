import React from 'react'
import HcontactImg from "@/assets/HcontactImg.png"
import Image from 'next/image'

function Hcontact() {
  return (
    <div>
        <div className=' w-full h-[40rem] relative  '>
            <Image src={HcontactImg} className=' w-full h-full object-cover '/>
            <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center '>
                <div className=' max-w-[1100px] w-full mx-auto flex items-center justify-center '>
                <div className=' w-[50%] text-left   '>
                  <h3 className='  text-[3rem] leading-tight font-semibold' >Have a Project </h3>
                  <h3 className='  text-[3rem] leading-tight font-semibold' >Idea? </h3>
                </div>
                <div className=' w-[50%] bg-[#fff] px-[5%] pt-[7%] pb-[3%] rounded-2xl flex flex-col gap-4 '>
                  <div className=' flex flex-col  gap-1 '>
                    <label className=' font-semibold ' htmlFor="">Full Name</label>
                    <input className=' outline-none w-full py-1 border-b border-[#000] ' type="text" placeholder='Ex. James Copper' />
                  </div>
                  <div className=' flex gap-[7%] '>
                    <div className=' flex flex-col gap-1 flex-1 '>
                      <label className=' font-semibold ' htmlFor="">Company Name</label>
                      <input className=' outline-none w-full py-1 border-b border-[#000] ' type="text" placeholder='Ex. Tesla' />
                    </div>
                    <div className=' flex flex-col gap-1 flex-1 '>
                      <label className=' font-semibold ' htmlFor="">Email*</label>
                      <input className=' outline-none w-full py-1 border-b border-[#000] ' type="text" placeholder='You@gmail.com' />
                    </div>
                  </div>
                  <div className=' flex gap-[7%] '>
                    <div className=' flex flex-col gap-1 flex-1  '>
                      <label className=' font-semibold ' htmlFor="">Service Required*</label>
                      <select className=' outline-none w-full py-1 border-b border-[#000] ' name="" id="">
                        <option value="">Select Your Service</option>
                      </select>
                    </div>
                    <div className=' flex flex-col gap-1 flex-1 '>
                      <label className=' font-semibold ' htmlFor="">Project Budget*</label>
                      <select className=' outline-none w-full py-1 border-b border-[#000] ' name="" id="">
                        <option value="">Select Your Range</option>
                      </select>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-1  '>
                    <label className=' font-semibold ' htmlFor="">Project Details*</label>
                    <textarea className=' outline-none w-full py-1 border-b border-[#000] ' placeholder='Tell us more about your idea' />
                  </div>
                  <div className=' flex items-center justify-center mt-16 '>
                    <button className=' text-[#fff] bg-[#D71A21] px-20 py-2 rounded-md  '>Send Inquiry</button>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hcontact