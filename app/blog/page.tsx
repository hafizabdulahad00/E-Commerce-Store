import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Performance from '../components/Performance/performance';

 const blogPage = () => {
  return (
    <section>
      {/* hero-section */}
    <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[107px] h-[133px] flex flex-col items-center justify-center'>
    <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium'>Blog</h1>
    </div>
    <div className='w-[115px] h-[24px] flex gap-[6px]'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light'>Blog</Link>
    </div>
    </div>
    {/* blog-box */}
    <div className='flex flex-col w-full h-full items-center py-[50px]'>
    <div className='w-full h-full flex justify-center py-[100px] px-[50px] md:flex-col md:items-center md:gap-[30px]'>
      {/* blog-post */}
      <div className='w-[70%] flex flex-col items-center gap-[54px] md:w-full md:h-full'>
        {/* box1 */}
        <div className='w-[820px] h-[794px] flex flex-col gap-5 md:w-full md:h-full'>
        <Image 
                    src={'/blog1.png'}
                    width={817}
                    height={500}
                    alt='Logo'/>
                    {/* icon-box */}
                    <div className='w-[349px] h-[24px] flex gap-[35px] md:flex-wrap md:w-full md:h-full'>
                         {/* box1 */}
                      <div className='flex gap-[11px] w-[80px]'>
                      <FaUser className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Admin</h4>
                      </div>
                       {/* box2 */}
                       <div className='flex gap-[11px] w-[121px]'>
                      <FaCalendar className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>14 Oct 2022</h4>
                      </div>
                       {/* box3 */}
                       <div className='flex gap-[11px] w-[78px]'>
                      <FaTag className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Wood</h4>
                      </div>
                    </div>
                    <h1 className='text-[30px] font-medium Poppins text-[#000000] md:text-[24px] sm:text-[16px]'>Going all-in with millennial design</h1>
                    <p className='text-[15px] Poppins text-[#9F9F9F] w-[800px] md:text-[12px] md:w-1/2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                    </p>
                    <button className='w-[89px] h-[36px] border-b-[1px] border-[#000000] text-[16px] leading-6 Poppins text-[#000000]'>Read more</button>
        </div>
         {/* box2 */}
         <div className='w-[820px] h-[794px] flex flex-col gap-5 md:w-full md:h-full'>
        <Image 
                    src={'/blog2.png'}
                    width={817}
                    height={500}
                    alt='Logo'/>
                    {/* icon-box */}
                    <div className='w-[393px] h-[24px] flex gap-[35px] md:w-full md:h-full md:flex-wrap'>
                         {/* 1 */}
                      <div className='flex gap-[11px] w-[80px]'>
                      <FaUser className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Admin</h4>
                      </div>
                       {/* 2 */}
                       <div className='flex gap-[11px] w-[121px]'>
                      <FaCalendar className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>14 Oct 2022</h4>
                      </div>
                       {/* 3 */}
                       <div className='flex gap-[11px] w-[122px]'>
                      <FaTag className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Handmade</h4>
                      </div>
                    </div>
                    <h1 className='text-[30px] font-medium Poppins text-[#000000] md:text-[24px] sm:text-[16px]'>Exploring new ways of decorating</h1>
                    <p className='text-[15px] Poppins text-[#9F9F9F] w-[800px] md:text-[12px] md:w-1/2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                    </p>
                    <button className='w-[89px] h-[36px] border-b-[1px] border-[#000000] text-[16px] leading-6 Poppins text-[#000000]'>Read more</button>
        </div>
         {/* box3 */}
         <div className='w-[820px] h-[794px] flex flex-col gap-5 md:w-full md:h-full'>
        <Image 
                    src={'/blog3.png'}
                    width={817}
                    height={500}
                    alt='Logo'/>
                    {/* icon-box */}
                    <div className='w-[349px] h-[24px] flex gap-[35px] md:w-full md:h-full md:flex-wrap'>
                         {/* box1 */}
                      <div className='flex gap-[11px] w-[80px]'>
                      <FaUser className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Admin</h4>
                      </div>
                       {/* box2 */}
                       <div className='flex gap-[11px] w-[121px]'>
                      <FaCalendar className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>14 Oct 2022</h4>
                      </div>
                       {/* box3 */}
                       <div className='flex gap-[11px] w-[78px]'>
                      <FaTag className='w-5 h-5 text-[#9F9F9F]'/>
                        <h4 className='text-[16px] text-[#9F9F9F] Poppins'>Wood</h4>
                      </div>
                    </div>
                    <h1 className='text-[30px] font-medium Poppins text-[#000000] md:text-[24px] sm:text-[16px]'>Handmade pieces that took time to make</h1>
                    <p className='text-[15px] Poppins text-[#9F9F9F] w-[800px]  md:w-1/2 md:text-[12px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                    </p>
                    <button className='w-[89px] h-[36px] border-b-[1px] border-[#000000] text-[16px] leading-6 Poppins text-[#000000]'>Read more</button>
        </div>
      </div>
      {/* side-bar */}
      <div className='w-[30%] flex flex-col items-center gap-[50px]'>
        {/* cetagories */}
        <div className='w-[393px] h-[537px] flex items-center flex-col gap-6'>
          {/* search-bar */}
          <div className='w-[311px] h-[58px] flex justify-end items-center border-[1px] border-[#9F9F9F] rounded-[5px] px-3 cursor-text'>
          <CiSearch className='w-6 h-6 text-[#000000]' />
        </div>
        {/* catag */}
        <div className='w-[251px] h-[353px] flex flex-col gap-5'>
          <h2 className='Poppins text-[24px] text-[#000000] font-medium'>Categories</h2>
          <div className='w-full h-[20%] flex justify-between'>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>Crafts</h4>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>2</h4>
          </div>
          <div className='w-full h-[20%] flex justify-between'>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>Design</h4>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>8</h4>
          </div>
          <div className='w-full h-[20%] flex justify-between'>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>Handmade</h4>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>7</h4>
          </div>
          <div className='w-full h-[20%] flex justify-between'>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>Interior</h4>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>1</h4>
          </div>
          <div className='w-full h-[20%] flex justify-between'>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>Wood</h4>
            <h4 className='text-[16px] Poppins text-[#9F9F9F]'>6</h4>
          </div>
        </div>
          </div>
          <div className='w-[393px] h-[650px] flex justify-center'>
            <div className='w-[260px] h-[618px] flex flex-col gap-6'>
            <h2 className='Poppins text-[24px] text-[#000000] font-medium'>Recent Posts</h2>
            {/* box1 */}
            <div className='w-[211px] h-20 flex gap-3 items-center'>
            <Image 
                    src={'/post1.png'}
                    width={80}
                    height={80}
                    alt='post1'/>
              <div className='w-[119px] h-[65px] gap-[5px] flex flex-col'>
              <h4 className='Poppins text-[14px] text-[#000000] font-medium whitespace-nowrap'>Going all-in with <br />millennial design</h4>
              <p className='Poppins text-[12px] text-[#9F9F9F] font-normal'>03 Aug 2022</p>
              </div>
            </div>
             {/* box2 */}
             <div className='w-[211px] h-20 flex gap-3 items-center'>
            <Image 
                    src={'/post2.png'}
                    width={80}
                    height={80}
                    alt='post2'/>
              <div className='w-[119px] h-[65px] gap-[5px] flex flex-col'>
              <h4 className='Poppins text-[14px] text-[#000000] font-medium whitespace-nowrap'>Exploring new ways <br />of decorating</h4>
              <p className='Poppins text-[12px] text-[#9F9F9F] font-normal'>03 Aug 2022</p>
              </div>
            </div>
             {/* box3 */}
             <div className='w-[211px] h-20 flex gap-3 items-center'>
            <Image 
                    src={'/post3.png'}
                    width={80}
                    height={80}
                    alt='post3'/>
              <div className='w-[119px] h-[65px] gap-[5px] flex flex-col'>
              <h4 className='Poppins text-[14px] text-[#000000] font-medium whitespace-nowrap'>Handmade pieces <br />that took time to make</h4>
              <p className='Poppins text-[12px] text-[#9F9F9F] font-normal'>03 Aug 2022</p>
              </div>
            </div>
             {/* box4 */}
             <div className='w-[211px] h-20 flex gap-3 items-center'>
            <Image 
                    src={'/post4.png'}
                    width={80}
                    height={80}
                    alt='post4'/>
              <div className='w-[119px] h-[65px] gap-[5px] flex flex-col'>
              <h4 className='Poppins text-[14px] text-[#000000] font-medium whitespace-nowrap'>Modern home in <br /> Milan</h4>
              <p className='Poppins text-[12px] text-[#9F9F9F] font-normal'>03 Aug 2022</p>
              </div>
            </div>
             {/* box5 */}
             <div className='w-[211px] h-20 flex gap-3 items-center'>
            <Image 
                    src={'/post5.png'}
                    width={80}
                    height={80}
                    alt='post5'/>
              <div className='w-[119px] h-[65px] gap-[5px] flex flex-col'>
              <h4 className='Poppins text-[14px] text-[#000000] font-medium whitespace-nowrap'>Colorful office <br /> redesign</h4>
              <p className='Poppins text-[12px] text-[#9F9F9F] font-normal'>03 Aug 2022</p>
              </div>
            </div>
            </div>
          </div>
      </div>
      </div>
      {/* pagination */}
      <div className='w-[392px] h-[60px] flex gap-[38px] sm:px-4'>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px]'>1</button>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px]'>2</button>
        <button className='w-[60px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px]'>3</button>
        <button className='w-[98px] h-[60px] bg-[#F9F1E7] active:bg-[#B88E2F] text-[20px] text-[#000000] Poppins rounded-[10px]'>Next</button>
      </div>
    </div>
    <div className='flex pb-6'>
      <Performance/>
    </div>

   </section>
  )
}

export default blogPage;