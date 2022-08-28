import React,{useState,useEffect} from 'react';
import {services} from '../data';
import {motion} from 'framer-motion';

const Services = () => {
  const [animeService,setAnimeService]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>2520?setAnimeService(true):setAnimeService(false);
    })
})


  return (
    <>
      <div className='m-8 ' id='services'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
            <h2 className='section-title '>What I Include In my Projects</h2>
            </div>
            <div className='grid lg:grid-cols-4 gap-8'>
              {services.map((service,index)=>{
                const {icon,name,description} = service;
                return(
                  <motion.div  animate={{opacity:animeService?1:0}} transition={{duration:2}} className='bg-tertiary p-4 rounded-2xl' key={index}>
                    <div className='text-accent rounded w-12 h-12 flex justify-center items-center mb-8 text-[28]px'>
                    {icon}
                    </div>
                    <h4 className='text-xl m-2 text-white font-medium'>{name}</h4>
                    <p className='text-white m-2'>{description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
      </div>
    </>
  )
}

export default Services