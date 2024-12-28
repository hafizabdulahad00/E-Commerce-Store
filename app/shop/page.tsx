import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Performance from '../components/Performance/performance';
import Product from '../components/Product/Product';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Image from 'next/image';
import { BsViewList } from "react-icons/bs";


const shopPage = () => {
  return (
   <section>
    <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[124px] h-[72px] flex flex-col'>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium'>Shop</h1>
    </div>
    <div className='w-[121px] h-[24px] flex gap-[6px]'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light'>Shop</Link>
    </div>
    </div>
    <div className='h-[100px] w-full bg-[#F9F1E7] flex justify-between md:flex-col md:gap-[20px] md:py-5 md:h-full sm:px-2'>
      <div className='flex w-1/2 justify-center items-center gap-5 md:w-full sm:w-full'>
        <HiOutlineAdjustmentsHorizontal className='text-[#000000]'/>
        <h4 className='text-[20px] text-[#000000] Poppins sm:text-[16px]'>Filter</h4>
           <Image 
                            src={'/dots.png'}
                            width={16}
                            height={16}
                            alt='sofa'/>
                            <BsViewList className='text-[#000000]'/>
                            <div className='w-[37px] border border-[#9F9F9F] rotate-90'></div>
                            <h2 className='text-[#000000] Poppins text-[16px] sm:text-[12px]'>Showing 1–16 of 32 results</h2>
        </div>
      <div className='flex w-1/2 justify-center items-center gap-5 md:w-full sm:w-full'>
      <h4 className='text-[20px] text-[#000000] Poppins sm:text-[16px]'>Show</h4>
      <div className='w-[55px] h-[55px] bg-[#FFFFFF] items-center justify-center flex'>
          <h4 className='text-[20px] text-[#9F9F9F] Poppins sm:text-[16px]'>16</h4>
      </div>
      <h4 className='text-[20px] text-[#000000] Poppins sm:text-[16px]'>Short by</h4>
      <div className='w-[188px] h-[55px] bg-[#FFFFFF] flex items-center pl-4'>
          <h4 className='text-[20px] text-[#9F9F9F] Poppins sm:text-[16px]'>Default</h4>
      </div>
      </div>
    </div>
    <div className='flex flex-col items-center w-full h-full pb-[50px] sm:py-[20px]'>
      <Product/>
      <Product/>
       {/* pagination */}
       <div className='w-[392px] h-[60px] flex gap-[38px] sm:w-full sm:items-center sm:justify-center'>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px] sm:w-7 sm:h-7 '>1</button>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px] sm:w-7 sm:h-7'>2</button>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px] sm:w-7 sm:h-7'>3</button>
        <button className='w-[98px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px] sm:w-[60px] sm:h-7'>Next</button>
      </div>
    </div>
  <Performance/>
   </section>
  )
}

export default shopPage