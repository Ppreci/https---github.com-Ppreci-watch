import React, { useState } from 'react'
import { bannerSlides } from '../Data'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Hero = () => {
  
    const [current, setCurrent] = useState(0)

    const nextSlide = () =>{
      setCurrent(current === bannerSlides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
      setCurrent(current === 0 ? bannerSlides.length - 1 : current - 1)
    }

  return (
    <div className='bg-blac md:h-[100vh] grid place-items-center  group w-full'>
      <div className='w-full flex justify-center items-center'>
      <h1 className='text-white text-4xl absolute top-[50%] left-[250px]'>Stay unique <br /> wear TIMES</h1>
      </div>
      <div className='hidden group-hover:block'>
      <FaArrowAltCircleRight onClick={nextSlide} size={30} className='absolute top-[50%] right-[32px] text-blue-600 cursor-pointer'/>
      <FaArrowAltCircleLeft onClick={prevSlide} size={30} className='absolute top-[50%] text-blue-500 left-[32px]' />
      
      </div>
      {
        bannerSlides.map((slides, index)=>{
          return <div className='' >
          {index === current && (<img className='bg-contain bg-center w-full h-full  rounded-xl' src={slides.image} alt="" />)}
          </div>
})
      }
    </div>
  )
}

export default Hero