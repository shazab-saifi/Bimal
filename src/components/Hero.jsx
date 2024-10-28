import React from 'react'
import Ajay from '../assets/ajay.png'
import Card from './Card'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div className='pt-9 px-4 md:px-16 md:pt-10 flex flex-col gap-6 items-center'>
        <div className='flex flex-col gap-2'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className='text-3xl leading-9 text-kesari-900 font-extrabold md:text-[64px] md:leading-[64px]'>Bolo Zubaan <span className='text-4xl leading-9 font-extrabold text-kesari-400 md:text-[64px] md:leading-[64px] md:text-white'>Canceri</span></motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className='text-lg md:text-2xl leading-[21.6px] font-normal tracing-[-0.01em] text-center'>More you eat, sooner you die</motion.h3>
        </div>
        <img className='w-[339px] md:w-[480px]' src={Ajay} alt="Ajay.png" />
      </div>
      <div className='md:px-4 w-full'>
        <div className='rounded-[32px] w-full bg-customWhite py-6 px-4 md:py-16 md:px-12 lg:px-[84px] space-y-6 flex flex-col items-center'>
          <div className='space-y-2'>
            <h2 className='text-kesari-900 text-2xl md:text-4xl leading-[28.8px] md:leading-[43.2px] font-bold text-center'>Cancerous Products</h2>
            <p className='text-center text-[16px] leading-[19.2px] font-normal md:font-medium text-black max-w-[436px]'>Discover an extensive selection of highly cancerous products designed specifically for you!</p>
          </div>
          <div className='space-y-5'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero