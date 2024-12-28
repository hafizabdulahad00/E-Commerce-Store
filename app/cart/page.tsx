import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Performance from '../components/Performance/performance';
import { RiDeleteBin7Fill } from "react-icons/ri";

const cartPage = () => {
  return (
    <section>
         <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[196px] h-[133px] flex flex-col items-center justify-center'>
    <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium'>Cart</h1>
    </div>
    <div className='w-[145px] h-[24px] items-center justify-center flex gap-[6px]'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light'>Cart</Link>
    </div>
    </div>
    <div className='w-full h-[525px] flex justify-center items-center md:h-full'>
        <div className='w-[1240px] h-[390px] flex gap-[30px] md:flex-col md:h-full md:gap-[60px] md:py-5 sm:w-full sm:h-full'>
            <div className='w-[817px] h-[215px] md:w-full sm:w-full'>
                {/* First-box */}
                <div className='h-[55px] flex justify-around items-center gap-[30px] bg-[#F9F1E7] sm:w-full'>
                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>Product</h4>
                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>Price</h4>
                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>Quantity</h4>
                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>Subtotal</h4>
                </div>
                {/* second-box */}
                <div className='h-full flex justify-between items-center sm:gap-[20px] sm:px-5 md:px-3 sm:w-full sm:py-3 sm:flex-col'>
                    <div className='w-[108px] h-[105px] bg-[#FFF3E3] rounded-[10px] sm:h-full'>
                                <Image 
                                        src={'/sofa.png'}
                                        width={105}
                                        height={105}
                                        alt='sofa'/>
                                </div>
                                <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal sm:text-[12px]'>Asgaard sofa</h4>
                                <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal sm:text-[12px]'>Rs. 250,000.00</h4>
                                <div className='w-8 h-8 rounded-[5px] border-[1px] border-[#9F9F9F] flex items-center justify-center sm:w-4 sm:h-4'>
                                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>1</h4>
                                </div>
                                <h4 className='text-[16px] text-[#000000] Poppins font-normal sm:text-[12px]'>Rs. 250,000.00</h4>
                                <RiDeleteBin7Fill className='w-7 h-7 text-[#B88E2F] sm:w-4 sm:h-4' />
                </div>
            </div>
            <div className='w-[393px] h-[390px] flex flex-col py-3 gap-[20px] items-center bg-[#F9F1E7] md:self-center md:py-4 sm:w-full sm:mt-[70px]'>
            <h2 className='text-[32px] text-[#000000] Poppins font-semibold'>Cart Totals</h2>
            <div className='w-[80%] flex justify-around items-center h-[60px]'>
            <h4 className='text-[16px] text-[#000000] Poppins font-medium'>Subtotal</h4>
            <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>Rs. 250,000.00</h4>
            </div>
            <div className='w-[80%] flex justify-around items-center h-[60px]'>
            <h4 className='text-[16px] text-[#000000] Poppins font-medium'>Total</h4>
            <h4 className='text-[20px] text-[#B88E2F] Poppins font-medium'>Rs. 250,000.00</h4>
            </div>
            <Link href = "/checkout">
            <button className='w-[222px] h-[58.95px] border-[1px] border-[#000000] rounded-[15px] text-[12px] text-[#000000] Poppins'>Check Out</button>
            </Link>
            </div>
        </div>
    </div>
    <div className='flex pb-6'>
      <Performance/>
    </div>
    </section>
  )
}

export default cartPage