import { motion } from 'motion/react'
import React, { useState } from 'react'

const Featured = () => {
    const [hovering, sethovering] = useState(false)
    const [hovering2, sethovering2] = useState(false)

    return (
        <div className='w-full py-20 relative bg-[#f1f1f1]'>
            <div className='px-10 border-b-[1px] border-zinc-500 pb-14 mb-16'>
                <h1 className='text-6xl font-medium font-["Roboto"] tracking-tight'>Featured projects</h1>
            </div>
            <div className="Cards w-full flex gap-5 px-14 bg-[#f1f1f1]">
                <div onMouseEnter={()=>sethovering(true)} onMouseLeave={()=>sethovering(false)} className="relative card w-1/2 h-[75vh]">
                    <h1 className='flex z-10 absolute text-[8vw] font-["Roboto"] font-semibold whitespace-break-spaces uppercase -tracking-[0.5vw] text-yellow-200 top-1/2 left-1/2 right-full -translate-y-[50%] cursor-pointer'>
                        {"Salience Labs".split('').map((item, index) => {
                            return <motion.div 
                                initial={{y:"50%", opacity:0}}
                                animate={hovering ? {y:0, opacity:100} : {y:"50%"}}
                                transition={{ease:[0, 0.55, 0.45, 1], delay:index*0.03}}
                            >{item}</motion.div>
                        })}
                    </h1>
                    <div className='hover:scale-95 duration-700 ease-in-out overflow-hidden rounded-xl'>
                        <img className='hover:scale-110 duration-[0.9s] ease-in-out' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="this is the image" />

                    </div>
                </div>
                <div onMouseEnter={()=>sethovering2(true)} onMouseLeave={()=>sethovering2(false)} className="relative card w-1/2 h-[75vh]">
                    <h1 className='flex absolute z-10 whitespace-break-spaces text-[8vw] font-["Roboto"] font-semibold uppercase -tracking-[0.7vw] text-yellow-200 top-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer'>
                        {"Cardboard Spaceship".split('').map((item, index) => {
                               return <motion.div 
                                initial={{y:"50%", opacity:0}}
                                animate={hovering2 ? {y:0, opacity:100} : {y:"50%"}}
                                transition={{ease:[0, 0.55, 0.45, 1], delay:index*0.03}}
                            >{item}</motion.div>
                        })}
                    </h1>
                    <div className='hover:scale-95 duration-700 ease-in-out overflow-hidden rounded-xl'>
                        <img className='hover:scale-110 duration-[0.9s] ease-in-out' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="this is the image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
