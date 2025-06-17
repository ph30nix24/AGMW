import React, { useRef } from 'react'
import NewHero from './components/NewHero'
import Navbar from './components/Navbar'
import About from './components/About'
import Feature from './components/Feature'
import Story from './components/Story'
import Contect from './components/Contect'
import Footer from './components/Footer'

import gsap from 'gsap'

import { useState, useEffect } from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return position;
}

const App = () => {
  const movingDiv = useRef();
  const {x: currentX, y: currentY} = useMousePosition();
  useEffect(() => {
    if(movingDiv.current){
      gsap.to(movingDiv.current, {
        x: currentX,
        y: currentY,
        ease: 'bonus',
      })
    }
    if(!movingDiv.current){
      console('null');
    }
  },[currentX, currentY])
  return (
    <div className='w-full bg-purple-50 relative overflow-x-hidden no-scrollbar select-none'>
      <div className='w-8 h-8 bg-white fixed top-0 left-0 rounded-full z-20 mix-blend-difference' ref={movingDiv}>

      </div>
      <Navbar/>
      <NewHero/>
      <About/>
      <Feature/>
      <Story/>
      <Contect/>
      <Footer/>
    </div>
  )
}

export default App