import React, { useEffect, useState, useRef } from 'react'
import { IoIosPaperPlane } from "react-icons/io"; 
import { LuAudioLines } from "react-icons/lu";
import { VscMenu } from "react-icons/vsc";
import Button from './Button' 
import { useWindowScroll } from 'react-use'
import gsap from 'gsap';
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const {y: currentY} = useWindowScroll();
  const navContainerRaf = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const navBar = useRef();
  useEffect(() => {
      if (currentY === 0) {
        document.querySelector('#nav').classList.remove('bg-black');
        document.querySelector('#nav').classList.remove('opacity-0');
        setIsVisible(true);
      }
      else if (currentY > prevScrollY) {
        document.querySelector('#nav').classList.add('bg-black');
        document.querySelector('#nav').classList.add('opacity-0');
        setIsVisible(false);
      }
      else{
        document.querySelector('#nav').classList.remove('opacity-0');
        setIsVisible(true);
      }
      setPrevScrollY(currentY);
  }, [currentY])

  const menuClickHandler = () => {
    setIsClicked(!isClicked);
  }
  useEffect(() => {
    gsap.to(navContainerRaf.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.5,
    });
  }, [isVisible])
  

  const links = ['nexus', 'vault', 'prologue', 'about', 'contact']
  return (
    <div className='w-screen md:h-22 h-fit z-50 px-2 md:px-6 py-3 overflow-y-hidden fixed' ref={navBar} id='navbar'>
        <div id='nav' className={` flex rounded-xl h-full px-4 py-2 md:py-0 items-center justify-between flex-col md:flex-row ${isClicked ? 'bg-black md:bg-transparent backdrop-blur-sm' : 'bg-none backdrop-blur-none'}`} ref={navContainerRaf}>
          <div className='flex h-full items-center gap-10 text-white w-full md:w-fit justify-between '>
            <img className='w-11 h-11 object-contain' src="./img/logo.png" alt="" />
            <div className='hidden md:block'>
              <Button title={'products'} addition={'!bg-white'} rightIcon={<IoIosPaperPlane />} id={'products'}/>
            </div>
            <div className='flex items-center gap-4 md:hidden'>
              <div className='cursor-pointer'>
                <LuAudioLines />
              </div>
              <div className='cursor-pointer block md:hidden' onClick={menuClickHandler}>
                <VscMenu />
              </div>
            </div>
          </div>
          <div className={`text-white md:flex md:w-fit w-full py-5 md:py-0 md:gap-10 ${isClicked ? 'flex flex-col' : 'hidden'}`}>
            <ul className={`md:flex `}>
              {links.map((link, index) => (
                <li key={index} className='nav-hover-btn py-2 md:py-0'>{link}</li>
              ))}
            </ul>
            <div className='cursor-pointer hidden md:block'>
              <LuAudioLines />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar