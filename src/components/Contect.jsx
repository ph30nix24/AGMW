import React from 'react'
import Button from './Button'

const Contect = () => {
  return (
    <div className='w-full h-[88vh] flex justify-center items-center relative z-10'>
        <div className='w-[90%] md:w-[95%] md:h-[78%] h-[90%] flex flex-col justify-center items-center relative z-0 bg-black rounded-lg overflow-hidden'>
            <div className='relative flex flex-col md:justify-center justify-start items-center w-full h-full z-40 pt-12 md:pt-0'>
                <p className='text-white text-[10px] uppercase font-para'>
                    join zentry
                </p>
                <h1 className='text-white md:text-[92px] text-[42px] font-Luck font-bold italic uppercase text-center leading-none py-4 pointer-events-none tracking-tighter'>
                    Let's B<b className='uppercase'>u</b>ild the <br/> new era of <br/> gaming together.
                </h1>
                <div>
                    <Button title={"contact us"} addition={"!bg-white"}/>
                </div>
            </div>
            <div className='absolute w-[300px] md:w-[400px] h-[420px] md:h-[520px] md:right-4 md:bottom-1/2 md:translate-y-1/2 overflow-hidden  z-10 [clip-path:polygon(20%_0%,_92%_18%,_78%_100%,_0%_95%)] right-0 bottom-0'>
                <img src="/img/swordman.webp" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='absolute w-[300px] md:w-[400px] h-[420px] md:h-[520px] right-0 bottom-0 md:right-4 md:bottom-1/2 md:translate-y-1/2 overflow-hidden z-20 '>
                <img src="/img/swordman-partial.webp" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='absolute w-[200px] h-[200px] left-[10%] top-0 overflow-hidden z-20 [clip-path:polygon(0%_0%,_100%_0%,_90%_80%,_20%_95%)] hidden md:block'>
                <img src="/img/contact-1.webp" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='absolute w-[300px] h-[220px] left-[4%] bottom-0 translate-y-10 overflow-hidden z-20 [clip-path:polygon(23.62%_17.46%,_100%_40.94%,_78.41%_100%,_0%_100%)] hidden md:block'>
                <img src="/img/contact-2.webp" className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contect