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
    <button onClick={handleClick} className='cursor-pointer border-none rounded-md bg-active outline-none transition-all px-12 py-4'>
      <p className='font-inter font-medium text-base md:text-lg text-white'>{children}</p>
    </button>
  )
}





