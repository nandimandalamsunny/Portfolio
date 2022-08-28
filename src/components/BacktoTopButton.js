import React, { useState, useEffect } from 'react';
import {  animateScroll as scroll } from 'react-scroll';
import {motion} from 'framer-motion'


const BackTopBtn = () => {
  const [animeButton,setAnimeButton]=useState(false);

  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("fixed");
  useEffect(() => {
    window.addEventListener('scroll', () => {
        window.scrollY>200 && setAnimeButton(true)

    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    // 
    return (
       
        <motion.button onClick={() => scrollToTop()} animate={{x:animeButton?1400:0,y:animeButton?500:0,backgroundColor:animeButton?"red":"#2F2F82"}}  transition={{duration:3,easeIn:[0.17, 0.67,1],x: { type: "spring", stiffness: 300 },y: { type: "spring", stiffness: 300 }}} className='2 hover:bg-accent-hover fixed text-white w-12 h-12 rounded-full  left-1 top-20 cursor-pointer  flex justify-center items-center transition-all'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
        </svg>
        </motion.button>
      
    );
  }
};

export default BackTopBtn;