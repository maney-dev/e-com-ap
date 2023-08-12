import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/sungulassesw.png'
import img2 from '../public/assets/headphoness.jpg'
import img3 from '../public/assets/womancap.jpg'

const Categories = () => {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-10/12'>
        {/* title*/}
        <h2 className='mb-8 text-3xl text-[#333]'>Categories</h2>
        <div className='h-full w-full flex justify-between items-center'>
            {/* category*/}
            <Link href='category/sunglasses' className='h-[325px] w-[325px] relative'>
                <Image src={img1} alt="" className='h-full w-full object-cover' />
                <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white'>Sunglasses</span>
            </Link>
            {/* category*/}
            <Link href='category/headphones' className='h-[325px] w-[325px] relative'>
                <Image src={img2} alt="" className='h-full w-full object-cover' />
                <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white' >Headphones</span>
            </Link>
            {/* category*/}
            <Link href='category/hat' className='h-[325px] w-[325px] relative'>
                <Image src={img3} alt="" className='h-full w-full object-cover' />
                <span className='absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white' >Hat and Caps </span>
            </Link>
        </div>
      </div>
    </div>
  )
}

// {homes.map(home => <div>{home.name}</div>)}

export default Categories
