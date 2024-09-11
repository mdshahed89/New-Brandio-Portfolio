import Logo from "@/assets/Logo.png"
import Image from "next/image";



function Footer() {
  return (
    <div className=" bg-[#1B1714]  pt-10  ">
      <div className=" max-w-[1300px] mx-auto  px-3 mb-10">

        <div className="  grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div className="  ">
        <div>
          <Image src={Logo} />
          <p className=" text-sm md:text-base text-[#ffffff] mt-5 ">An Experience Design Company focusing on building functional, simple, human-centered digital products for future.</p>
        </div>
        <div className=" flex items-center gap-4 mt-12 ">
          <button className=" bg-[#FFD200] text-[#000] px-8 py-2 rounded-full text-sm font-semibold ">Contact Us</button>
        </div>
        </div>
        
        <div className=" flex flex-col items-end sm:items-center gap-3 text-[#ffffff] ">
          <div className=" text-left flex flex-col gap-3  ">
          <h3 className=" mb-5 font-semibold text-sm md:text-base ">Services</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Branding</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">UI/UX Design</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Website Development</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Mobile Application</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Digital Marketing</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Monthly Design Service</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">CMS Website Development</h3>
          </div>
        </div>

        <div className=" flex flex-col items-start sm:mt-0 mt-5 sm:items-center gap-3 text-[#ffffff] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-sm md:text-base  ">Quick Links</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Home</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">About us</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Portfolio</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Career</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Contact</h3>
          </div>
        </div>
        
        <div className=" flex flex-col items-center md:items-end sm:mt-0 mt-5 gap-3 text-[#ffffff] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-sm md:text-base ">Social Media Link</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Facebook</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">LinkedIn</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Pinterest</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Dribble</h3>
          </div>
        </div>
        </div>

        

      </div>
      <div className=" bg-[#1B1714] py-4  text-[#fff] text-sm text-center border-t border-[#9b9b9b] ">
      
      <p className=" ">Copyright 2024 Brandio  |  All rights reserved.</p>
          
      </div>
    </div>
  );
}

export default Footer;
