import React,{useState,useEffect} from 'react';
import { Typewriter} from 'react-simple-typewriter'
import profile from '../assets/img/two.jpg';
import NandimandalamSunnyResume from '../assets/NandimandalamSunnyResume.pdf';
import { motion } from 'framer-motion';
import wavingHands from '../assets/img/wavingHands.gif';



const Profile = () => {

  const [animeskill,setAnimeskill]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY<800?setAnimeskill(true):setAnimeskill(false);
    })
});
  return (
    <>

    <div  id='home' className='lg:h-[90vh] flex items-center bg-tertiary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container pb-35 mx-auto h-[60vh]'>
            <div className='flex items-center h-full pt-8 '>
                <motion.div   animate={{x:0}} initial={{x:-400}} transition={{duration:0.8,type:"tween",ease: "easeInOut",}} className='flex-1 flex flex-col leftside  items-center lg:items-start'>
                  <p className='text-4xl text-white  mb-[22px]'>Hello,<span ><img alt='...' src={wavingHands} style={{display:"inline-block"}} width="50px"/></span>I'm Sunny </p>
                  <span style={{ color: 'red',  }} className='text-white text-2xl'> <Typewriter words={[' Full Stack Web Developer ', ' Proffesional Coder ', ' Ui/Ux Designer ','Software Developer']} loop={1000} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/></span>
                  <p className='text-white pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg  lg::text-left'>I'm an Energetic and Unique Student pursuing my Bachelor's degree in Engineering at Rajiv Gandhi University of Knowledge Technologies-RK Valley specialized in Electronics and Communication. </p>
                  <a download  href={NandimandalamSunnyResume}  > <button className='btn btn-md bg-primary hover:bg-accent md:btn-lg transition-all'>My Resume</button></a>
                </motion.div>
                <motion.div  animate={{x:0}} initial={{x:-300}} transition={{duration:1.5,type:"tween",ease: "easeInOut",}} className='hidden lg:flex flex-1 justify-end items-end '>
                  <img style={{marginTop:"100px"}} src={profile} alt="profile"/>
                </motion.div>
            </div>   
        </div>
    </div>
        <motion.div className='ProfileShapeCut'  animate={{y:0}} initial={{y:-200}}  transition={{duration:1.8,type:"tween",ease: "easeInOut",}}>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#2f2f82" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,181.3C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>

        </motion.div>

    </>
  )
}

export default Profile
