import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import ClientReview from '@/assets/ClientReview.png'
import Image from 'next/image';


function HfeedbackCard() {
  return (
    <div className=' bg-[#fff] py-[3%] px-5 rounded-2xl w-[25rem] '>
      <FaQuoteRight className=' text-[#C9010B] -ml-2 ' />
      <p className=' text-sm pt-6 pb-12 '>We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.</p>
      <div className=' flex items-center gap-3 '>
        <Image src={ClientReview}/>
        <div>
          <h4 className=' font-semibold '>Md Shahed</h4>
          <h4>Manager, Mircus</h4>
        </div>
      </div>
    </div>
  )
}

export default HfeedbackCard