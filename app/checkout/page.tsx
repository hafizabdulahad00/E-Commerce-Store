import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Performance from '../components/Performance/performance';

const checkoutPage = () => {
  return (
    <section>
         <div className='w-full h-[316px] bg-[url(/Shop-Banner.png)] flex bg-cover justify-center items-center flex-col'>
    <div className='w-[196px] h-[133px] flex flex-col items-center justify-center'>
    <Image 
                    src={'/Logo.png'}
                    width={50}
                    height={32}
                    alt='Logo'/>
        <h1 className='text-[48px] text-[#000000] Poppins font-medium'>Checkout</h1>
    </div>
    <div className='w-[145px] h-[24px] items-center justify-center flex gap-[6px]'>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium'>Home</Link>
    <IoIosArrowForward  className='w-5 h-5 text-[#000000]'/>
    <Link href = "/" className='text-[16px] text-[#000000] Poppins font-light'>Checkout</Link>
    </div>
    </div>
    <div className='w-full h-full flex justify-center p-[50px] md:flex-col  '>
        {/* form */}
        <div className='w-[608px] h-full flex flex-col md:w-full'>
            <div className='w-1/2 flex flex-col gap-8 md:w-full'>
            <h2 className='text-[32px] text-[#000000] Poppins font-semibold md:text-center'>Billing details</h2>
            <form action="#" className='flex flex-col w-full gap-5 '>
                {/* FirstName */}
                <div className='flex w-[453px] gap-7 md:w-full'>
                <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className='Poppins font-medium text-[16px] text-[#000000]'>First Name</label>
                <input type="text" name="firstName" id="firstName" className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'/>
                </div>
                {/* LastName */}
                <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className='Poppins font-medium text-[16px] text-[#000000]'>Last Name</label>
                <input type="text" name="lastName" id="lastName" className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full' />
                </div>
                </div>
                {/* CompanyName */}
                <label htmlFor="CompanyName" className='Poppins font-medium text-[16px] text-[#000000]'>Company Name(Optional)</label>
                <input type="text" name="CompanyName" id="CompanyName" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full' />
                {/* Country/Region */}
                <label htmlFor="Country" className='Poppins font-medium text-[16px] text-[#000000]'>Country / Region</label> 
                <select name="Country" id="Country" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'></select>
                 {/* StreetName */}
                 <label htmlFor="StreetName" className='Poppins font-medium text-[16px] text-[#000000]'>Street address</label>
                <input type="text" name="StreetName" id="StreetName" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full' /> 
                {/* Town */}
                <label htmlFor="StreetName" className='Poppins font-medium text-[16px] text-[#000000]'>Town / City</label>
                <input type="text" name="StreetName" id="Town" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full' />
                {/* Country/Region */}
                <label htmlFor="Province" className='Poppins font-medium text-[16px] text-[#000000]'>Province</label> 
                <select name="Province" id="Province" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'></select>
                {/* ZipCode */}
                <label htmlFor="Zipcode" className='Poppins font-medium text-[16px] text-[#000000]'>ZIP Code</label>
                <input type="tel" name="Zipcode" id="Zipcode" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'/>  
                {/* Phone */}
                <label htmlFor="Phone" className='Poppins font-medium text-[16px] text-[#000000]'>Phone</label>
                <input type="tel" name="Phone" id="Phone" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'/>  
                {/* Email*/}
                <label htmlFor="email" className='Poppins font-medium text-[16px] text-[#000000]'>Email address</label>
                <input type="tel" name="email" id="email" className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] md:w-full'/>
                {/* additional information */}
                <input type="text" name="additionalInformation" id="additionalInformation" placeholder='Additional information' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9F9F9F] placeholder:text-[16px] placeholder:Poppins placeholder:text-[#9F9F9F] mt-5 px-4 md:w-full'/>  
            </form>
            </div>
        </div>
        {/* second-col */}
        <div className='w-[608px] h-[789px] flex flex-col p-[50px] md:w-full md:h-full'>
            <div className='w-full h-full flex flex-col gap-4'>
                <div className='h-[50px] flex justify-between items-center '>
                    <h2 className='text-[#000000] text-[24px] font-medium Poppins sm:text-[16px]'>Product</h2>
                    <h2 className='text-[#000000] text-[24px] font-medium Poppins sm:text-[16px]'>Subtotal</h2>
                </div>
                <div className='h-[50px] flex justify-between items-center sm:gap-[20px]'>
                  <div className='flex gap-3'>
                    <h4 className='text-[#9F9F9F] text-[16px] font-light Poppins sm:text-[12px] sm:whitespace-nowrap'>Asgaard sofa</h4>
                    <h4 className='text-[#000000] text-[16px] font-medium Poppins sm:text-[12px]'>X</h4>
                    <h4 className='text-[#000000] text-[16px] font-medium Poppins sm:text-[12px]'>1</h4>
                    </div>
                    <h4 className='text-[#9F9F9F] text-[16px] font-light Poppins sm:text-[12px] sm:whitespace-nowrap'>Rs. 250,000.00</h4>
                </div>
                <div className='h-[50px] flex justify-between items-center'>
                    <h2 className='text-[#000000] text-[16px] font-normal Poppins'>Subtotal</h2>
                    <h2 className='text-[#000000] text-[16px] font-light Poppins'>Rs. 250,000.00</h2>
                </div>
                <div className='h-[50px] flex justify-between items-center'>
                    <h2 className='text-[#000000] text-[16px] font-normal Poppins'>Total</h2>
                    <h2 className='text-[#B88E2F] text-[24px] font-medium Poppins sm:text-[18px]'>Rs. 250,000.00</h2>
                </div>
                <div className='h-0 w-full border-[1px] border-[#D9D9D9]'></div>
                <form action="#" className='flex flex-col gap-2'>
                    <div className='flex gap-3'>
                    <input type="radio" name="bank" id="bank" />
                    <label htmlFor="bank" className='text-[16px] text-[#000000] Poppins font-light sm:text-[12px]'>Direct Bank Transfer</label>
                    </div>
                    <p className='text-[16px] font-light text-[#9F9F9F] Poppins sm:text-[12px]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div className='flex gap-3 items-center'>
                    <input type="radio" name="bank" id="bank" />
                    <label htmlFor="bank" className='text-[16px] text-[#9F9F9F] Poppins font-light  sm:text-[12px]'>Direct Bank Transfer</label>
                    </div>
                    <br />
                    <div className='flex gap-3 items-center'>
                    <input type="radio" name="bank" id="bank" />
                    <label htmlFor="bank" className='text-[16px] text-[#9F9F9F] Poppins font-light sm:text-[12px]'>Direct Bank Transfer</label>
                    </div>
                    <p className='text-[16px] font-light text-[#000000] Poppins  sm:text-[12px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className='font-medium'>privacy policy.</a></p>
            <button className='w-[318px] h-[64px] border-[1px] border-[#000000] rounded-[15px] text-[20px] text-[#000000] Poppins  self-center mt-4 sm:w-[200px] sm:h-[50px] sm:text-[16px]'>Place order</button>
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

export default checkoutPage