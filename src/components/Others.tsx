import Sections from './Sections'
import { image3 } from '../data'

const Others = () => {
  return (
    <div>
      <Sections headingH1='Other Products'
                img1={image3.o_img1}
                img2={image3.o_img2}
                img3={image3.o_img3}
                img4={image3.o_img4}
                img5={image3.o_img5}
      />
    </div>
  )
}

export default Others
