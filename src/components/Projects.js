import React,{useState,useEffect} from 'react';
import { projectsData } from '../data';
import { projectSection } from '../data';
import {motion } from 'framer-motion'

import Project from './Project';

const Projects = () => {

    const [animeskill,setAnimeskill]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
          return window.scrollY>1900?setAnimeskill(true):setAnimeskill(false);
      })
  });


    const [item,setItem]=useState({name:"all"});
    const [projects,setProjects]=useState([]);
    const [active,setActive]=useState(0)
    useEffect(()=>{
        if(item.name==='all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter((project)=>{
                return project.category.toLowerCase()===item.name
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e,index)=>{
        setItem({name:e.target.textContent.toLowerCase()});
        setActive(index);
    }
  return (
    <>
        <div >
            <motion.nav animate={{x:[animeskill?-100:0,animeskill?50:0,0]}}  transition={{duration:2,ease: "easeInOut",}} className='mb-8 max-w-a; mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center  '>
                    {projectSection.map((item,index)=>{
                        return <li className={`${active === index ? 'active':''} cursor-pointer capatilize m-4`} onClick={(e)=>{handleClick(e,index)}} key={index}>{item.name}</li>
                    })}
                </ul>
            </motion.nav>
            <motion.div animate={{x:[animeskill?100:0,animeskill?-50:0,0]}}  transition={{duration:2,ease: "easeInOut",}} className='grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 '>
                {projects.map((item,index)=>{
                    return <Project key={index} item={item} />
                    })}
                    
            </motion.div>
        </div>
    </>
  )
}

export default Projects