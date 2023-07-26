import React from 'react'
import Sections from './Sections'
import { image1 } from '../data'

const Windows = () => {
  return (
    <div id='windows'>
      <Sections headingH1='Windows'
                img1={image1.w_img1}
                img2={image1.w_img2}
                img3={image1.w_img3}
                img4={image1.w_img4}
                img5={image1.w_img5}
      />
    </div>
  )
}

export default Windows
