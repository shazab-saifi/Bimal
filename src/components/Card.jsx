import React from 'react'
import bimal from '../assets/vimal.png'
import Button from './Button'

const Card = () => {
    return (
        <div className='bg-kesari-100 rounded-3xl p-5 space-y-5 shadow-md md:flex items-center justify-center gap-5'>
            <img className='w-[303px] md:w-[218px]' src={bimal} alt="bimal.png" />
            <div className='space-y-8 '>
                <div className='space-y-2'>
                    <h3 className='text-kesari-500 text-[20px] leading-6 font-bold'>bimal <span className='text-kesari-900 text-[20px] leading-6 font-bold'>Elaichi</span></h3>
                    <p className='text-[14px] leading-[16.8px] text-kesari-900 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque.</p>
                </div>
                <div className='space-x-2 flex'>
                    <Button className="py-[10px] px-5 rounded-[10px] w-full md:w-auto text-[16px] bg-kesari-400 text-white transition-colors hover:bg-kesari-500">Die Now</Button>
                    <Button className="py-[10px] px-5 rounded-[10px] w-full md:w-auto text-[16px] bg-white text-kesari-900 transition-colors hover:bg-customWhite">Die Later</Button>
                </div>
            </div>
        </div>
    )
}

export default Card