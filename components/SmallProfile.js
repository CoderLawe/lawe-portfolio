import React from 'react'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import Carousel from 'react-responsive-carousel'
import styles from '../styles/styles.module.css'
import {
  useSpring,
  useTransition,
  animated,
  to,
  Spring,
} from '@react-spring/web'
import { useRef, useEffect, useState } from 'react'
const { motion } = require('framer-motion')

function SmallProfile({ scrolled }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -500,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 11.5,
      }}
    >
      <div className="mx-[7.5] mt-[70px] h-[520px] w-[320px] border border-gray-500 px-8 py-10 lg:mx-[15%] lg:mt-20 lg:h-[580px] lg:px-10 ">
        <img
          className="h-[320px] bg-cover object-contain lg:w-[300px] "
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
  )
}

export default SmallProfile
