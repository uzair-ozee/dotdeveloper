import React from 'react'

const Hero = () => {
  return (
  <>
    <div>
      <h1 className='hero__heading lg:text-7xl md:text-4xl sm:text-2xl text-sm  flex items-center justify-center mt-16 font-bold text-center '>Your Digital Success Story <br/> Starts Here</h1>
      <span className='hero_title text-lg flex  justify-center mt-2 font-bold text-center text-gray-700 lg:text-base md:text-sm sm:text-[9px]'>Transforming Ideas into Pixels: Your Digital Journey Begins Here</span> 
    <div className='w-full flex items-center justify-center mt-4'>
      <button className='Contact__btn border-solid border-2 border-indigo-400 rounded-[16px] p-[10px] w-48 font-medium sm:w-40'>Contact Us</button>
    </div>
    </div>
  </>
  )
}

export default Hero
