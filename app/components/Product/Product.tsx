import React from 'react'
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

const Product = () => {
  return (
    <div className='w-[1236px] h-[1084px] flex flex-col justify-center gap-8 md:w-full md:h-full'>
       

        {/* first-Image-Container */}
        <div className='w-full h-[446px] flex gap-8 items-center md:flex-col md:h-full'>
            {/* Box1 */}
            {/* main-box */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer '>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product1.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#E97171] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>-30%</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Syltherine</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Stylish cafe chair</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap ml-4 mt-2'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 2.500.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 3.500.000</h4>
                </div>
            </div>

                {/* hover-box */}
             
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'> 
                    <Link href = "/cart">          
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-2 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product2.png')] bg-cover flex justify-end pr-4 pt-4">  
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Leviosa</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Stylish cafe chair</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2
                ml-4'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 2.500.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 3.500.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                           
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-3 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product3.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#E97171] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>-50%</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Lolito</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Luxury big sofa</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2 ml-4'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 7.000.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 14.000.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-4 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product4.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#2EC1AC] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>New</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[224px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Respira</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Outdoor bar table and stool</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2 ml-3'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 500.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 14.000.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>

        {/* Second-Image-Container */}
        <div className='w-full h-[446px] flex gap-8 items-center md:h-full md:flex-col md:py-4'>
            {/* Box1 */}
            {/* main-box */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product5.png')] bg-cover flex justify-end pr-4 pt-4"> 
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2  ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Grifo</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Night lamp</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2 ml-4'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 1.500.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 3.500.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-2 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product6.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#2EC1AC] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>New</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Muggo</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Small mug</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap ml-2 mt-2'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 150.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 3.500.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-3 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product7.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#E97171] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>-50%</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[138px] h-[61px] flex flex-col gap-2  ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Pingky</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Cute bed set</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2 ml-5'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 7.000.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 14.000.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>

            {/* Box-4 */}
            <Link href = "/product">
            <div className='w-[285px] h-[446px] flex flex-col relative overflow-hidden cursor-pointer'>
                {/* Image */}
            <div className="w-full h-[301px] bg-[url('/Product8.png')] bg-cover flex justify-end pr-4 pt-4">
            <div className='bg-[#2EC1AC] h-12 w-12 rounded-full flex items-center justify-center'>
                <p className='text-[16px] leading-6 Poppins text-[#FFFFFF] font-medium'>New</p>
                </div>   
            </div>
            {/* description */}
            <div className='w-full h-[145px] flex flex-col bg-[#F4F5F7] pt-4'>
                {/* text */}
                <div className='w-[168px] h-[61px] flex flex-col gap-2 ml-4'>
                    <h4 className='text-[24px] leading-[28.8px] text-[#3A3A3A] Poppins font-semibold'>Potty</h4>
                    <p className='text-[16px] leading-6 Poppins font-medium text-[#898989]'>Minimalist flower pot</p>
                </div>
                {/* price */}
                <div className='w-[249px] h-[30px] flex items-center justify-center gap-[16px] whitespace-nowrap mt-2 ml-3'>
                    <h4 className='text-[20px] Poppins font-semibold leading-[30px] text-[#3A3A3A]'>Rp 500.000</h4>
                    <h4 className='text-[16px] leading-6 text-[#B0B0B0] Poppins line-through'>Rp 14.000.000</h4>
                </div>
            </div>
                {/* hover-box */}
                <div className='w-full h-full bg-[#3A3A3A] absolute opacity-0 hover:opacity-75 items-center flex flex-col justify-center transition-opacity duration-300'>
                    <div className='w-[252px] h-[96px] flex flex-col gap-6 items-center justify-center'>
                    <Link href = "/cart"> 
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
                        </Link>
                        <div className='w-full h-6 flex gap-5 items-center'>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <IoMdShare className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Share</h4>
                            </div>
                            <div className='w-[96px] h-full flex gap-[2px] justify-center items-center'>
                            <MdCompareArrows  className='w-4 h-4'/>
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Compare</h4>
                            </div>
                            <div className='w-[66px] h-full flex gap-[2px] justify-center items-center'>
                            <FaRegHeart className='w-4 h-4' />
                                <h4 className='text-[16px] leading-6 Poppins font-semibold text-[#FFFFFF]'>Like</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>      
    </div>
    
  )
}

export default Product