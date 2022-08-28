import React,{useState,useEffect} from 'react';
import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from 'chart.js/auto';
import {motion } from 'framer-motion'

const LineChart = ({LineChart}) => {

  const [animeskill,setAnimeskill]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>1150?setAnimeskill(true):setAnimeskill(false);
    })
})

  return (
    <>
    {
      animeskill && <motion.div
      animate={{
        scale: [0.5, animeskill?0.5:0,  animeskill?1:0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
     className='piechart'>
          <Line height={300} width={300} data={LineChart} 
          options = {{  resposive: true, maintainAspectRatio: true, scales: {
                      y: {
                        beginAtZero: true          
                        }
            }      
            }} />
    </motion.div>
     }
     </>
  )
}

export default LineChart
