import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen border-t-[1px] border-zinc-400 flex items-center justify-center'>
        <div className="cardContainer w-full p-16 flex gap-3">
            <div className="card w-2/4 bg-[#004D43] h-[57vh] rounded-xl text-[#CDEA68] p-10 flex justify-between flex-col font-['Roboto'] tracking-tight">
                <div className='flex items-center justify-center h-full'>
                    <h1 className='text-7xl font-semibold'>ochi</h1>
                </div>
                <div className=''>
                    <button className='px-3 text-sm font-medium py-1 rounded-full border-[1px] border-[#CDEA68]'>&copy;2021-2025</button>
                </div>
            </div>

            <div className="card w-1/4 bg-[#212121] h-[57vh] rounded-xl text-white p-10 flex justify-between flex-col font-['Roboto'] tracking-tight">
                <div className='flex items-center justify-center h-full'>
                    <h1 className='text-6xl font-semibold'>Clutch</h1>
                </div>
                <div className=''>
                    <button className='px-3 text-sm font-medium py-1 rounded-full border-[1px] border-white'>Rating 5.0 on Clutch</button>
                </div>
            </div>

            <div className="card w-1/4 bg-[#212121] h-[57vh] rounded-xl text-white p-10 flex justify-between flex-col font-['Roboto'] uppercase tracking-tight">
                <div className='flex items-center justify-center h-full'>
                    <img className='w-28 h-28' src="/images/logo.png" alt="this is logo" />
                </div>
                <div className=''>
                    <button className='px-3 text-sm font-medium py-1 rounded-full border-[1px] border-white uppercase'>business bootcamp alumini</button>
                </div>  
            </div>
        </div>
        
    </div>
  )
}

export default Cards
