//  icons
import {  FiTag, FiMail, FiMapPin,} from 'react-icons/fi';
import { AiFillHome } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import { RiHonourFill,RiShoppingBag2Fill,RiAirplayLine,RiListSettingsFill,RiMailAddFill,RiGithubFill,RiLinkedinBoxFill,RiMailFill,RiFolderReceivedFill } from "react-icons/ri";


// skills images
import techImg1 from './assets/img/technologies/html5.png';
import techImg2 from './assets/img/technologies/css3.png';
import techImg3 from './assets/img/technologies/js.png';
import techImg4 from './assets/img/technologies/reactjs.png';
import techImg5 from './assets/img/technologies/nodejs.png';
import techImg6 from './assets/img/technologies/express.png';
import techImg7 from './assets/img/technologies/mongoDb.png';
import techImg8 from './assets/img/technologies/git.png';


// navigation links
export const navigation = [
  {
    name: 'Home',
    href: 'home',
    icon:<AiFillHome />,
  },
  {
    name: 'About',
    href: 'about',
    icon:<RiHonourFill />,

  },
  {
    name: 'Portfolio',
    href: 'portfolio',
    icon:<RiShoppingBag2Fill />,

  },
  {
    name: 'Services',
    href: 'services',
    icon:<RiListSettingsFill />,

  },
  {
    name: 'Contact',
    href: 'contact',
    icon:<RiMailAddFill />,

  },
];

// social links
export const social = [
  {
    icon: <RiLinkedinBoxFill fontSize="1.5rem"  />,
    href: 'https://www.linkedin.com/in/nandimandalamsunny2809/',
  },
  {
    icon: <RiMailFill fontSize="1.5rem"/>,
    href: 'mailto:nandimandalamsunny2890@gmail.com',
  },
  {
    icon: <RiGithubFill fontSize="1.5rem"/>,
    href: 'https://github.com/nandimandalamsunny',
  },
  {
    icon:<span ><BsFillPersonFill fontSize="1.5rem"/></span>,
    href:"tel:+8008726523",
  },
];
export const projectsData = [
  {
    id: '1',
    name: "KeepkIT",
    category: 'Front-End',
    href:"https://keepit-tools.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/keepit"
  },
  {
    id: '2',
    name: "TextToggler",
    category: 'Front-End',
    href:"https://texttoggler.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/TextToggler"
  },
  {
    id: '3',
    name: 'NNcommunity',
    category: 'Front-End',
    href:"https://nn-community.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/TextToggler"
  },
  {
    id: '4',
    name: 'GyandaanNews',
    category: 'Front-End',
    href:"https://weatherbug170.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/Gyandaan_news-assistant",
  },
  {
    id: '5',
    name: 'PickIT',
    category: 'Front-End',
    href:"https://pickit-v1.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/Pickit-V1"
  },
  {
    id: '6',
    name: 'CryptoKat',
    category: 'Front-End',
    href:"https://crypto-kat.netlify.app/",
    url:"https://github.com/NANDIMANDALAM-SUNNY/Crypto-Base"
  },
  {
    id:'7',
    name:'City Mapper',
    category:'MERN stack',
    href:'https://city-mapper.herokuapp.com/',
    url:'https://github.com/NANDIMANDALAM-SUNNY/CityMapper-'
  }
];

// projects section data
export const projectSection = [
  {
    name: 'All',
  },
  {
    name: 'Front-End',
  },
  {
    name: 'MERN stak',
  },
];

// skill
export const skills = [
  {
    image: techImg1,
  },
  {
    image: techImg2,
  },
  {
    image: techImg3,
  },
  {
    image: techImg4,
  },
  {
    image: techImg5,
  },
  {
    image: techImg6,
  },
  {
    image: techImg7,
  },
  {
    image: techImg8,
  },
];

// service icons and details
export const services = [
  {
    icon: <RiAirplayLine fontSize="2rem" />,
    name: 'Web Design',
    description:
      'I Create a good looking and Interactive Web Designs , which is easy to use and easy to understand.',
  },
  {
    icon: <RiListSettingsFill fontSize="2rem"/>,
    name: 'Web Development',
    description:
      ' I develop Full-Stack which reflects accurate content and information and ensure a user-friendly experience. ',
  },
  {
    icon: <RiFolderReceivedFill fontSize="2rem"/>,
    name: 'SEO',
    description:
      'I optimize the website for search engines to get the best results.',
  },
  {
    icon: <FiTag fontSize="2rem"/>,
    name: 'High-quality content',
    description:
      'I prefer to write content that is clear, concise, and easy to understand in my projects.',
  },
];


// contact us icons and details
export const contact = [
  {
    icon: <FiMail />,
    title: 'Do You have a question?',
    subtitle: 'Feel free to mail mail me.',
    description: 'Email me at nandimandalamsunny2890@gmail.com',
    href: 'mailto:nandimandalamsunny2890@gmail.com',


  },
  {
    icon: <FiMapPin />,
    title: 'I live in',
    subtitle: 'Cuddapah',
    description: 'Andhra Pradesh',
    href:"https://www.google.com/maps/place/Vempalli,+Andhra+Pradesh+516329/@14.3666868,78.4457117,15z/data=!3m1!4b1!4m5!3m4!1s0x3bb3bd5bbc7ad141:0x99328ff8d7485248!8m2!3d14.3661521!4d78.45856"
  },
];