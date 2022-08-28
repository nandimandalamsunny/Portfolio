import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Social from './Social'
// import name from '../../assets/img/name.png'

const Header = () => {
  return (
    <>
    <div className='bg-tertiary flex h-30 items-center fixed top-0 w-full text-white z-10 transition-all duration-300'>
        <div className='container m-2 h-full flex items-center justify-between mr-0'>
        <div className='ml-3'>
        <a href="!#">
            <h1 className='text-white text-[15px]'>NANDIMANDALAM SUNNY</h1>
        </a>
        </div>
            <div className='hidden lg:block'>
                <Navbar/>
            </div>
            <div className='hidden lg:block ml-11'>
                <Social />
            </div>
            <div className='lg:hidden'>
                <NavbarMobile />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header