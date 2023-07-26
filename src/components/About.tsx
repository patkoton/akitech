import React from 'react'
import window1 from '../assets/images/window_1.png'
import window2 from '../assets/images/window_2.png'

const About = () => {
  return (
    <div className='bg-white from-white from-70 bg-gradient-90 to-lightCyan to-70 flex flex-col items-center md:flex-row md:space-x-4'>
      <div className='flex-col hidden md:flex md:w-1/3'>
        <img src={window1} alt="" className='w-full' />
      </div>
      <div className='flex-col md:flex md:w-1/3 justify-center items-center text-black py-10 md:py-0'>
        <div className='text-center'>
            <h1 className='font-inter font-medium text-base md:text-lg'>Aluminium . Showcase</h1>
            <h4 className='text-3xl md:text-4xl lg:text-5xl font-playfair font-normal'>Building Materials</h4>
            <p className='text-xs font-inter font-normal mt-2.5'>Experts in all kinds of Aluminum windows, casement windows, Electric fence wire, Roofing system, partitioning and all.</p>
        </div>
      </div>
      <div className='flex-col hidden md:flex md:w-1/3'>
        <img src={window2} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default About
