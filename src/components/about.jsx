import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const about = () => {
  useGSAP(()=>{
    gsap.from("#heroText", {
      x: 100,
      y: 100,
      opacity: 0,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#heroText',
        start: '100 bottom',
        end: '+=30vh',
        scrub: true,
      }
    });
    
  },[])
  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#image-clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })
    clipAnimation.to('#about-img', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
  })
  return (
    <div className='relative w-full z-10 text-black min-h-screen ' >
        <div className='flex flex-col items-center relative mb-8 mt-32'>
          <p className='text-xs font-nav'>Welcome to Zentry</p>
        <div className='font-Luck uppercase text-center md:text-[72px] text-[32px] tracking-tight leading-none mt-10 italic font-bold' id='heroText'>
          Discover the World's <br/> the largest shared adventure
        </div>
        <div className='font-para absolute md:bottom-[-80vh] bottom-[-85vh] w-full' id='aboutText'>
          <p className='text-center text-black font-semibold md:text-xl text-[16px] pb-2 md:px-0 px-3'> The Game of Games begins-your life, now an epic MMORPG</p>
          <p className='text-center md:text-[16px] text-[14px] md:px-0 px-3'>Zentry unites every player from countless games and platforms, <br className='hidden md:block'/> both digital and physical, into a united Play Economy</p>
        </div>
      </div>
      <div className='h-dvh w-screen' id="image-clip">
          <div className='[clip-path:polygon(0_0,100%_0,100%_100%,0%_100%] absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]' id='about-img'>
            <img src="./img/about.webp" alt="" className='absolute top-0 left-0 size-full object-cover'/>
          </div>
      </div>
    </div>
  )
}

export default about