import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";





const product = () => {
  return (
   <section>
    {/* first */}
    <div className='w-full h-[100px] bg-[#F9F1E7] flex pl-[350px] gap-4 items-center md:p-0 md:justify-center'>
    <div className='flex h-full items-center gap-3'>
        <Link href = "/" className='text-[16px] text-[#9F9F9F] Poppins font-medium md:text-[14px]'>Home</Link>
            <IoIosArrowForward className='w-5 h-5 text-[#000000]' />
            </div>
        <div className='flex h-full items-center gap-3'>
        <Link href = "/shop" className='text-[16px] text-[#9F9F9F] Poppins font-medium md:text-[14px]'>Shop</Link>
            <IoIosArrowForward className='w-5 h-5 text-[#000000]' />
            </div>
            <div className='flex h-1/2 items-center gap-3 border-l border-[#9F9F9F] pl-5'>
       <h4 className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Asgaard sofa</h4>
            </div>
    </div>
    {/* Second */}
    <div className='w-full h-[820px] px-14 py-7 pl-[350px] flex gap-[50px] md:flex-col md:h-full md:p-0 md:items-center md:py-5'>
        {/* Image-box */}
        <div className='w-[553px] h-[500px] flex gap-6 sm:w-full sm:px-3 sm:gap-0'>
            <div className='w-[76px] h-[416px] flex flex-col gap-8 sm:w-full'>
                <div className='w-[76px] h-[80px] bg-[#F9F1E7] rounded-[5px]'>
                     <Image 
                                        src={'/sof1.png'}
                                        width={76}
                                        height={80}
                                        alt='Logo'/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#F9F1E7] rounded-[5px]'>
                     <Image 
                                        src={'/sof2.png'}
                                        width={76}
                                        height={80}
                                        alt='Logo'/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#F9F1E7] rounded-[5px]'>
                     <Image 
                                        src={'/sof4.png'}
                                        width={76}
                                        height={80}
                                        alt='Logo'/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#F9F1E7] rounded-[5px]'>
                     <Image 
                                        src={'/sof3.png'}
                                        width={76}
                                        height={80}
                                        alt='Logo'/>
                </div>
            </div>
            <div className='w-[481px] h-[500px] flex bg-[#F9F1E7] rounded-[5px] items-center justify-center sm:w-full'>
            <Image 
                                        src={'/largesof.png'}
                                        width={481}
                                        height={391}
                                        alt='Logo'/> 
            </div>
        </div>
        {/* content-box */}
        <div className='w-[606px] h-[730px] flex flex-col gap-[25px] sm:w-full sm:px-3'>
            <div>
        <h2 className='text-[42px] text-[#000000] Poppins font-medium md:text-[14px]'>Asgaard sofa</h2>
        <h4 className='text-[24px] text-[#9F9F9F] Poppins font-medium md:text-[14px]'>Rs. 250,000.00</h4>
        </div>
        <div className='flex h-fit items-center gap-3 sm:flex-col sm:items-start sm:w-full'>
              <Image 
                                    src={'/Star.png'}
                                    width={124}
                                    height={20}
                                    alt='sofa'/>
                                    <div className='w-[1px] h-full border border-[#9F9F9F] sm:hidden'></div>
                                    <h4 className='text-[13px] font-medium text-[#9F9F9F] Poppins'>5 Customer Review</h4>
              </div>
              <p className='text-[13px] font-medium text-[#000000] Poppins '>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                {/* size */}
                <div className='flex flex-col w-[123px] h-[63px] gap-3'>
                <h4 className='text-[14px] text-[#9F9F9F] Poppins font-medium md:text-[14px]'>Size</h4>
                <div className='flex gap-3'>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#B88E2F] text-[#FFFFFF] text-[13px] Poppins'>L</button>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] text-[#000000] text-[13px] Poppins'>XL</button>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] text-[#000000] text-[13px] Poppins'>XS</button>
                </div> 
                </div>
                 {/* color*/}
                 <div className='flex flex-col w-[123px] h-[63px] gap-3'>
                <h4 className='text-[14px] text-[#9F9F9F] Poppins font-medium md:text-[14px]'>Color</h4>
                <div className='flex gap-3'>
                    <button className='w-[30px] h-[30px] rounded-[50px] bg-[#816DFA] '></button>
                    <button className='w-[30px] h-[30px] rounded-[50px] bg-[#000000] '></button>
                    <button className='w-[30px] h-[30px] rounded-[50px] bg-[#B88E2F]'></button>
                </div> 
                </div >
                {/* button */}
                <div className='flex gap-[30px]'>
                <button className='w-[123px] h-[64px] rounded-[15px] border border-black text-[20px] Poppins flex items-center justify-between p-2 gap-3 text-[#000000]'><FaMinus className='w-2 h-2'/>1<FaPlus className='w-2 h-2' /></button>
                    <button className='w-[215px] h-[64px] rounded-[15px] border border-black text-[20px] Poppins text-[#000000]'>Add To Cart</button>
                    <button className='w-[215px] h-[64px] rounded-[15px] border border-black text-[20px] Poppins flex items-center justify-center gap-3 text-[#000000]'><FaPlus />Compare</button>
                    
                </div>
                <div className='h-[1px] border border-[#D9D9D9]'></div>
                <div className='flex w-[350px] h-full  gap-3'>
                    <div className='flex flex-col gap-2 sm:h-full'>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>SKU</h4>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>Category</h4>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>Tags</h4>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>Share</h4>
                    </div>
                    <div className='flex flex-col gap-2  sm:h-full'>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>: SS001</h4>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>: Sofas</h4>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins font-normal'>: Sofa, Chair, Home, Shop</h4>
                        <div className='flex gap-4'>
                        <FaFacebook className='w-5 h-5 text-[#000000]'/>
                        <FaLinkedin className='w-5 h-5 text-[#000000]'/>
                        <FaTwitterSquare className='w-5 h-5 rounded-[100%] text-[#000000]'/>
                        </div>
                    </div>
                </div>


        </div>
    </div>
    {/* third */}
    <div className='w-full h-[744px] flex flex-col items-center justify-center gap-[50px] border-t border-[#9F9F9F] md:px-4 md:py-5 md:gap-3 md:h-full'>
        <div className='w-[649px] h-[36px] flex gap-[36px] md:w-full md:justify-center md:h-full'>
            <h4 className='text-[24px] font-medium Poppins text-[#000000] sm:text-[16px]'>Description</h4>
            <h4 className='text-[24px] font-medium Poppins text-[#9F9F9F] sm:text-[16px]'>Additional Information</h4>
            <h4 className='text-[24px] font-medium Poppins text-[#9F9F9F] sm:text-[16px]'>Reviews [5]</h4>
        </div>
        {/* para */}
        <div className='w-[1026px] h-[174px] flex flex-col gap-[30px] md:w-full md:h-full'>
            <p className='text-[16px] Poppins text-[#9F9F9F] sm:text-[12px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='text-[16px] Poppins text-[#9F9F9F] sm:text-[12px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='w-[1239px] h-[348px] flex gap-[29px] justify-center md:w-full md:py-5 md:h-full'>
            <div className='w-[605px] bg-[#F9F1E7] h-full flex justify-center items-center'>
            <Image 
                                        src={'/yellowSofa.png'}
                                        width={481}
                                        height={391}
                                        alt='Logo'/> 
            </div>
            <div className='w-[605px] flex justify-center items-center bg-[#F9F1E7] h-full'>
            <Image 
                                        src={'/yellowSofa1.png'}
                                        width={481}
                                        height={391}
                                        alt='Logo'/> 
            </div>
        </div>
    </div>
    {/* fourth */}
    <div className='flex h-full w-full gap-[30px] py-[80px] border-t border-[#9F9F9F] flex-col justify-center items-center'>
    <h2 className='text-[36px] text-[#000000] leading-[48px] Poppins font-medium text-center'>Related Products</h2>
    <div className='w-full h-[446px] flex gap-8 items-center justify-center md:flex-col md:h-full'>
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
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
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
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
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

            {/* Box-3 */}
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
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
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

            {/* Box-4 */}
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
                        <button className='w-[202px] h-12 bg-[#FFFFFF] text-[16px] leading-6 text-[#B88E2F] font-semibold'>Add to cart</button>
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
        </div>
    <button className="w-[285px] h-12 bg-[#FFFFFF] text-[16px] leading-6 Poppins font-semibold text-[#B88E2F] border-[1px] border-[#B88E2f]">Show More</button>
    </div>
   </section>
  )
}

export default product