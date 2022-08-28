import React,{useState,createContext} from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

export const store = createContext();

const Navbar = () => {
  return (
    <nav>
      <ul className='flex space-x-8  text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li className='text-white text-lg hover:text-accent  cursor-pointer' key={idx}>
              <Link to={item.href}   activeClass='active'  spy={true}  smooth={true}  duration={500}  offset={-70}  className='transition-all duration-100' >
                  {item.name}
                </Link>
            </li>
          );
        })}
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;