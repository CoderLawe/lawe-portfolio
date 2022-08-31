import { useState } from "react";

import Typewriter from "typewriter-effect";
const preloader = ({ passed }) => {

    const [loaded, setLoaded] = useState(false);
    return(
        <div>

{/*  preloader start */}
            
{/* <div className={passed ? "hidden":"items-center bg-coolYellow flex h-[100vh] w-full justify-center left-0 fixed top-0 transition-all z-[60]"}> */}
{/* <div className={passed ? "hidden":"items-center bg-blackishBg flex h-[100vh] w-full justify-center left-0 fixed top-0 transition-all z-[60]"}> */}
<div className={passed ? "hidden": "bg-loaderBg h-[100vh] w-full"}>
<div className="w-full h-[100vh] flex  items-center justify-center bg-blackishBg bg-opacity-95 left-0 fixed top-0 transition-all z-[60]">
  <div className="flex justify-center ">
                <div className="flex-col space-y-5">
                  <div className="flex space-x-4 transition-all duration-500 items-center">

                    <div className="text-gray-300 my-auto font-Cormorant text-[45px] block space-y-5 items-center">
                            <Typewriter 
                                onInit={(typewriter)=> {
            
                                typewriter
                                
                                .typeString("Hi.. I'm Lawe")
                                    
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString("Feel free to have a look around!")
                                .start();
                                }}
                            />           

                            {/* <h1>Plane Icon</h1>           */}
                    </div>
 
                 
                    
                    {/* <h1 className="text-white font-Cormorant text-[40px]"><span data-aos="zoom-in-up" data-aos-duration="5000" className="text-[50px] text-coolYellow font-Cormorant animate ">B</span>ites</h1>
                    <h2 className="text-white font-Cormorant text-[40px] animate-pulse ">on the</h2>
                    <h2 className="text-white font-Cormorant text-[40px] animate-pulse">double </h2> */}

                  </div>

                  {/* <LocalDiningIcon className="text-coolYellow h-36"/> */}

                </div>
                
              </div>
          </div>
           
    </div>
            

        {/* Preloader end */}
        </div>
    )
}

export default preloader