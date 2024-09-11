'use client'

import React, { useEffect, useState } from 'react'
import Logo from "@/assets/Logo.png"
import { IoMdSearch } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';

// import "./Header.css"

const Header = () => {

  const [searchBox, setSearchBox] = useState("nssBox");
  const [mobileNav, setMobileNav] = useState("nsmNav");
  const [scroll, setScroll] = useState(false);

  const [search, setSearch] = useState(false);
  const handleSurchButton = () => {
    setSearch(!search)
    setSearchBox(searchBox === "ssBox" ? "nssBox" : "ssBox");
  }

  const handleMenuBtn = () => {
    setMobileNav(mobileNav === "nsmNav" ? "smNav" : "nsmNav");
  }
  const handleMenuClick = () => {
    setMobileNav(mobileNav === "nsmNav" ? "smNav" : "nsmNav");
  }

  const [cross, setCross] = useState(false);

  const toggleSearch = () => {
    setCross(!cross)
  }

  const handleSearchCross = () => {
    setSearchBox("nssBox")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={` ${
          scroll ? " text-[#fff] bg-black shadow-lg" : "mt-3 text-[#fff] "
        } w-full top-0 fixed left-1/2 transform -translate-x-1/2 z-[100000] px-3 `}>
        <div className={` hidden md:flex z-50 h-[80px]     items-center justify-between w-full max-w-[1300px] mx-auto box-border transition-all duration-300 header`}>
          <div className='flex justify-center'>
            <Link href={'/'}><Image src={Logo} alt="" className='h-8 w-full object-cover ' /></Link>
          </div>
          <div className='hidden md:block'>
            <nav className='text-[#ffffff] flex items-center justify-center gap-16 box-border'>
              <Link
                href={"/services"}
                className={` duration-300 text-[12px] font-semibold transition navs`}
              >Services</Link>
              <Link
                href={"/about"}
                className={` duration-300 text-[12px] font-semibold transition navs`}
              // style={textStyle}
              >About Us</Link>
              <Link
                href={"/packages"}
                className={` duration-300 text-[12px] font-semibold transition navs`}
              >Packages</Link>
              <Link
                href={"/portfolio"}
                className={` duration-300 text-[12px] font-semibold transition navs`}
              >Our Work</Link>
              <Link
                href={"/contact"}
                className={` duration-300 text-[12px] font-semibold transition navs`}
              >Blog</Link>
            </nav>
          </div>
          <div className='flex gap-6 text-white text-2xl items-center'>
          {/* <button className='transition-all duration-300 ease-in-out' onClick={toggleSearch}>
              {
                cross === false ? <IoMdSearch className={`text-[#F3F3F3] text-xl object-cover transition-all duration-500 ease-in-out cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton} /> : <RxCross2 className='text-[#F3F3F3] transition-all duration-500 ease-in-out text-xl' onClick={handleSearchCross} />
              }
            </button> */}
            <Link href={'/'} className=' text-base bg-[#FFD200] px-5 py-2 rounded-full text-[#000] font-semibold '>Contact Us</Link>
            <HiBars2 onClick={handleMenuBtn} className='block md:hidden cursor-pointer' />
          </div>
        </div>
        {/* <div className={`fixed px-5 w-full h-[20rem] top-0 bg-black text-[#a9a8a8] z-30 transition-all duration-500 ${searchBox}`}>
          <div className='flex pl-[10%] md:pl-[20%] gap-2 items-center px-2 text-2xl pt-[6rem]'>
            <IoMdSearch className='text-xl  ' />
            <input type="text" placeholder='Search Brandioabm.com' className='bg-transparent text-[1.2rem] placeholder-[#8a8a8a] outline-none border-none' />
          </div>
        </div> */}
      </div>


      <div className={`bg-[rgba(0,0,0,0.8)] ${searchBox === "ssBox" ? "bg-[black]" : null} flex md:hidden left-0 px-5 fixed z-50 w-full h-[75px]  items-center justify-between box-border transition-all duration-300 header`}>
        <div className='flex justify-center   bottom-[-5rem]'>
          <Link href={"/"}><Image src={Logo} alt="" className='w-[6rem] h-full object-cover' /></Link>
        </div>
        <div>
          <HiBars2 onClick={handleMenuBtn} className='text-white text-4xl cursor-pointer' />
        </div>
        {/* <div>
        <button className='transition-all duration-300 ease-in-out' onClick={toggleSearch}>
              {
                cross === false ? <IoMdSearch className={`text-[#F3F3F3] text-xl object-cover transition-all duration-500 ease-in-out cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton} /> : <RxCross2 className='text-[#F3F3F3] transition-all duration-500 ease-in-out text-xl' onClick={handleSearchCross} />
              }
            </button>
        </div> */}
      </div>


      <div className={`fixed min-h-[100vh] w-full z-50 bg-black text-white top-0 left-0 ${mobileNav} transition-all duration-500`}>

        <div className='w-full flex items-center justify-between h-[69px] px-[7%] pt-6 '>
          <div className=''>
            <Link href={"/"}><Image src={Logo} alt="" className='w-[6rem] bottom-0 object-cover' /></Link>
          </div>

          <div className='text-white  text-4xl'>
            <RxCross2 onClick={handleMenuBtn} className='block md:hidden transition-all duration-300 cursor-pointer' />
          </div>
        </div>

        <div className='flex left-0 flex-col gap-7 pt-28 px-[7%] text-4xl font-semibold w-full h-full'>
          <Link
            href={"/"}
            onClick={handleMenuClick}
            className={``}
          >Services</Link>
          <Link
            href={"/about"}
            onClick={handleMenuClick}
            className={``}
          // style={textStyle}
          >About Us</Link>
          <Link
            href={"/packages"}
            onClick={handleMenuClick}
            className={``}
          >Packages</Link>
          <Link
            href={"/portfolio"}
            onClick={handleMenuClick}
            className={``}
          >Our Work</Link>
          <Link
            href={"/contact"}
            onClick={handleMenuClick}
            className={``}
          >Blog</Link>
        </div>
      </div>


    </>
  )
}

export default Header
