import React,{useState,useEffect} from 'react';
import About from './components/About';
import BacktoTopButton from './components/BacktoTopButton';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Services from './components/Services';
import Technologies from './components/Technologies';
import ProgressBar from 'react-progressbar-on-scroll'
import Charts from './components/Charts/Charts/Charts';
import ReactSwitch from 'react-switch';
import darkmode from './assets/img/darkmode.png'
import {  animateScroll as scroll } from 'react-scroll';


const Main = () => {
  const [theme,setTheme] = useState("light")
  const [checked,setChecked] = useState(false)
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"))
    setChecked(!checked)
  }

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();



window.onload = ()=>{
  recognition.start();
recognition.onresult = (e)=>{
  console.log(e.results[0][0].transcript)
  const text = e.results[0][0].transcript;
switch(text){
  case "up":
  case "scroll up":
  case "go up":
    window.scrollBy({top: -300,behavior: 'smooth'});
    break;
  case "down":
  case "go down":
  case "scroll down":
    window.scrollBy({top: 300,behavior: 'smooth'});
    break;
  case "home":
  case "go home":
  case "go to home":
  case "scroll home":
    scroll.scrollToTop()
    break;
  case "about":
  case "go to about":
  case "go to about page":
  case "scroll about":
    window.scrollTo({top:750,behavior: 'smooth'})
    
    break;
  case "portfolio":
  case "go to portfolio":
  case "go to portfolio page":
  case "scroll portfolio":
    window.scrollTo({top:2250,behavior: 'smooth'})
    break;

  case "services":
  case "go to services":
  case "go to services page":
  case "scroll services":
    window.scrollTo({top:3700,behavior: 'smooth'})
    break;
  case "contact":
  case "go to contact":
  case "go to contact page":
  case "scroll contact":
    window.scrollTo({top:4250,behavior: 'smooth'})
    break;
  case "bottom":
  case "go to bottom":
  case "go to bottom page":
  case "scroll bottom":
    scroll.scrollToBottom()
    break;
    case "dark mode":
    case "dark mode on":
        setTheme("dark")
        setChecked(true)
        break;
    case "light mode":
    case "light mode on":
        setTheme("light")
        setChecked(false)
  default:
    break;

}}}
recognition.onend = function() {
  recognition.start();
}

  return (

<>
      <div id={theme}>
          <ProgressBar
            color="red"
            height={5}
            direction="right"
            position="top"
            gradientColor="#eee"
          />      
          <Header />
          <Profile />
          <About />
          <Technologies />
          <Charts />
          <Portfolio />
          <Services />
          <Contact />
          <Footer />
          <BacktoTopButton />
        </div>



</>
  )
}

export default Main
