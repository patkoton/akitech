import Sections from './Sections'
import { image2 } from '../data'

const Roofs = () => {
  return (
    <div id='roofings'>
      <Sections headingH1='Roofing'
                img1={image2.r_img1}
                img2={image2.r_img2}
                img3={image2.r_img3}
                img4={image2.r_img4}
                img5={image2.r_img5}
      />
    </div>
  )
}

export default Roofs
