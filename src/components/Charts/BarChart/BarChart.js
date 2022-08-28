import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as Chartjs } from 'chart.js/auto';

const BarChart = ({Bardata}) => {
  const [animeskill,setAnimeskill]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        return window.scrollY>1450?setAnimeskill(true):setAnimeskill(false);
    })
})
  return (
    <>
    {
      animeskill && <div  className='barchart' >
            <Bar height={300} data={Bardata}/>
      </div>
    }
      
    </>
  )
}

export default BarChart