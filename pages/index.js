import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from './components/About'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import RightSide from './components/RightSide'
import Skills from './components/Skills'

const Home = () => {

  const [scrolled, setScrolled] = useState(false);

  const moveNav = () => {
      if(window.scrollY>120){
          setScrolled(true);
      }else{
          setScrolled(false)
      }
  }
  
  useEffect(function mount() {
      function onScroll(){
          console.log("scrolled?",scrolled);

      }
      onScroll();
      
      window.addEventListener("scroll",moveNav);

      return function unMount(){
          window.removeEventListener("scroll", moveNav)
      }
  
  })
  
  return (
    <div className="bg-blackishBg h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* 
      <nav className='fixed -right-0 mr-32'>
          <Navbar />
      </nav> */}
      <main className="lg:flex block">
          {/* Left Side */}

          <div className={scrolled ? "lg:w-[70%] lg:border-r border-gray-500  order-2 md:order-1 ":"lg:w-[60%] lg:border-r border-gray-500  order-2 md:order-1"}>
            <Introduction />

            <About />

            <Skills />

            <Portfolio />
          </div>

          {/* Right Side */}

          <div className={scrolled ? "lg:w-[30%] flex align-middle lg:fixed -right-0 order-1 md:order-2":"lg:w-[40%] flex align-middle lg:fixed -right-0 order-1 md:order-2"}>
              
              <div className="block">
                  <Navbar />

                  <RightSide />
              </div>
             
          </div>
      </main>
    </div>
  )
}

export default Home
