import Logo from '../assets/images/logo.png'

const Lazy = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <img alt='Lazy Loader Logo' src={Logo} className='w-20 md:w-40' />
        </div>
    )
  }
  
export default Lazy