import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/all";
import { IoIosPaperPlane } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);
const hero = () => {
  useGSAP(()=>{
    gsap.from(".heroText", {
      opacity: 0,
      duration: 2
    });
    gsap.set('#heroFrame', { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '#heroFrame',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      }
    });
  }
  )
  return (
    <div className='h-screen w-screen bg-black relative flex justify-center items-end px-[40px] py-[20px] text-white overflow-y-hidden' id='heroFrame'>
      <video className='h-screen w-screen object-cover absolute top-0 left-0 z-1' autoPlay muted loop>
        <source src="/videos/hero-1.mp4" type="video/mp4" />
      </video>
      <div className="heroText z-10 relative flex flex-col justify-start items-start w-full h-[90%]">
        <h1  className='text-[162px] heroText uppercase font-Luck text-white tracking-tight leading-none h-1/4'>
            redefine
        </h1>
        <div className='h-1/2 mt-2'>
            <p>
                Enter the Metagame Layer 
            </p>
            <p className='mb-6'>Unleash the Play Economy</p>
            <button className='bg-[#EDFF66] text-black font-nav py-3 px-7 rounded-full text-[12px] uppercase flex items-center gap-2 cursor-pointer'>
                <IoIosPaperPlane />
                Watch trailer
            </button>
            </div>
        <h1 className='text-[162px] uppercase font-Luck text-white tracking-tight justify-self-end self-end leading-none h-1/4'>
            gaming
        </h1>
      </div>
    </div>
  )
}

export default hero