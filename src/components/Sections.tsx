import React from 'react'
import Button from '../elements/Button';

export type SectProps = {
    headingH1?: React.ReactNode; 
    img1?: string; 
    img2?: string; 
    img3?: string; 
    img4?: string; 
    img5?: string; 
}

const Sections = ({headingH1, img1, img2, img3, img4, img5}: SectProps) => {
  return (
    <div className='bg-darkWhite font-playfair font-semibold text-black pt-20'>
      <h1 className='text-xl md:text-3xl text-center'>{headingH1}</h1>
      <div className='flex items-center flex-nowrap overflow-hidden py-5 md:py-8'>
            <div className='pl-5 md:pl-10 lg:pl-14'>
                <img src={img1} alt="" />
            </div>
            <div className='pl-5 md:pl-10 lg:pl-14'>
                <img src={img2} alt="" />
            </div>
            <div className='pl-5 md:pl-10 lg:pl-14'>
                <img src={img3} alt="" />
            </div>
            <div className='pl-5 md:pl-10 lg:pl-14'>
                <img src={img4} alt="" />
            </div>
            <div className='pl-5 md:pl-10 lg:pl-14'>
                <img src={img5} alt="" />
            </div>
      </div>
      <div className='flex justify-center'>
        <Button children='Get Now' />
      </div>
    </div>
  )
}

export default Sections
