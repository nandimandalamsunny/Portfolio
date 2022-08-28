import React,{useState} from 'react'
import {BarData,PieData} from '../ChartData';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';


const Charts = () => {
    const [bardata,setBarData] = useState({
        labels:BarData.map(item => item.label),
        datasets:[{
          label:'Skills',
          data:BarData.map(item => item.value),
          backgroundColor:["#d99965","#585d9a","#bccc40","#61DAFB","#3E863D","#b4613e","#097DC7"],
            borderWidth:2,
            borderColor:'grey',
            hoverBorderWidth:3,
            hoverBorderColor:'white',
            hoverBackgroundColor:["#cf7e3c","#2e39c4","#daf035","#34aebe","#4daf29","#e36029","#0d75ff"]
        }]
      });

      const [linedata,setLineData] = useState({
        labels:PieData.map(item => item.label),
        datasets:[{
          label:'Skills',
          data:PieData.map(item => item.value),
            borderWidth:2,
            borderColor:'white',
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.3,
            
        }]
        
      });
  return (
    <>  
      <h2 className='section-title text-center'>Skill Set</h2>
        <div className='chartmain'>

            <div className='bardata'>
      <h4 className='text-3xl text-center '>Technical Skills</h4>
            <BarChart   Bardata={bardata}/>
            </div>
            <div>
            </div>
            <div className='piedata'>
            <h4 className='text-3xl text-center '>Interpersonal Skills</h4>
            <LineChart LineChart={linedata}/>
            </div>
        </div>
    </>
  )
}

export default Charts