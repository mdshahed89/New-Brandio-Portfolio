import React from 'react';
import HfaqImg from '@/assets/HfeedbackImg.png';
import Image from 'next/image';
import HfeedbackCard from './HfeedbackCard';

function Hfeedback() {
  return (
    <div className="relative w-full h-[40rem]">
      {/* Background Image */}
      <Image src={HfaqImg} className="object-cover w-full h-full" alt="Background Image" />
      
      {/* Scrollable Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full overflow-x-auto flex space-x-4 px-4 py-6 scrollbar-hide">
          <div className="flex gap-7 mx-[25%]  flex-nowrap">
            <HfeedbackCard className="shrink-0 w-64" />
            <HfeedbackCard className="shrink-0 w-64" />
            <HfeedbackCard className="shrink-0 w-64" />
            <HfeedbackCard className="shrink-0 w-64" />
            <HfeedbackCard className="shrink-0 w-64" />
            {/* <HfeedbackCard className="shrink-0 w-64" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hfeedback;
