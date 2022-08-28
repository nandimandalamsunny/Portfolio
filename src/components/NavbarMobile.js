import React,{useState} from 'react'
import { navigation } from '../data';
import {XIcon } from '@heroicons/react/outline'
import {MenuAlt4Icon } from '@heroicons/react/outline';
import {motion } from 'framer-motion'
import { Link } from 'react-scroll';

const NavbarMobile = () => {

  const [isOpen,setIsOpen] = useState(false)
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 130,
        damping: 50,
      },},
  };
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <>
   <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <MenuAlt4Icon className='w-8 h-8' />
      </div>
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 bg-tertiary fixed top-0 right-0'
      ></motion.div>
      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen?'visible':''} className={`${isOpen ? 'right-0' : '-right-full'
              } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
            > 
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer absolute top-8 left-10'>
          <XIcon className='w-8 h-8'/>
        </div>
        {navigation.map((curr,i)=>{
          return (
            <li className='text-white mb-8 right-5 hover:text-accent cursor-pointer' key={i} ><Link  to={curr.href} activeClass='active' duration={500} offset={-70} className='transition-all duration-300 text-xl cursor-pointer' onClick={()=>setIsOpen(false)}><span style={{display:"inline-block"}}>{curr.icon} </span>{curr.name} </Link></li>
          )
        })}
      </motion.ul>
      </nav>
    </>
  )
}

export default NavbarMobile