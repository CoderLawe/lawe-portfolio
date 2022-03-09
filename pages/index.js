import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import RightSide from './components/RightSide'
import Skills from './components/Skills'
import MenuIcon from "@mui/icons-material/Menu";
import Menu from './components/Menu'
import { ClickedContext } from './components/context/ClickedContext'

const Home = () => {

  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useContext(ClickedContext);

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
        <title>Lawe Sosah | Digital Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/839784544798638090/889140379251802122/download.png"/>
        <meta name="description" content="Lawe Sosah's Digital portoflio"/>

        </Head>
{/* 
      <nav className='fixed -right-0 mr-32'>
          <Navbar />
      </nav> */}
              <div className={clicked ? "flex lg:hidden justify-end  fixed -right-0":"flex lg:hidden justify-end mr-10 pt-5 fixed -right-0"}>
                <Menu />
            </div>
      <main className="lg:flex flex-col">
          {/* Left Side */}

          <div className={scrolled ? "lg:w-[70%] transition-all  ease-in-out duration-500 lg:border-r border-gray-500  order-2 sm:order-1 ":"lg:w-[60%] lg:border-r border-gray-500  order-2 sm:order-1"}>
            
            <div className="">
              <div className="flex justify-center lg:hidden "> 
                <RightSide />
              </div>
              <Introduction />

              <About />

              <Skills />

              <Portfolio />

              <Contact />
            </div>
         
          </div>

          {/* Right Side */}

          <div className={scrolled ? "lg:w-[30%]  transition-all ease-in-out duration-500  align-middle lg:fixed -right-0 order-1 md:order-first ":"lg:w-[40%] transition-all ease-in-out duration-500 flex align-middle lg:fixed -right-0 order-1 md:order-first"}>
              
              <div className="block">
                  <Navbar />

                <div className="hidden lg:flex">
                  <RightSide scrolled={scrolled} />
                </div>
              </div>
             
          </div>
      </main>
    </div>
  )
}

export default Home
