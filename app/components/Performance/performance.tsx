import React from 'react'
import Image from 'next/image';

const Performance = () => {
  return (
    <section className='w-full h-auto flex flex-col py-[100px] items-center bg-[#FAF3EA]'>
    <div className='w-[1400px] h-auto flex justify-between items-center gap-[30px]  md:w-[90%] md:flex-wrap md:gap-[20px] md:justify-center sm:w-[95%] sm:flex-wrap sm:gap-[30px] sm:justify-center'>
      <div className='flex w-[337px] gap-[10px] items-center md:w-[45%] sm:w-[90%] xs:flex-col xs:items-start'>
      <Image 
                    src={'/trophy.png'}
                    width={60}
                    height={60}
                    alt='Trophy'   className='xs:self-center'/>
                    <div className='w-[267px] flex flex-col gap-[2px] whitespace-nowrap sm:w-full sm:whitespace-normal'>
                      <h4 className='text-[25px] leading-[37.5px] Poppins font-semibold text-[#242424]  sm:text-[18px] sm:leading-[25px]'>High Quality</h4>
                      <p className='text-[20px] leading-[30x] Poppins font-medium text-[#898989] sm:text-[14px] sm:leading-[27px]'>crafted from top materials</p>
                    </div>
      </div>

      <div className='flex w-[337px] gap-[10px] items-center  md:w-[45%] sm:w-[90%] xs:flex-col xs:items-start md:gap-[20px]'>
      <Image 
                    src={'/guarantee.png'}
                    width={60}
                    height={60}
                    alt='Guarantee'  className='xs:self-center' />
                    <div className='w-[267px] flex flex-col gap-[2px] whitespace-nowrap sm:w-full sm:whitespace-normal'>
                      <h4 className='text-[25px] leading-[37.5px] Poppins font-semibold text-[#242424]   sm:text-[18px] sm:leading-[25px]'>Warranty Protection</h4>
                      <p className='text-[20px] leading-[30x] Poppins font-medium text-[#898989]  sm:text-[14px] sm:leading-[27px]'>Over 2 years</p>
                    </div>
      </div>

      <div className='flex w-[337px] gap-[10px] items-center  md:w-[45%] sm:w-[90%] xs:flex-col xs:items-start'>
      <Image 
                    src={'/shipping.png'}
                    width={60}
                    height={60}
                    alt='Shipping'  className='xs:self-center'/>
                    <div className='w-[267px] flex flex-col gap-[2px] whitespace-nowrap  sm:w-full sm:whitespace-normal'>
                      <h4 className='text-[25px] leading-[37.5px] Poppins font-semibold text-[#242424] sm:text-[18px] sm:leading-[25px]'>Free Shipping</h4>
                      <p className='text-[20px] leading-[30x] Poppins font-medium text-[#898989] sm:text-[14px] sm:leading-[27px]'>Order over 150 $</p>
                    </div>
      </div>

      <div className='flex w-[337px] gap-[10px] items-center  md:w-[45%] sm:w-[90%] xs:flex-col xs:items-start'>
      <Image 
                    src={'/customer-support.png'}
                    width={60}
                    height={60}
                    alt='Customer-Support'  className='xs:self-center' />
                    <div className='w-[267px] flex flex-col gap-[2px] whitespace-nowrap sm:w-full sm:whitespace-normal'>
                      <h4 className='text-[25px] leading-[37.5px] Poppins font-semibold text-[#242424]  sm:text-[18px] sm:leading-[25px]'>24 / 7 Support</h4>
                      <p className='text-[20px] leading-[30x] Poppins font-medium text-[#898989]  sm:text-[14px] sm:leading-[27px]'>Dedicated support</p>
                    </div>
      </div>
    </div>
  </section>
  )
}

export default Performance;




