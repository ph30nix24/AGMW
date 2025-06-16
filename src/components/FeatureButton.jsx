import React from 'react'
import { IoIosPaperPlane } from "react-icons/io";
const FeatureButton = () => {
  return (
    <button className='flex gap-2 items-center text-xs bg-black px-6 py-2 rounded-full border-gray-700 border-1 text-gray-700 cursor-pointer'>
        <div className='text-xs'>
          <IoIosPaperPlane />
        </div>
        <div className='uppercase'>
          coming soon
        </div>
    </button>
  )
}

export default FeatureButton