import React,{useState,useEffect} from 'react';
import {skills} from '../data';
import {motion} from 'framer-motion'

const Technologies = () => {
  const [animeskill,setAnimeskill]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>570?setAnimeskill(true):setAnimeskill(false);
    })
})

  return (
    <>
        <div className='py-1 section-title  mt-5'>
        <h1 className='text-center'>Technologies I use</h1>
            <div className='container mx-auto'>
                <div   className='grid grid-cols-8 md:grid-flex-row'>
                    {skills.map((curr,item)=>{
                        return <motion.div  className='flex items-center justify-center ' key={item}>
                            <motion.img animate={{y:animeskill?0:-100}} transition={{duration:2}}  src={curr.image} alt=""/>
                        </motion.div>
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Technologies