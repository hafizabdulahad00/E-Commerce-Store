import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Performance from '../components/Performance/performance';

const productComparison = () => {
  return (
    <section>
         <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[502px] h-[133px] flex flex-col items-center justify-center sm:w-full sm:items-center'>
    <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium sm:text-[32px] sm:text-center'>Product Comparison</h1>
    </div>
    <div className='w-[250px] h-[24px] flex gap-[6px] sm:w-full sm:justify-center'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium sm:text-[12px]'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light sm:text-[12px]'>Product Comparison</Link>
    </div>
    </div>
    {/* second-section */}
    <div className='h-full flex-col flex justify-center gap-[70px] pl-[100px] py-[50px] sm:pl-2 sm:py-5'>
    <div className='flex flex-col gap-[30px] pt-5'>
  
  <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[25px] sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[20px] md:grid-cols-2'>
    {/* Heading Column */}
    <div className='flex flex-col gap-[25px] sm:gap-[10px] md:gap-[15px]'>
    <h2 className='text-[28px] font-medium Poppins text-[#000000] w-[250px] sm:text-[16px] sm:w-[150px]'>Go to Product page for more 
    Products</h2>
    <button className='w-[115px] h-[33px] text-xl Poppins text-[#727272] border-b border-[#727272] sm:w-[80px] sm:text-[14px]'>View More</button>
    </div>
    {/* Sofa 1 */}
    <div className='flex flex-col gap-[10px]'>
      <div className='w-[280px] h-[177px] bg-[#F9F1E7] flex justify-center items-center p-6 rounded-[10px] sm:w-full'>
         <Image 
                            src={'/greenSofa.png'}
                            width={271}
                            height={201}
                            alt='sofa' className='sm:w-full h-full'/>
      </div>
      <h4 className='text-[24px] font-medium text-[#000000] Poppins sm:text-[16px]'>Asgaard Sofa</h4>
      <h4 className='text-[18px] font-medium text-[#000000] Poppins sm:text-[12px]'>Rs. 250,000.00</h4>
      <div className='flex  h-full items-center gap-3 sm:flex-col sm:items-start sm:w-full'>
      <h4 className='text-[18px] font-medium text-[#000000] Poppins sm:text-[12px]'>4.7</h4>
      <Image 
                            src={'/Star.png'}
                            width={124}
                            height={20}
                            alt='sofa'/>
                            <div className='w-[1px] h-1/2 border border-[#9F9F9F] sm:hidden'></div>
                            <h4 className='text-[13px] font-medium text-[#9F9F9F] Poppins'>204 Review</h4>
      </div>
    </div>
    {/* Sofa 2 */}
    <div className='flex flex-col gap-[10px]'>
    <div className='w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px] p-6 sm:w-full'>
    <Image 
                            src={'/blackSofa.png'}
                            width={271}
                            height={201}
                            alt='sofa' className='sm:w-full sm:h-full'/>
    </div>
      <h4 className='text-[24px] font-medium text-[#000000] Poppins sm:text-[16px]'>Outdoor Sofa Set</h4>
      <h4 className='text-[18px] font-medium text-[#000000] Poppins sm:text-[12px]'>Rs. 224,000.00</h4>
      <div className='flex  h-full items-center gap-3 sm:flex-col sm:items-start sm:w-full'>
      <h4 className='text-[18px] font-medium text-[#000000] Poppins sm:text-[12px]'>4.2</h4>
      <Image 
                            src={'/Star.png'}
                            width={124}
                            height={20}
                            alt='sofa'/>
                            <div className='w-[1px] h-1/2 border border-[#9F9F9F] sm:hidden'></div>
                            <h4 className='text-[13px] font-medium text-[#9F9F9F] Poppins'>145 Review</h4>
      </div>
    </div>
     {/* Column 3 */}
     <div className='flex flex-col gap-[25px] pl-[25px] pt-[50px]'>
      <div className='flex flex-col gap-2'>
        <h4 className='text-[24px] font-semibold text-[#000000] Poppins sm:text-[16px]'>Add A Product</h4>
        <select name="Choose a Product" id="Choose a Product" className='w-[242px] h-[39px] bg-[#B88E2F] rounded-md text-[14px] font-semibold text-[#FFFFFF] Poppins px-4 sm:w-full sm:text-[10px]'>
        <option value="Choose a Product">Choose a Product</option>
        </select>
        </div>
    </div>
  </div>
</div>
    </div>
    {/* product-properties */}
    <div className='h-full flex-col flex justify-center gap-[70px] pl-[100px] py-[100px] sm:px-2 sm:py-5 sm:w-full'>
      {/* First-Column */}
      <div className='flex flex-col gap-[30px] border-t border-t-[#E8E8E8] pt-12'>
  <h2 className='text-[28px] font-medium Poppins text-[#000000]'>General</h2>
  <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[25px] sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[20px] md:grid-cols-3'>
    {/* Heading Column */}
    <div className='flex flex-col gap-[25px]  border-r  border-r-[#E8E8E8]  '>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Sales Package</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Model Number</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Secondary Material</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Configuration</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Upholstery Material</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Upholstery Color</h4>
    </div>
    {/* Column 1 */}
    <div className='flex flex-col gap-[25px]  border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>1 sectional sofa</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[11px]'>TFCBLIGRBL6SRHS</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Solid Wood</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>L-shaped</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Fabric + Cotton</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Bright Grey & Lion</h4>
    </div>
    {/* Column 2 */}
    <div className='flex flex-col gap-[25px]  border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>1 Three Seater, 2 Single Seater</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>DTUBLIGRBL568</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Solid Wood</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>L-shaped</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Fabric + Cotton</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Bright Grey & Lion</h4>
    </div>
  </div>
</div>
  {/* Second-Column */}
  <div className='flex flex-col gap-[30px]'>
  <h2 className='text-[28px] font-medium Poppins text-[#000000]'>Product </h2>
  <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[25px] sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[20px] md:grid-cols-3'>
    {/* Heading Column */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8] '>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Filling Material</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Finish Type</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Adjustable Headrest</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Maximum Load Capacity</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Origin of Manufacture</h4>
    </div>
    {/* Column 1 */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Foam</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Bright Grey & Lion</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>No</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>280 KG</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>India</h4>
    </div>
    {/* Column 2 */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Matte</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Bright Grey & Lion</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>yes</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>300 KG</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>India</h4>
    </div>
  </div>
</div>
  {/* Third-Column */}
  <div className='flex flex-col gap-[30px]'>
  <h2 className='text-[28px] font-medium Poppins text-[#000000]'>Dimensions</h2>
  <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[25px] sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[20px] md:grid-cols-3'>
    {/* Heading Column */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8]'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Width</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Height</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Depth</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Weight</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Seat Height</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Leg Height</h4>
    </div>
    {/* Column 1 */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>265.32 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>76 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>167.76 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>45 KG</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>41.52 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>5.46 cm</h4>
    </div>
    {/* Column 2 */}
    <div className='flex flex-col gap-[25px] border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>265.32 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>76 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>167.76 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>65 KG</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>41.52 cm</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>5.46 cm</h4>
    </div>
  </div>
</div>
 {/* Fourth-Column */}
 <div className='flex flex-col gap-[30px]'>
  <h2 className='text-[28px] font-medium Poppins text-[#000000]'>Warranty</h2>
  <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[25px] sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[20px] md:grid-cols-2'>
    {/* Heading Column */}
    <div className='flex flex-col gap-[125px] border-r border-r-[#E8E8E8]'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Warranty Summary</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Warranty Service 
      Type</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Covered in Warranty</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Not Covered in Warranty</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Domestic Warranty</h4>
    </div>
    {/* Column 1 */}
    <div className='flex flex-col gap-[100px]  border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>1 Year Manufacturing Warranty</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[9px]'>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Warranty Against Manufacturing Defect</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>1 Year</h4>
      <Link href = "/cart">
     <button className='w-[215px] h-[64px] bg-[#B88E2F] text-[#FFFFFF] text-[20px] font-normal Poppins sm:w-[150px] sm:h-[50px] md:text-[16px] transition-all ease-in duration-300 hover:text-[#B88E2F] hover:bg-[#FFFFFF] hover:border hover:border-[#B88E2F]'>Add to Cart</button>
     </Link>
    </div>
    {/* Column 2 */}
    <div className='flex flex-col gap-[100px] border-r border-r-[#E8E8E8] pl-[25px] sm:p-0'>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>1.2 Year Manufacturing Warranty</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>Warranty of the product is limited to manufacturing defects only.</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</h4>
      <h4 className='text-[20px] font-normal text-[#000000] Poppins sm:text-[16px] md:text-[16px] xs:text-[12px]'>3 Months</h4>
      <Link href = "/cart">
      <button className='w-[215px] h-[64px] bg-[#B88E2F] text-[#FFFFFF] text-[20px] font-normal Poppins sm:w-[150px] sm:h-[50px] md:text-[16px] transition-all ease-in duration-300 hover:text-[#B88E2F] hover:bg-[#FFFFFF] hover:border hover:border-[#B88E2F]'>Add to Cart</button>
      </Link>.
    </div>
  </div>
</div>

    </div>
    <div className='flex pb-6'>
      <Performance/>
    </div>
    </section>
  )
}

export default productComparison;