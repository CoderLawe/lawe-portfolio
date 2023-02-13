import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import Carousel from 'react-responsive-carousel'
// import styles from '../styles/styles.module.css'
import {
  useSpring,
  useTransition,
  animated,
  to,
  Spring,
} from '@react-spring/web'
import { useRef, useEffect, useState, useContext } from 'react'
import { HoveredContext } from './context/ClickedContext'
const { motion } = require('framer-motion')

const Profile = ({ scrolled }) => {
  const [hovered, setHovered] = useContext(HoveredContext)

  return (
    // hovered && (
    <motion.div
      initial={{
        opacity: 0,
        x: 500,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 2,
        delay: 11.5,
      }}
    >
      <div
        className={
          scrolled
            ? 'mx-[7.5] mt-10 w-[350px] border border-t border-gray-500 px-8 py-10 lg:mx-[15%] lg:mt-20 lg:h-[580px] lg:px-10  '
            : 'mt-20 w-[350px] border border-gray-500 px-8 py-10 lg:ml-[12.5%] lg:h-[600px] lg:w-[400px] lg:px-10 '
        }
      >
        <img
          className={
            scrolled
              ? 'h-[320px] bg-cover object-contain lg:w-[300px] '
              : 'h-[320px] w-[350px] bg-cover'
          }
          src="https://cdn.discordapp.com/attachments/839784544798638090/1074610213111480320/profile-pic_3.png"
          height={450}
          width={350}
          objectFit="cover"
        />

        <h3 className="mt-5 flex justify-center font-bold text-gray-400">
          HI THERE! I'M
        </h3>

        <div className="flex justify-center">
          <p className="mt-2 whitespace-nowrap text-3xl text-gray-400 ">
            <span className="mr-12 text-green-700">[</span>Lawe Sosah
            <span className="ml-12 text-green-700">]</span>
          </p>
        </div>

        <div className="mx-10 mt-5 flex justify-between">
          <a target="_blank" href="https://github.com/CoderLawe">
            <GitHubIcon className="h-12 cursor-pointer text-headerYellow" />
          </a>
          <a target="_blank" href="https://www.instagram.com/the_lawe_way">
            <InstagramIcon className="h-12 cursor-pointer text-headerYellow" />
          </a>
          <GitHubIcon className="h-12 cursor-pointer text-headerYellow" />
        </div>
      </div>
    </motion.div>
    //     ):
    //     (
    //         <motion.div
    //         initial={{
    //             opacity:0,
    //             x:500
    //         }}

    //         animate={{
    //             opacity:1,
    //             x:0
    //         }}

    //         transition={{
    //             duration:2,
    //             delay:0
    //         }}
    //         >
    //  <div className={scrolled ? 'lg:mx-[15%] mt-10 mx-[7.5] lg:mt-20 lg:h-[580px] w-[350px] border-t border border-gray-500 lg:px-10 px-8 py-10  ':'lg:ml-[12.5%] mt-20 lg:h-[600px] lg:w-[400px] w-[350px] border border-gray-500 lg:px-10 px-8 py-10 '}>
    //                 <img  className={scrolled ? "object-contain h-[320px] lg:w-[300px] bg-cover ": "bg-cover h-[320px] w-[350px]"} src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={450} width={350} objectFit="cover"/>

    //                 <h3 className="text-gray-400 flex justify-center mt-5 font-bold">HI THERE! I'M</h3>

    //                 <div className="flex justify-center">
    //                     <p className="text-gray-400 mt-2 text-3xl whitespace-nowrap "><span className="text-green-700 mr-12">[</span>Lawe Sosah<span className="text-green-700 ml-12">]</span></p>

    //                 </div>

    //                 <div className="flex justify-between mt-5 mx-10">
    //                     <a target="_blank" href="https://github.com/CoderLawe">
    //                     <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>

    //                     </a>
    //                     <a target="_blank" href="https://www.instagram.com/the_lawe_way">
    //                         <InstagramIcon  className="text-headerYellow h-12 cursor-pointer"/>

    //                     </a>
    //                         <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>

    //                 </div>
    //             </div>
    //             </motion.div>            )
  )
}

export default Profile
