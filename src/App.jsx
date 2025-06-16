import React from 'react'
import NewHero from './components/NewHero'
import Navbar from './components/Navbar'
import About from './components/About'
import Feature from './components/Feature'
import Story from './components/Story'
import Contect from './components/Contect'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-purple-50 relative overflow-x-hidden no-scrollbar select-none'>
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