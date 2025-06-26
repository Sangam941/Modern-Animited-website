import { motion } from 'motion/react'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='w-full h-screen'>
            <div className="textstructure pt-36 px-14 font-['Roboto_Condensed']">
                {["we create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker flex items-center gap-2">
                            {index === 1 && (
                                <motion.div 
                                    initial={{ width: 0 }} 
                                    animate={{ width: "9vw" }} 
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1.3 }} 
                                    className='image w-[9vw] bg-red-300 h-[5.5vw] rounded-md'>
                                </motion.div>)}
                            <h1 className='text-[7.5vw] font-semibold leading-[6.8vw] tracking-tighter uppercase' key={index}>{item}</h1>
                        </div>)
                })}
            </div>

            <div className='border-t-[1px] border-zinc-300 mt-28 flex justify-between items-center pt-4 px-12'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return <p className='font-["Roboto"]'>{item}</p>
                })}
                <div className="startbtn flex items-center gap-2">
                    <div className="btn border-[1px] border-black font-['Roboto'] rounded-full px-3 py-1 uppercase">Start the Project</div>
                    <div className='rounded-full border-[1px] border-black w-9 h-9 flex items-center justify-center'><MdOutlineArrowOutward size={23} /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
