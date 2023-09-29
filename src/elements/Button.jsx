import '../App.css'
import { useNavigate } from 'react-router-dom';


export default function Button({ children }) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Contact Us') {
      navigate('/#contact', {replace: true});
    } else {
      navigate('/#contact', {replace: true});
    }
  }

  return (
    <button onClick={handleClick} className={`cursor-pointer border-none rounded-md bg-active outline-none transition-all py-2 + ${children === 'Contact Us' ? 'px-6 md:px-12' : 'px-6 md:px-20'}`}>
      <p className='font-inter font-medium text-sm md:text-lg text-white'>{children}</p>
    </button>
  )
}





