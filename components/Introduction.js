import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'
const { motion } = require('framer-motion')

const Introduction = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -500,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 2,
        // delay: 11,
      }}
      id="home"
      data-aos="fade-in"
      data-aos-duration="3000"
      className="mx-8 mt-5 block pt-5 lg:mx-20 lg:py-32  "
    >
      <h3 className="text-xl text-headerYellow">INTRODUCTION</h3>

      <h1 className="mt-10 font-Cormorant text-[45px] text-gray-300 lg:text-[52px]">
        Web Developer
      </h1>

      <div className="h-[0.11rem] w-[200px] bg-gray-500" />

      <div className="mt-5">
        <p className="font-serif text-[25px] font-light  leading-10 text-paragraphGray lg:text-[30px]">
          I develop custom web applications for businesses or individuals. My
          main tools of choice are ReactJS/NextJS and TailwindCSS
        </p>
      </div>

      <div className="mt-10 mb-8 flex w-[75%] justify-start">
        <span className="mx-auto font-Dafoe text-[45px] font-light text-gray-300">
          Lawe Sosah
        </span>
        {/* <img className="bg-cover h-[100px] w-[450px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950096546215649330/signature_3.png" height={100} width={450} objectFit="cover"/> */}
      </div>
    </motion.div>
  )
}

export default Introduction
