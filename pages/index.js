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
import Footer from "./components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from './components/Menu'
import { ClickedContext } from './components/context/ClickedContext'
import Blog from './components/Blog'
import Preloader from "./components/Preloader";
import Aos from "aos";
const { motion } = require("framer-motion");


const Home = () => {

  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useContext(ClickedContext);
  const [passed, setPassed] = useState(false);

  const moveNav = () => {
      if(window.scrollY>120){
          setScrolled(true);
      }else{
          setScrolled(false)
      }

  }

  const hasPassed = () => {
    setPassed(true);
  }


  useEffect(() => {
    const timer =  setTimeout(() => {
      hasPassed()
    },11000);

    return() => clearTimeout(timer);
  
  },[])
   
  
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
      <div className="">
        <Preloader passed={passed}/>
      </div>
              <div className={clicked ? "flex lg:hidden justify-end  fixed -right-0":"flex lg:hidden justify-end mr-10 pt-5 fixed -right-0"}>
                <Menu />
            </div>
      <main className="lg:flex flex-col">
          {/* Left Side */}

          <motion.div 
          initial={{
            opacity:0,
            x:-200
          }}
          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:2,
            delay:12
          }}
          className={scrolled ? "lg:w-[65%] transition-all  ease-in-out duration-500 lg:border-r border-gray-500  order-2 sm:order-1 ":"lg:w-[60%] lg:border-r border-gray-500  order-2 sm:order-1"}>
            
            <div className="">
              <div className="flex justify-center lg:hidden "> 
                <RightSide />
              </div>
              <Introduction />

              <About />

              {/* Left side */}

              <div className="lg:mx-12 pl-[12.5%]  w-full flex">
                <div className="flex-col space-y-2 ">
                  <h2 className="font-Cormorant text-gray-400 font-light text-[50px]"><span className="text-headerYellow">Tailor Made</span> Solutions</h2>
                  <div className="lg:w-[80%] w-[70%]">
                    <p className="text-paragraphGray text-[25px] lg:text-[30px] font-Cormorant my-10 leading-10 font-light">Whether it's a simple landing page or an admin dashboard, all my services are fully customizable and tailor made to suit you</p>

                  </div>
                </div>
                
              </div>

              {/* Right side */}
              <div>

            </div>
              {/* <Skills /> */}

              <Portfolio />

              <Contact />

              <div className="mx-8">
                  <h1 className="text-headerYellow text-2xl">Blog(coming soon)</h1>
              </div>
              <Blog />

              <Footer />
            </div>
         
          </motion.div>

          {/* Right Side */}

          <div className={scrolled ? "lg:w-[35%]  transition-all ease-in-out duration-500  align-middle lg:fixed -right-0 order-1 md:order-first ":"lg:w-[40%] transition-all ease-in-out duration-500 flex  lg:fixed -right-0 order-1 md:order-first"}>
              
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
