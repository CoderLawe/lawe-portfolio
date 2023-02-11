import React, { useEffect, useState } from 'react'
import BlenderIcon from '@mui/icons-material/Blender'
import CoffeeIcon from '@mui/icons-material/Coffee'
import { Typewriter } from 'react-simple-typewriter'
import CodeIcon from '@mui/icons-material/Code'
import PencilIcon from '@mui/icons-material/Create'
import { DotLoader } from 'react-spinners'
// import { motion } from "framer-motion";
const { motion } = require('framer-motion')

function Preloader() {
  const [loaded, setLoaded] = useState(false)

  const resetLoading = () => {
    setLoaded(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => resetLoading(), 10000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div
      className={
        loaded
          ? 'hidden'
          : ' relative left-0 top-0 z-[60]  flex h-[100vh] w-screen items-center justify-center overflow-hidden bg-black transition-all'
      }
    >
      <motion.div
        initial={{
          x: 0,
          opacity: 0,
        }}
        animate={{
          x: [-50, 0],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: 'linear',
        }}
        className="z-52 absolute top-12 left-0 h-[360px] w-[400px] rotate-[12.48deg] bg-white/[0.4] blur-[257px]"
      />
      <div className="flex justify-center">
        <div className="flex-col space-y-5">
          <motion.h1
            initial={{
              opacity: 0.5,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="text-center font-Cormorant text-[45px] font-light tracking-[5px] text-headerYellow lg:text-[45px] "
          >
            Lawe sosah{' '}
          </motion.h1>
          <div className="flex  items-center justify-center space-x-4">
            {/* <h1 className="text-yellow-200 font-Cormorant text-[28px]">I develop</h1> */}

            <div className="text-[28px] italic text-yellow-100 ">
              <Typewriter
                words={['Tailor made', 'Fully Responsive', 'SEO friendly']}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 transition-all duration-500">
            <DotLoader color="#36d7b7" />
            {/* <div className="flex  items-center space-x-4">
              <CodeIcon className="h-10 w-10 animate-pulse text-green-800" />
              <PencilIcon className="h-10 w-10 animate-pulse text-yellow-500" />
              <CoffeeIcon className="h-10 w-10 animate-pulse text-yellow-800" />

            </div> */}
          </div>

          {/* <LocalDiningIcon className="text-coolYellow h-36"/> */}
        </div>
      </div>
    </div>
  )
}

export default Preloader
