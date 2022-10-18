import React, { useEffect, useState } from 'react'
import BlenderIcon from "@mui/icons-material/Blender";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Typewriter } from "react-simple-typewriter";
import CodeIcon from '@mui/icons-material/Code';
import PencilIcon from "@mui/icons-material/Create";
// import { motion } from "framer-motion";
const { motion } = require("framer-motion");


function Preloader() {

    const [loaded, setLoaded] = useState(false);

    const resetLoading = () => {
        setLoaded(true)
      }

   
    useEffect(() => {
            const timer = setTimeout(() => resetLoading(), 10000);
            return () => clearTimeout(timer);
    },[])
  return (
            
    <div className={loaded ? "hidden":"items-center bg-black flex h-[100vh] w-screen  justify-center left-0 fixed top-0 transition-all z-[60]"}>
            <div className="flex justify-center">
            <div className="flex-col space-y-5">

                <motion.h1 
                initial={{
                  opacity:0.5
                }}
                animate={{
                  opacity:1
                }}

                transition={{
                  duration:2
                }}
                className='font-Cormorant font-light text-[45px] lg:text-[45px] text-headerYellow text-center'>Lawe sosah </motion.h1>
                <div className="flex  justify-center space-x-4 items-center">
                {/* <h1 className="text-yellow-200 font-Cormorant text-[28px]">I develop</h1> */}

                <div className="font-Cormorant italic text-yellow-100 text-[28px] ">
                    <Typewriter 
                            words={['Tailor made','Fully Responsive','SEO friendly']}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            />
                </div>

                    
                </div>
            
                <div className="flex justify-center space-x-4 transition-all duration-500 items-center">
               
                    <div className="flex  space-x-4 items-center">
                        <CodeIcon className="h-10 w-10 text-green-800 animate-pulse"/>
                        <PencilIcon className="h-10 w-10 text-yellow-500 animate-pulse"/>
                        <CoffeeIcon className="h-10 w-10 text-yellow-800 animate-pulse"/>

                    {/* <h1>Blast Smoothies</h1> */}
                </div>
               


                
               
                </div>

                {/* <LocalDiningIcon className="text-coolYellow h-36"/> */}

            </div>
            
            </div>
        </div>
           

  )
}

export default Preloader