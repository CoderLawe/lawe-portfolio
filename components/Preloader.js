import React, { useEffect, useState, useContext } from 'react'
import BlenderIcon from '@mui/icons-material/Blender'
import CoffeeIcon from '@mui/icons-material/Coffee'
import { Typewriter } from 'react-simple-typewriter'
import CodeIcon from '@mui/icons-material/Code'
import PencilIcon from '@mui/icons-material/Create'
import HandwritingPreloader from '../components/HandwritingPreloader'
import { DotLoader } from 'react-spinners'
import { LoadedContext } from './context/ClickedContext'
// import { motion } from "framer-motion";
const { motion } = require('framer-motion')

function Preloader() {
  const [loaded, setLoaded] = useContext(LoadedContext)

  const resetLoading = () => {
    setLoaded(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => resetLoading(), 4500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div
      // Uncomment className when typewriter is fixed. Use Framer Instead?

      className={
        loaded
          ? 'hidden'
          : ' relative left-0 top-0 z-[60]  flex h-[100vh] w-screen items-center justify-center  overflow-hidden bg-black transition-all'
      }

      // className="relative z-[60] mx-auto flex h-[100vh] w-[100%] items-center justify-center  overflow-hidden overscroll-none bg-black transition-all"
    >
      <HandwritingPreloader />
    </div>
  )
}

export default Preloader
