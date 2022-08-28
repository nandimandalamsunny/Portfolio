
import React,{useState,useEffect} from 'react';
import { contact } from '../data';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [data, setData] = useState({
    name:'',
    subject: '',
    email: '',
    message:'',
  })
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      name:'',
      subject: '',
      email: '',
      message:'',
    })
    console.log(data);
    e.target.reset();
  }

  const notify = () => toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
             Agnes Lily
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Thank You for Contacting me😀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),{duration: 2000})
  const [animeContact,setAnimeContact]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
         
          window.scrollY>3210?setAnimeContact(true):setAnimeContact(false);
          
    })
})

const [size,setSize] = useState("false")
  return (
    <section className='section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title '> Contact me </h2>
          <p className='subtitle'>Interested in working together ? Fill out the form below with some info about your project and i will get back to you as soon as possible I can.</p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row' >
        {/* Left Side */}
        <motion.form animate={{scale:animeContact?1:0.5}} transition={{duration:1.5}} className='space-y-8 w-full max-w-[780px]' onSubmit={submitHandler} >
            <div className='flex gap-8'>
              <input className='input bg-tertiary  text-white rounded-1xl'  name='name' type='text' placeholder='Your name' />
              <input className='input bg-tertiary  text-white rounded-1xl'  name='email' type='email' placeholder='Your email' />
            </div>
            <input className='input bg-tertiary  text-white rounded-1xl' name='subject' type='text' placeholder='Subject' />
            <textarea className='textarea bg-tertiary text-white rounded-1xl' name='message'  placeholder='Your message' ></textarea>
            <button onClick={notify} type='submit' className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button>
            <Toaster />
          </motion.form>
          {/* right Side */}
          <motion.div
          animate={{scale:animeContact?1:0.5}} 
          transition={{duration:1.5}}
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description,href } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                   
                <a  className='text-base' target="_blank" href={href}> {icon}</a>

                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;