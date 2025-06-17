import React from 'react'
import FeatureButton from './FeatureButton'
import { IoIosPaperPlane } from "react-icons/io";
import FeatureCards from './FeatureCards';


const Feature = () => {
  return (
    <div className='w-full min-h-screen bg-black md:px-12 px-3 pt-32'>
        <div className='font-para w-full h-fit md:px-4 pb-20'>
            <p className='text-white text-[18px] text-center md:text-start'>Into the Metagame Layer</p>
            <p className='text-gray-400 pt-1 md:text-start text-center'>
                Immerse yourself in a rich and ever-expanding universe <br className='hidden md:block text-[14px] md:text-[16px]'/> where a vibrant array of products converge into an <br className='hidden md:block text-[14px] md:text-[16px]'/> interconnected overlay experience on your world
            </p>
        </div>
        <FeatureCards videoSrc='./videos/feature-1.mp4' title="radiant" paraGraph="A cross-platform metagame app, <br/> turning your activities across Web2 <br/> and Web3 games into a rewarding adventure." adition="w-full h-[500px]"/>   
        <div className='w-full md:h-[700px] min-h-screen flex md:flex-row flex-col md:gap-8 md:pb-8 gap-4 pb-4'>
            <FeatureCards videoSrc='./videos/feature-2.mp4' title="zigma" paraGraph="An anime and gaming-inspired NFT <br/> collection-the IP primed for <br/> expansion" adition="md:w-1/2 w-full h-full" />
            <div className='w-full md:w-1/2 h-full flex flex-col md:gap-8 gap-4'>
                <FeatureCards videoSrc="./videos/feature-3.mp4" title="nexus" paraGraph="A gamified social hub, adding a new <br/> dimension of play to social <br/> interaction for Web3 communities" adition="w-full h-1/2 !mb-0" />
                <FeatureCards videoSrc="./videos/feature-4.mp4" title="azul" paraGraph="A cross-world AI Agent-elevating <br/> your gameplay to be more fun and <br/> productive." adition="w-full h-1/2 !mb-0" />
            </div>
        </div>
        <div className='w-full h-[400px] flex md:flex-row flex-col gap-8 pb-8'>
            <div className='w-full md:w-1/2 h-full overflow rounded-lg bg-blue-700 relative'>
                <div className='absolute top-0 left-0 w-full h-full  flex justify-between md:px-6 px-3 md:py-4 py-3 flex-col'>
                    <div>
                        <h1 className='text-black md:text-[62px] text-[32px] font-Luck leading-none font-extralight uppercase'>
                            More <br/> Coming <br/> soon.
                        </h1>
                    </div>
                    <div className='justify-self-end self-end text-5xl'>
                        <IoIosPaperPlane/>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-full overflow-hidden rounded-lg relative'>
                <video src="./videos/feature-5.mp4" className='w-full h-full object-cover object-center ' autoPlay muted loop type="video/mp4" />
            </div>
        </div>
    </div>
  )
}

export default Feature