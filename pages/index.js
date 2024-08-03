import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import RightSide from '../components/RightSide'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '../components/Menu'
import HandwritingPreloader from '../components/HandwritingPreloader'
import {
  ClickedContext,
  LoadedContext,
} from '../components/context/ClickedContext'
import Blog from '../components/Blog'
import Preloader from '../components/Preloader'
import Aos from 'aos'
import NewPortfolio from '../components/NewPortfolio'
import ComingSoon from '../components/ComingSoon'

const { motion } = require('framer-motion')

const Home = () => {
  const [scrolled, setScrolled] = useState(false)
  const [clicked, setClicked] = useContext(ClickedContext)
  const [passed, setPassed] = useState(false)
  const [loaded, setLoaded] = useContext(LoadedContext)
  const moveNav = () => {
    if (window.scrollY > 120) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const hasPassed = () => {
    setPassed(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      hasPassed()
    }, 11000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(function mount() {
    function onScroll() {
      console.log('scrolled?', scrolled)
    }
    onScroll()

    window.addEventListener('scroll', moveNav)

    return function unMount() {
      window.removeEventListener('scroll', moveNav)
    }
  })

  return (
    <div className="h-full  bg-blackishBg">
      <Head>
        <title>Lawe Sosah | Digital Portfolio</title>
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/839784544798638090/889140379251802122/download.png"
        />
        <meta
          name="description"
          content="Lawe Sosah is a freelance web developer with experience in ReactJs/NextJS"
        />
      </Head>
      {/* 
      <nav className='fixed -right-0 mr-32'>
          <Navbar />
      </nav> */}
      {/* <div className="">
        {' '}
        <Preloader passed={passed} />{' '}
      </div> */}
      <div
        className={
          clicked
            ? 'fixed -right-0 flex  justify-end lg:hidden '
            : 'fixed -right-0 mr-10 flex justify-end pt-5 lg:hidden'
        }
      >
        <Menu />
      </div>

      {/* Temporary coming soon component */}

      {/* <ComingSoon /> */}
      {/* Change below className and add lg:flex and remove hidden */}
      {/* <main className={loaded ? 'flex-col lg:flex  ' : 'hidden'}> */}
      <main
        className={
          // loaded
          'flex-col transition-all duration-300 ease-in lg:flex'
          // : 'hidden'
        }
      >
        {/* Left Side */}

        <motion.div
          className={
            scrolled
              ? 'order-2 border-gray-500  transition-all duration-500 ease-in-out sm:order-1  lg:w-[65%] lg:border-r '
              : 'order-2 border-gray-500 transition-all  duration-500 sm:order-1 lg:w-[60%] lg:border-r'
          }
        >
          <div className="">
            {/* Small screen right side */}
            <div className="flex justify-center lg:hidden ">
              <RightSide />
            </div>
            <Introduction />
            <Portfolio />

            <About />

            {/* Left side */}

            <div className="flex  w-full  lg:mx-12 lg:pl-0">
              <div className="flex-col space-y-2 ">
                <h2 className="ml-3 font-Cormorant text-[50px] font-light text-gray-400 ">
                  Tailor Made Solutions
                </h2>
                <div className="h-[0.11rem] w-[200px] bg-gray-500" />

                <div className="ml-6 px-5 lg:w-[80%] lg:px-0">
                  <p className="font-Cormorant text-[25px] font-light leading-[50px] text-paragraphGray lg:text-[30px]">
                    Whether it's a simple landing page or an admin dashboard,
                    all my services are fully customizable and tailor made to
                    suit you
                  </p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div></div>
            {/* <Skills /> */}

            {/* <NewPortfolio /> */}

            <Contact />

            <div className="mx-8">
              <h1 className="text-2xl text-headerYellow">Blog(coming soon)</h1>
            </div>
            <Blog />

            <Footer />
          </div>
        </motion.div>

        {/* Right Side */}

        <div
          className={
            scrolled
              ? '-right-0  order-1 align-middle transition-all  duration-500 ease-in-out md:order-first lg:fixed lg:w-[35%] '
              : '-right-0 order-1 flex transition-all duration-500  ease-in-out md:order-first lg:fixed lg:w-[40%]'
          }
        >
          <div className="block">
            <Navbar />

            {/* Large screen right side */}
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
