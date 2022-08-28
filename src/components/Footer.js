
import React from 'react';


import {social} from '../data'


const Footer = () => {
  return (
    <footer className='bg-tertiary footer py-10'>
      <div className='container mx-autFagneso'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' target="_blank" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            {/* <img className='name footername' width="50px" src={name} alt='' /> */}
            <h4 className='footername text-white text-[10px]'>Nandimandalam Sunny</h4>
          </div>
          <p className='text-white text-[15px]'>
            &copy; 2022 Nandimandalam Sunny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
