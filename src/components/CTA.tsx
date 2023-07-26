import person from '../assets/images/person.png'
import Button from '../elements/Button'

const CTA = () => {
  return (
    <div className='font-inter bg-darkWhite px-5 md:px-12 lg:px-40 pt-10 md:pt-20 pb-20 md:flex items-center md:space-x-4'>
        <div>
            <img src={person} alt="" />
        </div>
        <div className='w-full md:w-[450px] text-black'>
            <h2 className='font-medium text-xl md:text-3xl'>Still Confused? Or Have a Big Project in Mind</h2>
            <p className='text-base text-justify md:text-xl mt-5 md:mt-10'>Lorem ipsum dolor sit amet consectetur. Nunc justo quam turpis bibendum sit velit dis neque. Erat nunc in non fermentum mauris tempor sed. Dictum diam vel in pharetra gravida proin sit. Etiam vel ultricies dui lobortis sed neque eget. Cras egestas cursus sed arcu scelerisque mollis ornare ipsum bibendum. Purus varius vulputate blandit aliquet ultrices. Amet massa diam pellentesque a venenatis sed. Ut congue.</p>
            <div className='mt-5 md:mt-10'>
                <Button children='Contact Us' />
            </div>
        </div>
      
    </div>
  )
}

export default CTA
