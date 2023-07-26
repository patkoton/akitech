import React from 'react'
import windows from '../assets/images/window_3a.png'
import roof from '../assets/images/roof_1b.png'
import other from '../assets/images/others.png'

const All = () => {
  return (
    <div className='flex flex-col items-center md:flex-row mt-20'>
      <div className='flex-col w-full md:flex md:w-1/3 py-[40px] bg-lightPink'>
        <div className='flex justify-center'>
          <div className='w-20 md:w-36'>
            <img src={windows} alt="" className='w-full' />
          </div>
        </div>
        <p className='font-playfair font-bold text-xl md:text-2xl text-center'>Window</p>
      </div>
      <div className='flex-col w-full md:flex md:w-1/3 py-[60px] bg-lightBlue'>
        <div className='flex justify-center'>
          <div className='w-20 md:w-36'>
            <img src={roof} alt="" className='w-full' />
          </div>
        </div>
        <p className='font-playfair font-bold text-xl md:text-2xl text-center'>Roof</p>
      </div>
      <div className='flex-col w-full md:flex md:w-1/3 py-[62px] bg-lightGreen'>
        <div className='flex justify-center'>
          <div className='w-20 md:w-36'>
            <img src={other} alt="" className='w-full' />
          </div>
        </div>
        <p className='font-playfair font-bold text-xl md:text-2xl text-center'>Other Products</p>
      </div>
    </div>
  )
}

export default All
