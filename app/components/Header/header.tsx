"use client"; 

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <section className='w-full h-[100px] bg-[#FFFFFF] flex justify-center items-center sm:h-full sm:py-5 sm:px-3'>
    <div className='w-[1286px] h-[41px] flex justify-between items-center md:w-full sm:h-full sm:gap-[15px]'>
        {/* logo */}
        <div className='w-[185px] h-full flex justify-center items-center md:w-[30%] sm:w-full'>
        <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
                    <h1 className='text-[34px] Mont font-bold text-[#000000] md:text-[28px] sm:text-[20px]'>Furniro</h1>
        </div>
        {/* navigation */}
        <div className='w-[430px] h-full flex justify-between items-center md:w-[40%] sm:hidden'>
        <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Home</Link>
        <Link href = "/shop" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Shop</Link>
        <Link href = "/blog" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Blog</Link>
        <Link href = "/contact" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Contact</Link>
        </div>
        <div className="relative hidden sm:flex sm:items-center sm:justify-center sm:w-[48px] sm:h-[48px] sm:cursor-pointer">
  {/* Hamburger Button */}
  <div
    className="sm:w-[48px] sm:h-[48px] sm:flex sm:p-3 sm:justify-end"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <GiHamburgerMenu className="h-6 w-6 text-black" />
  </div>

  {/* Dropdown Menu */}
  {isMenuOpen && (
    <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md">
      <ul className="flex flex-col text-black">
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )}
</div>

        {/* icons */}
        <div className='w-[250px] h-full flex justify-between items-center md:w-[30%] md:justify-center md:gap-[15px]'>
        <Link href = "/" className='text-[#000000] text-[28px] md:text-[20px]'><TbUserExclamation /></Link>
        <Link href = "/" className='text-[#000000] text-[28px] md:text-[20px]'> <FiSearch  /></Link>
        <Link href = "/" className='text-[#000000] text-[28px] md:text-[20px]'> <FaRegHeart /></Link>
        <div onClick={toggleCart} className='text-[#000000] text-[28px] cursor-pointer md:text-[20px]'>
            <HiOutlineShoppingCart />
          </div>
        </div>
    </div>
    {/* Cart Container */}
    {isCartOpen && (
        <div className='absolute top-[0px] right-0 w-[417px] h-[746px] bg-white shadow-lg  border flex flex-col items-center gap-[20px] sm:w-full'>
          {/* cart */}
          <div className='w-[350px] h-[80px] flex items-center justify-between border-b-[1px] border-b-[#D9D9D9] sm:w-full'>
            <h2 className='text-[24px] Poppins text-[#000000] font-semibold'>Shopping Cart</h2>
            <IoMdLock className='w-5 h-5 text-[#9F9F9F] cursor-pointer' onClick={toggleCart} />
          </div>
          {/* sofa-box */}
         <div className='w-[350px] h-[334px] flex flex-col gap-5 sm:w-full'>
          {/* sofa1 */}
          <div className='w-full h-[105px] flex items-center gap-5 '>
            {/* image */}
            <div className='w-[108px] h-[105px] bg-[#FFF3E3] rounded-[10px]'>
            <Image 
                    src={'/sofa.png'}
                    width={105}
                    height={105}
                    alt='sofa'/>
            </div>
            <div className='w-[130px] h-[56px]'>
              <h4 className='text-[16px] text-[#000000] Poppins font-medium'>Asgaard sofa</h4>
              <div className='w-full h-6 flex items-center gap-[15px] whitespace-nowrap'>
              <h4 className='text-[16px] text-[#000000] Poppins font-light'>1</h4>
              <h4 className='text-[12px] text-[#000000] Poppins font-light'>X</h4>
              <h4 className='text-[12px] text-[#B88E2F] Poppins font-medium'>Rs. 250,000.00</h4> 
              </div>
            </div>
            <MdCancel className='text-[#9F9F9F]' />
          </div>
           {/* sofa2 */}
           <div className='w-full h-[105px] flex items-center gap-5 '>
            {/* image */}
            <div className='w-[108px] h-[105px] bg-[#9F9F9F] rounded-[10px]'>
            <Image 
                    src={'/sofa2.png'}
                    width={105}
                    height={105}
                    alt='sofa'/>
            </div>
            <div className='w-[130px] h-[56px]'>
              <h4 className='text-[16px] text-[#000000] Poppins font-medium'>Casaliving Wood</h4>
              <div className='w-full h-6 flex items-center gap-[15px] whitespace-nowrap'>
              <h4 className='text-[16px] text-[#000000] Poppins font-light'>1</h4>
              <h4 className='text-[12px] text-[#000000] Poppins font-light'>X</h4>
              <h4 className='text-[12px] text-[#B88E2F] Poppins font-medium'>Rs. 270,000.00</h4> 
              </div>
            </div>
            <MdCancel className='text-[#9F9F9F]' />
          </div>
         </div>
         <div className='h-[200px] w-[350px] flex justify-between items-end sm:w-full sm:px-3'>
          <h4 className='text-[16px] text-[#000000] Poppins font-normal'>Subtotal</h4>
          <h4 className='text-[16px] text-[#B88E2F] Poppins font-normal'>Rs. 520,000.00</h4>
         </div>
         {/* button-box */}
         <div className='w-full h-[80px] flex items-center justify-center border-t-[1px] border-t-[#D9D9D9] sm:w-full'>
           <div className='w-[368px] h-[30px] flex justify-center gap-[14px]'>
            <Link href = "/cart">
            <button className='w-[87px] h-[30px] px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] text-[12px] text-[#000000] Poppins sm:w-[60px] sm:flex sm:justify-center'>Cart</button>
            </Link>
            <Link href = "/checkout">
            <button className='w-[118px] h-[30px] px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] text-[12px] text-[#000000] Poppins sm:w-[80px] sm:flex sm:justify-center'>Checkout</button>
            </Link>
            <Link href = "/productComparison">
            <button className='w-[135px] h-[30px] px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] text-[12px] text-[#000000] Poppins sm:w-[100px] sm:flex sm:justify-center'>Comparison</button>
            </Link>
           </div>
          </div>
        </div>
    )}
   </section>
  );
};

export default Header