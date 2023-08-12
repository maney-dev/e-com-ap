import Image from 'next/image'
import React from 'react'
import woman_img from '../public/assets/womanimg.jpg'

const Hero = () => {
  return (
    <div className='h-[500px] w-full flex justify-center mt-16 mb-[20rem]'>
        <div className=' relative h-[500px] w-10/12 mx-auto'>
            <Image className='h-[500px] object-cover rounded-xl' src={woman_img}/>
            <div className='absolute top-[10rem] left-[2.5rem] flex flex-col items-center gap-4'>
                <span className='text-white text-4xl'>Get something nice <span className='text-orange-500 '>sunglasses</span></span>
                <span className='text-[#efefefe8] text-3xl'> At a distance of click </span>
                <button className='mt-6px bg-orange-500 text-[#efefef] px-8 py-2 rounded-xl text-[18px] transition-all hover:bg-orange-600'>See now </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
