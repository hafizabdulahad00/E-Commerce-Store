import React from "react";
import Image from "next/image";
import Product from "./components/Product/Product";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="w-full h-screen  bg-[url('/Hero.png')] bg-cover flex items-center justify-end px-14 md:justify-center md:p-0 sm:px-5 sm:h-full md:h-[80vh]">
      <div className="w-[643px] h-[443px] flex flex-col bg-[#FFF3E3] p-16 justify-center rounded-[10px] mr-[230px] md:m-0 sm:w-full">
        <h4 className="text-[#000000] text-[16px] Poppins font-semibold tracking-[3px] md:text-[14px] sm:text-[12px]">New Arrival</h4>
        <h1 className="text-[52px] leading-[64px]  font-bold Poppins text-[#B88E2F] w-[450px] md:text-[40px] sm:text-[30px] md:leading-[52px] sm:leading-[42px] md:w-[350px] xs:text-[25px] xs:leading-7 xs:w-[100%]">Discover Our New Collection</h1>
        <p className="text-[18px] text-[#333333] Poppins leading-6 font-medium md:text-[16px] sm:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="w-[222px] h-[74px] bg-[#B88E2F] text-[#FFFFFF] px-[72px] py-[25px] Poppins text-[16px] font-bold mt-16
         md:w-[200px] md:h-[55px] md:text-[14px] md:whitespace-nowrap md:px-[52px] md:py-[20px] transition-all ease-in duration-300 hover:bg-[#FFFFFF] hover:text-[#B88E2F]">Buy Now</button>
      </div>
      </div>
      {/* Browse The Range */}
      <div className="w-full h-[800px] flex items-center justify-center sm:h-full sm:py-[50px] md:h-full md:py-[40px]">
        <div className="w-[1183px] h-[685px] flex flex-col items-center gap-[50px] sm:h-full md:h-full md:gap-[30px] sm:w-full lg:w-full">
          {/* text-box */}
          <div className="w-[559px] h-[76.71px] flex flex-col items-center sm:w-full xs:h-full">
            <h2 className="text-[32px] text-[#333333] Poppins font-bold md:text-[24px] sm:text-[16px]">Browse The Range</h2>
            <p className="text-[20px] Poppins text-[#666666] md:text-[16px] sm:text-[14px] sm:w-1/2 sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Image-box */}
          <div className="w-[1145px] h-[550px] flex justify-center items-center gap-5 md:w-full sm:flex-col sm:w-full sm:h-full md:h-full lg:w-full">
            <div className="flex flex-col gap-5 h-full w-[381px] md:w-[30%] sm:w-full">
            <Image
                    src={'/Browse1.png'}
                    width={381}
                    height={480}
                    alt='Logo'/>
              <h4 className="text-[24px] text-[#333333] font-semibold Poppins text-center">Dining</h4>

            </div>
            <div className="flex flex-col gap-5 h-full w-[381px] md:w-[30%] sm:w-full">
            <Image 
                    src={'/Browse2.png'}
                    width={381}
                    height={480}
                    alt='Logo'/>
              <h4 className="text-[24px] text-[#333333] font-semibold Poppins text-center">Living</h4>

            </div>
            <div className="flex flex-col gap-5 h-full w-[381px] md:w-[30%] sm:w-full">
            <Image 
                    src={'/Browse3.png'}
                    width={381}
                    height={480}
                    alt='Logo'/>
              <h4 className="text-[24px] text-[#333333] font-semibold Poppins text-center">Bedroom</h4>

            </div>
          </div>
        </div>
      </div>
      {/* Product */}
      <div className="h-full w-full flex flex-col gap-5  items-center py-[50px] md:py-5">
      <h2 className='text-[40px] text-[#3A3A3A] leading-[48px] Poppins font-bold text-center xs:text-[25px]'>Our Products</h2>
        <Product/>
        <button className="w-[285px] h-12 bg-[#FFFFFF] text-[16px] leading-6 Poppins font-semibold text-[#B88E2F] border-[1px] border-[#B88E2f] transition-all ease-in duration-300 hover:text-[#FFFFFF] hover:bg-[#B88E2F]">Show More</button>
      </div>

      <div className="w-full h-[670px] bg-[#F9F1E7] flex justify-center items-center gap-[20px] md:flex-col md:h-full md:py-[50px] md:gap-[30px] md:px-3 lg:flex-col lg:h-full lg:py-[50px] lg:gap-[30px] lg:px-3">
        {/* text */}
        <div className="flex flex-col gap-[20px] w-[50%] md:w-full md:items-center lg:w-full lg:items-center lg:justify-center">
        <div className="flex flex-col gap-2 pl-[300px] md:p-0 md:items-center lg:p-0 lg:items-center">
          <h2 className="text-[40px] leading-[48px] text-[#3A3A3A] font-bold Poppins md:text-center xs:text-[25px] xs:leading-8">50+ Beautiful rooms 
          inspiration</h2>
          <p className="text-[16px] w-[75%] leading-6 text-[#696969] Poppins font-medium md:text-center lg:text-center">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        </div>
        <button className="text-[16px] leading-6 text-[#FFFFFF] Poppins font-semibold w-[176px] h-12 bg-[#B88E2F] ml-[300px] md:m-0 transition-all ease-in duration-300 hover:text-[#B88E2F] hover:bg-[#FFFFFF] lg:m-0">Explore More</button>
        </div>
        <div className="w-[70%] h-[582px] flex gap-[20px] md:w-full ">
          {/* image-content */}
          <div className="h-full w-[404px] flex items-end  bg-[url('/home2.png')] bg-cover bg-no-repeat bg-white p-5">
            <div className="flex w-[217px] h-[130px] bg-[#FFFFFF] flex-col justify-center items-center gap-3">
              <div className="w-[142px] h-6 flex gap-2 items-center">
              <p className="text-[16px]  leading-6 text-[#616161] Poppins font-medium">01</p>
              <div className="w-[27px] border border-[#616161]"></div>
              <p className="text-[16px] leading-6 text-[#616161] Poppins font-medium">Bed Room</p>
              </div>
              <h2 className="text-[28px] font-semibold text-[#3A3A3A] Poppins leading-[36px]">Inner Peace</h2>
            </div>
            <div className="h-12 w-12 bg-[#B88E2F] flex items-center justify-center"><FaArrowRightLong /></div>
          </div>
          <div className="h-full flex flex-col overflow-hidden gap-7 sm:hidden">
            <div className="flex gap-[20px] items-center justify-center">
            <Image
                    src={'/image1.png'}
                    width={381}
                    height={480}
                    alt='Logo'/>
                    <div className="bg-[#FFFFFF] w-12 h-12 flex rounded-[50%] absolute items-center justify-center"><IoIosArrowForward className="text-[#616161]" /></div>
                     <Image
                    src={'/image2.png'}
                    width={381}
                    height={480}
                    alt='Logo'/>
            </div>
            <div className="flex gap-3">
            <FaRegCircleDot className="text-[#616161]"/>
            <FaRegCircleDot className="text-[#616161]" />
            <FaRegCircleDot className="text-[#616161]"/>
            <FaRegCircleDot className="text-[#616161]"/>
            </div>
          </div>
          </div>
      </div>

      {/* Slider-animation*/}
      <div className="w-full h-full flex flex-col justify-center items-center gap-20 py-5 md:gap-0 lg:overflow-hidden">
        {/* text */}
        <div className="w-[356px] h-[86px] flex flex-col gap-[8px]  absolute top-[418%] md:static md:w-full md:h-full md:pt-5 lg:static lg:h-full">
          <h4 className="text-[20px] leading-[30px] Poppins font-semi-bold text-center text-[#616161]">Share your setup with</h4>
          <h2  className="text-[40px] leading-[48px] Poppins font-bold text-center text-[#3A3A3A] xs:text-[20px]">#FuniroFurniture</h2>
        </div>
        {/* Image-box */}
        <div className="flex justify-center w-full items-center pt-12 md:flex-col lg:h-full lg:p-0">
        {/* First Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 w-[30%] h-auto p-4 ml-[-150px] md:w-full md:m-0 md:gap-x-4 md:gap-y-6 md:p-2 sm:grid-cols-1 sm:gap-y-0 md:h-full md:justify-center md:items-center lg:grid-cols-1">
  {/* Box 1 */}
  <div className="h-[382px] w-[274px] bg-[url('/Animated1.png')] flex items-center justify-center mt-[-70px] md:mt-5 md:h-[200px] md:w-full sm:h-[200px] sm:mt-0 md:bg-no-repeat bg-cover lg:h-[200px]">
  </div>

  {/*  Box 2  */}
  <div className="h-[312px] w-[451px] bg-[url('/Animated2.png')] flex items-center justify-center md:h-[200px] md:w-full sm:h-[200px] bg-cover lg:h-[200px]">
  </div>

  {/* Box 3  */}
  <div className="h-[323px] w-[381px] bg-[url('/Animated3.png')] flex items-center justify-center mt-[-8px] md:h-[200px] md:w-full sm:h-[200px] md:bg-no-repeat bg-cover lg:h-[200px]">
  </div>

  {/*  Box 4  */}
  <div className="h-[242px] w-[344px] bg-[url('/Animated4.png')] flex items-center justify-center col-start-2 ml-[108px] mt-[-8px] md:ml-0 md:h-[200px] md:w-full sm:h-[200px] md:bg-no-repeat bg-cover lg:h-[200px]">
  </div>
        </div>
        {/* Second-box */}
        <div className="flex justify-end w-[500px] md:w-full md:justify-center md:h-full">
        <div className="w-[295px] h-[392px]  bg-[url('/Animated5.png')] flex "></div>
        </div>
        {/* Third-Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-2 w-[30%] h-auto p-4 mt-5 md:w-full md:m-0 md:gap-x-4 md:gap-y-4 md:p-2 sm:grid-cols-1 sm:gap-y-6 md:h-full lg:grid-cols-1 ">
  {/* Box 1 */}
  <div className="h-[348px] w-[290px] bg-[url('/Animated6.png')] flex items-center justify-center mt-[85px]  md:mt-5 md:h-[200px] md:w-full sm:h-[200px] sm:mt-0 bg-no-repeat bg-cover lg:h-[200px]">
  </div>

  {/*  Box 2  */}
  <div className="h-[433px] w-[425px] bg-[url('/Animated7.png')] flex items-center justify-center md:h-[200px] md:w-full sm:h-[200px] bg-no-repeat bg-cover lg:h-[200px]">
  </div>

  {/* Box 3  */}
  <div className="h-[242px] w-[178px] bg-[url('/Animated8.png')] flex items-center justify-center md:h-[200px] md:w-full sm:h-[200px] bg-no-repeat bg-cover lg:h-[200px]">
  </div>

  {/*  Box 4  */}
  <div className="h-[196px] w-[258px] bg-[url('/Animated9.png')] flex items-center justify-center md:ml-0 md:h-[200px] md:w-full sm:h-[200px] bg-no-repeat bg-cover lg:h-[200px]">
  </div>
        </div>
        </div>
      </div>
    </section>
  );
}
