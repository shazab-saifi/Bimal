import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='h-auto w-full max-w-[1440px] mx-auto flex justify-between py-5 px-4 md:py-6 md:px-16 lg:px-24 box-border'>
        <h1 className='text-kesari-500 text-2xl leading-[28.8px] tracking-tight text-center font-extrabold'>Bimal</h1>
        <div className='flex gap-4'>
            <h4 className='text-kesari-900 text-[16px] leading-5 font-medium tracking-[-0.01em] text-center flex items-center'>Products</h4>
            <Button className="py-[6px] px-3 bg-kesari-400 text-white rounded-md text-[14px] transition-colors hover:bg-kesari-500">Die Now</Button>
        </div>
    </div>
  )
}

export default Header