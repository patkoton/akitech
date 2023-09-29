import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import logo from '../assets/images/logo.png'
import whiteLogo from '../assets/images/logo_white.png'
import '../App.css'
import Button from '../elements/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/#works' },
  { name: 'Contact', href: '/#contact' },
]
const footer = [
  { name: 'Others', href: '/#others' },
  { name: 'Roofings', href: '/#roofings' },
  { name: 'Windows', href: '/#windows' },
  { name: 'Contact Us', href: '/#contact' },
]
const icon = [
  { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/kehinde.emmanuel.14/' },
  { icon: <FiFacebook />, href: 'https://web.facebook.com/kehinde.emmanuel.14' },
  { icon: <BsChat />, href: 'https://wa.link/91ftps' },
]

export default function Layout(props) {

  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
    {/* NAVBAR */}
    <Disclosure as="nav" className="bg-gradient-to-r from-white from-70 to-lightCyan to-70 sticky top-0 z-10 py-5 md:py-0 font-inter">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-5 lg:mx-20">
            <div className="relative flex h-6 md:h-20 items-center justify-around">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-active hover:text-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'>
                    <img className="block h-8 w-auto" src={logo} alt="AKITECH" />
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-center items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Medium Device NavLinks */}
                <div className="hidden sm:block md:flex items-center md:space-x-12 lg:space-x-48">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-1 xl:px-2 py-2 rounded-md text-lg' +
                          (isActive ? 'bg-white text-black font-bold' : 'text-active font-medium')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div>
                    <Button children='Contact Us' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* Small Device NavLinks */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) => {
                        return 'block px-3 py-2 rounded-md text-base font-medium' +
                        (isActive ? 'bg-white text-dark' : 'text-dark')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
              <div className='pl-2'>
                <Button children='Contact Us' />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-white'>
        <div className='max-w-7xl min-h-screen'>
          {props.children}
        </div>
    </div>



    {/* FOOTER */}
    <footer>
      <div className='bg-active py-5 md:flex md:flex-wrap justify-between items-center text-roboto px-5 lg:px-20'>
        <div>
          <Link to='/'>
            <img className="block h-8 w-auto" src={whiteLogo} alt="AKITECH" />
          </Link>
        </div>
        <div className='flex items-center space-x-1'>
          {footer.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className=
                'px-1 xl:px-2 py-2 rounded-md text-sm lg:text-lg text-white font-medium'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex items-center space-x-2'>
          {icon.map((item) => (
            <Link
              to={item.href}
              className=
                'px-1 xl:px-2 py-2 rounded-md text-sm lg:text-lg text-white font-medium'
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
    </>
  )
};