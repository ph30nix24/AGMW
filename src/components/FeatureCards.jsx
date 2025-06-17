import React from 'react'
import FeatureButton from './FeatureButton'
const FeatureCards = ({videoSrc, title, paraGraph, adition}) => {
  return (
    <div className={` border border-gray-600 rounded-lg overflow-hidden md:mb-8 mb-4 relative ${adition}`}>
        <video src={videoSrc} className='w-full h-full object-cover object-center' autoPlay muted loop />
        <div className='absolute top-0 left-0 w-full h-full flex justify-between md:px-6 px-3 md:py-4 py-3 flex-col'>
            <div>
                <h1 className='text-white md:text-[62px] text-[42px] font-Luck leading-none font-extralight uppercase'>{title}</h1>
                <p className='text-gray-100 font-para text-sm pt-2' dangerouslySetInnerHTML={{ __html: paraGraph }} />
            </div>
            <div className='justify-self-end'>
                <FeatureButton />
            </div>
        </div>
    </div>
  )
}

export default FeatureCards