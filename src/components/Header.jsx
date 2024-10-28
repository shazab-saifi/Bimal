import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='h-[69px] md:h-[77px] w-full xl:w-[1440px] flex justify-between py-5 px-4 md:py-6 md:px-16 lg:px-[100px]'>
        <h1 className='text-kesari-500 text-2xl leading-[28.8px] tracking-tight text-center font-extrabold'>Bimal</h1>
        <div className='flex gap-4'>
            <h4 className='text-kesari-900 text-[16px] leading-5 font-medium tracking-[-0.01em] text-center flex items-center'>Products</h4>
            <Button className="py-[6px] px-3 bg-kesari-400 text-white rounded-md text-[14px]">Die Now</Button>
        </div>
    </div>
  )
}

export default Header