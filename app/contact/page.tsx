import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { PiMapPinFill } from "react-icons/pi";
import Performance from '../components/Performance/performance';
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const contactPage = () => {
  return (
    <section>
    <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[196px] h-[133px] flex flex-col items-center justify-center'>
    <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium'>Contact</h1>
    </div>
    <div className='w-[145px] h-[24px] flex gap-[6px]'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light'>Contact</Link>
    </div>
    </div>
    {/* Contact-Section */}
    <div className='w-full h-[1140px] flex flex-col items-center pt-[100px] md:h-full'>
      <h2 className='text-[36px] text-[#000000] Poppins font-semibold text-center sm:text-[25px]'>Get In Touch With Us</h2>
      <p className='text-[16px] leading-6 text-[#9F9F9F] text-center w-[644px] sm:text-[12px] sm:w-[70%]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <div className='w-[1058px] h-[900px] flex gap-[30px] justify-center items-center md:flex-col md:h-full md:gap-[10px] sm:w-full'>
        {/* Address-box */}
        <div className='w-[393px] h-[537px] flex flex-col justify-center items-center md:h-full py-[30px] sm:w-full sm:gap-[20px]' >
          <div className='w-full h-[179px] flex sm:flex-col sm:items-center sm:justify-center'>
            {/* icon */}
            <div className='w-[30%] flex justify-end p-5 sm:w-full sm:justify-center'>
            <PiMapPinFill className='text-[#000000] w-[30px] h-[30px]'/>
            </div>
            {/* text */}
            <div className='flex flex-col w-[70%] p-4 sm:w-full sm:items-center'>
          <h4 className='text-[24px] text-[#000000] font-medium Poppins'>Address</h4>
          <p className='text-[16px] leading-6 text-[#000000] w-[212px] sm:text-center'>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          </div>
          <div className='w-full h-[179px] flex sm:flex-col sm:items-center sm:justify-center'>
              {/* icon */}
              <div className='w-[30%] flex justify-end p-5 sm:w-full sm:justify-center'>
            <FaPhone className='text-[#000000] w-[30px] h-[30px]'/>
            </div>
            {/* text */}
            <div className='flex flex-col w-[70%] p-4 sm:w-full sm:items-center'>
          <h4 className='text-[24px] text-[#000000] font-medium Poppins'>Phone</h4>
          <p className='text-[16px] leading-6 text-[#000000] w-[212px] sm:text-center'>Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789</p>
          </div>
          </div>
          <div className='w-full h-[179px] flex sm:flex-col sm:items-center sm:justify-center'>
              {/* icon */}
              <div className='w-[30%] flex justify-end p-5 sm:w-full sm:justify-center'>
            <FaClock className='text-[#000000] w-[30px] h-[30px]'/>
            </div>
             {/* text */}
             <div className='flex flex-col w-[70%] p-4  sm:w-full sm:items-center '>
          <h4 className='text-[24px] text-[#000000] font-medium Poppins'>Working Time</h4>
          <p className='text-[16px] leading-6 text-[#000000] w-[212px] sm:text-center'>Monday-Friday: 9:00 - 22:00
          Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          </div>
        </div>
        {/* form-box */}
        <div className='w-[635px] h-[923px] flex items-end justify-center md:h-full sm:w-[95%]'>
          <form action="#" className='w-[531px] h-[741px] flex flex-col gap-5 sm:items-center sm:justify-center sm:w-full sm:px-3'>
            <label htmlFor="name" className='text-[#000000] Poppins text-[16px]'>Your name</label>
            <input type="text" name="name" id="name" placeholder='Abc' className='w-[526.75px] h-[75px] rounded-[10px] placeholder:text-[#9F9F9F] placeholder:Poppins placeholder:text-[16px] border-[1px] border-[#9F9F9F] placeholder:px-5 sm:w-full'/>
            <label htmlFor="email" className='text-[#000000] Poppins text-[16px]'>Email address</label>
            <input type="email" name="email" id="email" placeholder='Abc@def.com' className='w-[526.75px] h-[75px] rounded-[10px] placeholder:text-[#9F9F9F] placeholder:Poppins placeholder:text-[16px]  border-[1px] border-[#9F9F9F] placeholder:px-5 sm:w-full'/>
            <label htmlFor="subject" className='text-[#000000] Poppins text-[16px]'>Subject</label>
            <input type="text" name="subject" id="subject" placeholder='This is an optional' className='w-[526.75px] h-[75px] rounded-[10px] placeholder:text-[#9F9F9F] placeholder:Poppins placeholder:text-[16px]  border-[1px] border-[#9F9F9F] placeholder:px-5 sm:w-full'/>
            <label htmlFor="message" className='text-[#000000] Poppins text-[16px]'>Message</label>
            <textarea name="message" id="message" placeholder='Message Hi! i’d like to ask about' className='w-[526.75px] h-[120px] rounded-[10px] placeholder:text-[#9F9F9F] placeholder:Poppins placeholder:text-[16px]  border-[1px] border-[#9F9F9F] placeholder:p-5 sm:w-full'></textarea>
            <input type="submit" value="Submit" className='w-[227px] h-[55px] rounded-[5px] cursor-pointer bg-[#B88E2F] text-[16px] Poppins text-[#ffffff] md:self-center'/>
          </form>
        </div>
      </div>
    </div>



    <div className='flex pb-6'>
      <Performance/>
    </div>
   </section>
  )
}

export default contactPage