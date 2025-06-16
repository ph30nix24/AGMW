import React from 'react'
import Button from './Button'

const Story = () => {
  return (
    <div className='bg-black md:h-[135vh] h-[80vh] w-full relative z-10'>
        <p className='text-blue-50 text-xs uppercase w-full text-center md:pt-32 pt-16'>
            The multiversal ip world
        </p>
        <h1 className='font-Luck font-bold pt-8 md:text-[72px] text-[42px] w-full text-center leading-none text-white bg-clip-text uppercase z-40 relative mix-blend-difference'>
            the story of <br/> a hidden realm
        </h1>
        <div className='[clip-path:polygon(22.53%_6.38%,_81.14%_22.25%,_81.14%_75%,_19.43%_92.25%)] mx-auto rotate-y-12 overflow-hidden w-[100%] md:h-[90vh] h-[35vh] rounded-[42px] absolute md:top-[18%] top-[25%] left-0 z-10'>
            <img className='w-full h-full object-contain rounded-2xl object-center' src="./img/entrance.webp" alt="" />
        </div>
        <div className='absolute bottom-0 right-0 md:w-[30%] w-screen h-fit md:pb-16 pb-8 px-3 md:px-0 md:block flex flex-col items-center'>
            <p className='text-white font-para text-sm pt-2 md:text-start pb-6 text-center'>
                Where the realms converge, like Zentry and the <br  className='hidden md:block'/> boundless piller. Discover its secrets and shape your <br className='hidden md:block'/> fate amidst infinite oppertunities.
            </p>
            <Button title="Discover Prologue" addition="!bg-white"/>
        </div>
    </div>
  )
}

export default Story