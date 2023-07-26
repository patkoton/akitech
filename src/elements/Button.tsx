import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

export type ButtonProps = {
  // children?: React.ReactNode; // make the component able to receive children elements
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: 'Contact Us' | 'Get Now' | string; // make the component able to receive children elements
  className?: string
}

export default function Button({children, className}: ButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Contact Us') {
      navigate('/#contact', {replace: true});
    } else {
      navigate('/#contact', {replace: true});
    }
  }

  return (
    <button onClick={handleClick} className={`cursor-pointer border-none rounded-md bg-active outline-none transition-all py-1 md:py-2 + ${children === 'Contact Us' ? 'px-6 md:px-12' : 'px-6 md:px-20'}`}>
      <p className='font-inter font-medium text-sm md:text-lg text-white'>{children}</p>
    </button>
  )
}





