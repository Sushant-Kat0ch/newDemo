'use client'
import { useState } from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import { IoIosCall } from "react-icons/io";

function FloatingWindow() {
  const [expanded, setExpanded] = useState(false);

  const handleHover = () => {
    setExpanded(true);
  };

  const handleLeave = () => {
    setExpanded(false);
  };

  return (
    <ul
      className={`fixed right-10 bottom-10 bg-secondary flex justify-center rounded-full w-10 transition-all duration-300 flex flex-col p-3 ${expanded ? 'w-36 rounded-lg justify-start items-start' : 'items-center'}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <li className={`px-2 whitespace-nowrap cursor-pointer hover:bg-secondary-dark rounded-full mb-2 ${expanded ? 'bg-transparent flex items-center' : ''}`} onMouseEnter={handleHover}>
        <span className={`h-6 w-6 flex items-center justify-center rounded-full p-1  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`}>
          <RiWhatsappLine className={`text-white text-xl  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`} />
        </span>
        <span className={`text-9 text-white ${expanded ? 'inline-block ml-2' : 'hidden'}`}>What's App</span>
      </li>
      <li className={`px-2 whitespace-nowrap cursor-pointer hover:bg-secondary-dark rounded-full mb-2 ${expanded ? 'bg-transparent flex items-center' : ''}`} onMouseEnter={handleHover}>
        <span className={`h-6 w-6 flex items-center justify-center rounded-full p-1  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`}>
          <IoIosCall className={`text-white text-xl  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`} />
        </span>
        <span className={`text-9 text-white ${expanded ? 'inline-block ml-2' : 'hidden'}`}>
          <a href="tel:+971555964691">+971 555964691</a>
        </span>
      </li>
      <li className={`px-2 whitespace-nowrap cursor-pointer hover:bg-secondary-dark rounded-full mb-2 ${expanded ? 'bg-transparent flex items-center' : ''}`} onMouseEnter={handleHover}>
        <span className={`h-6 w-6 flex items-center justify-center rounded-full p-1  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`}>
          <IoIosCall className={`text-white text-xl  ${expanded ? 'bg-transparent' : 'bg-secondary-dark'}`} />
        </span>
        <span className={`text-9 text-white ${expanded ? 'inline-block ml-2' : 'hidden'}`}> Request a call</span>
      </li>
    </ul>
  );
}

export default FloatingWindow;

