import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)

    useEffect(() => {
      window.addEventListener("mousemove", (e)=>{
        let mouseX = e.clientX
        let mouseY = e.clientY

        let deltaX = mouseX - window.innerWidth/2
        let deltaY = mouseY - window.innerHeight/2

        let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
        setrotate(angle-180)
      })
    }, [])
    
  return (
    <div className='w-full h-screen'>
        <div data-scroll data-scroll-speed="-0.9" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-center bg-cover'>
            <div className='absolute flex items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div data-scroll data-scroll-speed="-0.2" className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-3/5 h-3/5 bg-zinc-800 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute w-full p-[2px] top-1/2 left-1/2'>
                            <div className='w-[1.3vw] h-[1.3vw] bg-zinc-50 rounded-full'></div>
                        </div>
                    </div>
                </div>            
                <div data-scroll data-scroll-speed="-0.2" className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='line relative w-3/5 h-3/5 bg-zinc-800 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute w-full p-[2px] top-1/2 left-1/2'>
                            <div className='w-[1.3vw] h-[1.3vw] bg-zinc-50 rounded-full'></div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>      
    </div>
  )
}

export default Eyes
