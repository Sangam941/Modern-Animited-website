import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#cdea68] pt-20 pb-12 rounded-2xl px-12 relative z-10'>
      <h1 className='text-[3.8vw] tracking-tight leading-none pr-28'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='border-t-[1px] mt-16 w-full border-zinc-500 flex'>
        <div className='w-1/2'>
          <h1 className='text-[4vw] font-regular tracking-tighter'>Our approach:</h1>
          <button className='uppercase bg-zinc-800 rounded-full px-6 py-4 text-[#f1f1f1] font-semibold flex items-center gap-8 mt-3'>Read More
            <div className='w-2 h-2 bg-[#f1f1f1] rounded-full'></div>
          </button>
        </div>
        <div className="photo h-[65vh] mt-4 rounded-xl w-1/2 bg-[#b6d34f]"></div>
      </div>
    </div>
  )
}

export default About
