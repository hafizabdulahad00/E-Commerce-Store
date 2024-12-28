import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='w-full h-[505] flex justify-center items-center border-[1px] border-[#D9D9D9] md:h-full md:py-5' >
        <div className='w-[1240px] h-[419px] flex flex-col gap-12 md:w-full md:px-3 md:h-full sm:gap-[8px]'>
            {/* First-row */}
            <div className='flex w-[1133px] h-[312px] justify-center md:w-full md:px-3 sm:flex-col sm:h-full sm:gap-[20px]  sm:justify-center sm:items-center'>
                {/* Text-box */}
                <div className='w-[530px] h-[312px] flex flex-col gap-[55px] md:w-[30%] sm:w-full sm:gap-[20px] sm:h-full sm:py-3 sm:items-center'>
                <h4 className='text-[24px] Poppins text-[#000000] font-bold md:text-[20px]'>Funiro.</h4>
                <p className='text-[16px] Poppins text-[#9F9F9F] md:text-[14px] sm:text-center'>400 University Drive Suite 200 <br /> Coral Gables,<br />
                FL 33134 USA</p>
                </div>
                <div className='w-[710px] md:w-[70%] sm:w-full sm:flex sm:justify-center sm:items-center sm:h-full '>
                    <div className='w-[352px] h-[312px] flex gap-[144px]  md:w-[50%] md:gap[50px] sm:gap-[120px] sm:w-full sm:flex sm:flex-col sm:h-full sm:items-center xs:gap-[70px]'>
                        {/* Link-box-1 */}
                        <div className='w-[68px] h-full flex flex-col gap-[55px] md:w-[15%] sm:gap-[20px] sm:h-full sm:w-full sm:items-center'>
                            <h4 className='text-[16px] Poppins text-[#9F9F9F] font-medium md:text-[14px] md:pb-4'>Links</h4>
                            <div className='w-[66px] h-[233px] gap-[46px] flex flex-col sm:w-full sm:items-center'>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px] '>Home</Link>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Shop</Link>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Blog</Link>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Contact</Link>
                             </div>
                        </div>
                        {/* Link-box-2 */}
                        <div className='w-[140px] h-[242px] flex flex-col gap-[55px] md:w-[15%] sm:gap-[20px] sm:h-full sm:w-full sm:items-center'>
                        <h4 className='text-[16px] Poppins text-[#9F9F9F] font-medium md:text-[14px] md:pb-4'>Help</h4>
                        <div className='w-[140px] h-[63px] flex flex-col gap-[46px] sm:items-center'>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Payment Options</Link>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Returns</Link>
                            <Link href = "/" className='text-[16px] text-[#000000] Poppins font-medium md:text-[14px]'>Privacy Policies</Link>
                        </div>
                        </div>
                              {/* form-box */}
                        <div className='w-[286px] h-[101px] flex flex-col gap-[53px] md:w-[40%] sm:w-full sm:items-center sm:h-full sm:gap-[30px] xs:mt-[80px]'>
                    <h4 className='text-[16px] Poppins text-[#9F9F9F] font-medium'>Newsletter</h4>
                    <div className='w-full h-6 flex gap-[11px] md:flex-col md:gap-[20px] sm:w-full sm:items-center sm:h-full'>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email Address' className='w-[200px] border-b border-b-[#000000] text-[14px] text-[#9F9F9F] bg-transparent Poppins md:w-[150px] md:text-[12px] sm:w-[80px]'/>
                        <button className='bg-transparent text-[14px] text-[#000000] Poppins border-b border-b-[#000000] '>SUBSCRIBE</button>
                    </div>
                    </div>
                    </div>
              
                   
                </div>
            </div>
            {/* Second-row */}
            <div className='w-[1240px] h-[59px] flex flex-col gap-[35px] md:w-full sm:h-full sm:justify-center sm:items-center'>
                <div className='w-full border-[1px] border-[#D9D9D9]'></div>
                <p className='text-[16px] Poppins text-[#000000] md:pb-2 md:text-[14px]'>2023 furino. All rights reverved</p>
            </div>
        </div>
    </section>
)
}

export default Footer;
