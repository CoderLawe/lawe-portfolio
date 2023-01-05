import Image from "next/image";
import Aos from "aos"
import { useEffect } from "react";
const { motion } = require("framer-motion");


const Introduction = () => {

    useEffect(() => {
        Aos.init()
    },[])
    return(
        <motion.div
        initial={{
            opacity:0,
            x:-500
        }}

        animate={{
            opacity:1,
            x:0
        }}

        transition={{
            duration:2,
            delay:11

        }}
         id="home" data-aos="fade-in" data-aos-duration="3000" className="lg:py-32 lg:mx-20 pt-5 mx-8 block mt-5  ">
            <h3 className="text-headerYellow text-xl">INTRODUCTION</h3>

            <h1 className="text-gray-300 text-[45px] lg:text-[52px] mt-10 font-Cormorant">Web Developer</h1>

            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="mt-5">
                <p className="text-paragraphGray text-[25px] lg:text-[30px]  leading-10 font-serif font-light">I develop custom web applications for businesses or individuals. My main tools of choice are ReactJS/NextJS and TailwindCSS</p>
            </div>

            <div className="mt-10 flex justify-start mb-8 w-[75%]">
                <span className="text-gray-300 text-[45px] font-Dafoe font-light mx-auto">Lawe Sosah</span>
                {/* <img className="bg-cover h-[100px] w-[450px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950096546215649330/signature_3.png" height={100} width={450} objectFit="cover"/> */}

            </div>
        </motion.div>
    )
}

export default Introduction