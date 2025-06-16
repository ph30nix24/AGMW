import React, { useRef, useState } from 'react'
import Button from './Button';
import { IoIosPaperPlane } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NewHero = () => {
    const nextVideoRef = useRef(null);
    const [CurrentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
    const totalVideos = 4;
    const clickHandler = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    }
    useGSAP(() => {
        if(hasClicked) {
            gsap.set('#next-video', {visibility : 'visible'});
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play()
            });
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, [CurrentIndex])
    useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
        
      },
    });
  });
  return (
    <div className='h-screen w-screen relative overflow-x-hidden z-10'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100'>

            <div className=''>

                <div className='[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 size-64 overflow-hidden rounded-lg cursor-pointer'>
                    <div onClick={clickHandler} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100'>
                        <video src={getVideoSrc((CurrentIndex % totalVideos) + 1)}
                        autoPlay
                        muted
                        loop
                        id='current-video'
                        ref={nextVideoRef}
                        className='size-64  object-cover object-center'
                        />
                    </div>
                </div>
                <video id='next-video' src={getVideoSrc(CurrentIndex)} className='size-64 object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible' autoPlay muted loop />
                <video  src={getVideoSrc(CurrentIndex)} className='w-screen h-screen object-cover object-center' autoPlay muted loop ref={nextVideoRef}/>
            </div>
            <h1 className='absolute md:top-24 md:left-10 top-[15%] left-3 md:text-[132px] text-[62px]  uppercase font-Luck text-white tracking-tighter leading-none italic font-bold'>
                redefi<b>n</b>e
            </h1>
            <p className='absolute md:top-55 md:left-12 md:text-[16px] top-[25%] left-3 text-[12px] text-white font-para leading-normal'>
                Enter the Metagame Layer <br/> Unleash the Play Economy
            </p>
            <div className='absolute md:top-72 md:left-12 top-[32%] left-3' >
                <Button id="watch" title="Watch Trailer" leftIcon={<IoIosPaperPlane/>}/>
            </div>
            <h1 className='absolute md:bottom-10 md:right-10 md:text-[132px] text-[62px] right-3 bottom-3 uppercase font-Luck text-white tracking-tighter leading-none z-40 italic font-bold'>
                gami<b>n</b>g
            </h1>
        </div>
            <h1 className='absolute md:bottom-10 md:right-10 md:text-[132px] text-[62px] right-3 bottom-3 z-1  uppercase font-Luck text-black tracking-tighter leading-none italic font-bold'>
                gami<b>n</b>g
            </h1>
    </div>
  )
}

export default NewHero