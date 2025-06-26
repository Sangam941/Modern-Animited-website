import { motion } from 'motion/react'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full h-[60vh] bg-[#004d43] rounded-2xl pt-20'>
        <div className='text-white border-t-[1px] border-b-[1px] font-["Roboto_Condensed"] overflow-hidden flex'>
            <motion.h1 
              initial={{x:0}}
              animate={{x:"-100%"}}
              transition={{ease:"linear", repeat:Infinity, duration:12}}
              className='text-[25vw] leading-[20vw] uppercase -tracking-[1.5vw] font-semibold whitespace-nowrap pr-20'>we are orchi</motion.h1>

            <motion.h1 
              initial={{x:0}}
              animate={{x:"-100%"}}
              transition={{ease:"linear", repeat:Infinity, duration:12}}
              className='text-[25vw] leading-[20vw] uppercase -tracking-[1.5vw] font-semibold whitespace-nowrap pr-20'>we are orchi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
