import React from 'react'
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
const Footer = () => {
  const icons = [ FaDiscord, FaTwitter, FaYoutube, FaMedium]
  return (
    <div className='w-full h-[12vh] md:h-[8vh] px-8 text-black bg-blue-700'>
      <div className='w-full h-full flex md:flex-row flex-col md:justify-between items-center py-2 md:py-0'>
        <p className='text-sm font-para'>© Nova 2024 . All rights reserved.</p>
        <div className='flex items-center text-xl py-2 md:py-0 cursor-pointer'>
          {
            icons.map((Icon, index) => (
              <Icon key={index} className='mx-2'/>
            ))
          }
        </div>
        <p className='text-sm font-para'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer