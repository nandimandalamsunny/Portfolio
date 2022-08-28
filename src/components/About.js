import { useEffect,useState } from 'react';
import React from 'react';
import Image from '../assets/img/two.jpg';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion'


const About = () => {

  const [animeService,setAnimeService]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>550?setAnimeService(true):setAnimeService(false);
    })
})
  return (
    <section className=' about' id='about'>
      <div className='container mx-auto'>
      <h2 className='section-title about-heading text-center'>About me</h2>
      
        <div className='flex flex-col xl:flex-row gap-24'>
          <motion.img
            className='object-cover h-[400px] w-[566px] md:mx-auto lg:mx-0 '
            src={Image}
            animate={{borderRadius: ["0%",animeService?"8%":"0%"]}}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h4 className='text-3xl lg:text-2l  lg:font-bold mb-3 '> NANDIMANDALAM SUNNY</h4>
              <p className=' text-accent'>Full Stack Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hey,I'm Nandimandalam Sunny.I am a pre-final year student Pursuing Bachelor's degree in Engineering at Rajiv Gandhi University of Knowledge Technologies-RK Valley specialized in Electronics and Communication.
               <br />
                <br />
                I am a person who always wanted to something unique and creative.I build a reponsive,user friendly and user interactive full stack web application.I use MERN stack to build Full-Stack Websites.
              </p>
            </div>
            <motion.button animate={{backgroundColor:animeService?"#c7304b":"#2F2F82"}}  whileHover={{ backgroundColor: "#2F2F82",scale:1.2 }} transition={{delay:0.5}} className='btn btn-md '>
              <Link to='contact' spy={true}  smooth={true}  duration={500}   offset={-70}  className='transition-all duration-100'> Contact me</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;