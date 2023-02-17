import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import PhoneIcon from '@mui/icons-material/Phone'
import { useEffect, useState } from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'
const { motion } = require('framer-motion')

const Navbar = () => {
  return (
    <motion.nav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 12,
      }}
    >
      {/* Large screen navbar */}
      <div className="mx-[25%] mt-5 hidden  lg:flex">
        <div className="flex items-center justify-between space-x-10 transition-all duration-300 ease-out">
          <div className="group flex-col space-y-3 transition-all duration-300 ease-out">
            <Link
              activeClass="text-headerYellow"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <HomeIcon className="h-10 w-10 cursor-pointer text-gray-400  transition-all duration-500 ease-out hover:scale-125 hover:text-white" />
            </Link>

            {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
          </div>

          <div className="group flex-col space-y-3 transition-all duration-300 ease-out">
            <Link
              activeClass="text-headerYellow"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <PersonIcon className="h-10 w-10 cursor-pointer  text-gray-400 transition-all duration-500 ease-out hover:scale-125 hover:text-white" />
            </Link>
            {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
          </div>

          <div className="group flex-col space-y-3 transition-all duration-300 ease-out">
            <Link
              activeClass="text-headerYellow"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <WorkIcon className="h-10 w-10 cursor-pointer  text-gray-400 transition-all duration-500 ease-out hover:scale-125 hover:text-white" />
            </Link>
            {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
          </div>

          <div className="group flex-col space-y-3 transition-all duration-300 ease-out">
            <Link
              activeClass="text-headerYellow"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <PhoneIcon className="h-10 w-10 cursor-pointer  text-gray-400 transition-all duration-500 ease-out hover:scale-125 hover:text-white" />
            </Link>
            {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
          </div>
          {/* <p className="text-gray-400">Menu</p>
                    <MenuIcon className="text-gray-400 h-24 cursor-pointer"/> */}
        </div>
      </div>

      {/* Smallscreen navbar */}
    </motion.nav>
  )
}

export default Navbar
