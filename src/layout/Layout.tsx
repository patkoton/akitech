import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/new_logo.png'
import '../App.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/#work' },
  { name: 'Contact', href: '/#contact' },
]

export default function Layout(props: any) {

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
    <Disclosure as="nav" className="bg-deepBlue sticky top-0 z-10 py-5 md:py-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-5 md:mx-12 lg:mx-48">
            <div className="relative flex h-6 md:h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <img className="block h-8 w-auto" src={logo} alt="AKERA" />
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-center items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Medium Device NavLinks */}
                <div className="hidden sm:ml-6 sm:block md:pl-5 lg:pl-6 xl:pl-20">
                  <div className="flex space-x-4 md:space-x-12">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-1 xl:px-2 py-2 rounded-md text-base' +
                          (isActive ? 'bg-deepBlue text-white font-semibold' : 'text-white font-medium')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
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
                        return 'block px-3 py-1 rounded-md text-base font-medium' +
                        (isActive ? 'bg-deepBlue text-white' : 'text-white')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-gray-300'>
        <div className='max-w-7xl min-h-screen mx-5 md:mx-12 lg:mx-48'>
          {props.children}
        </div>
    </div>



    {/* FOOTER */}
    <footer>
      <div className='bg-deepBlue h-16 flex flex-wrap justify-center items-center text-roboto'>
        <p className='text-white font-medium text-xs md:text-sm'>PatPortfolio@2023. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
};