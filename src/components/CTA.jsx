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
            <p className='text-base text-justify md:text-xl mt-5 md:mt-10'>Akitech is the innovative aluminium system that sets new standards. It revolutionises aluminium products with its unique reverse butt joint. It's faster to fabricate, saves materials, and reduces stockholding. It's adaptable, attractive, simple to install, and maintenance requirements are minimal.</p>
            <div className='mt-5 md:mt-10'>
                <Button children='Contact Us' />
            </div>
        </div>
      
    </div>
  )
}

export default CTA
