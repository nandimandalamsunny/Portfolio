import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
const Project = ({item}) => {
  const [animeskill,setAnimeskill]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>1600?setAnimeskill(true):setAnimeskill(false);
    })
});
  const [scaled,setScaled]=useState(false);
  const handleClick = ()=>{
    setScaled(!scaled);
  } 

  return (
    <>
   
    <motion.div  key={item.id}   className='pojects flex flex-col items-center text-center'>
      <p className='text-sm mb-3'>{item.category}</p>
      <div className='inline-flex'>
      <a href={item.href} target="_blank" rel="noreferrer"><button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Web URL</button></a>
      <a href={item.url} rel='noreferrer' target="_blank"><button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Github Link</button></a>
      </div>
      <h5 className='text-2xl mb-3'>{item.name}</h5>
    </motion.div>

      </>
  )
}

export default Project