import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useState } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
const Navbar = () => {

   
    return(
        <div>

            {/* Large screen navbar */}
            <div className="hidden lg:flex mt-5  mx-[25%]">
                <div className="flex justify-between space-x-10 items-center transition-all ease-out duration-300">
                    
                    <div className="flex-col space-y-3 group transition-all duration-300 ease-out">
                        <Link
                        activeClass="text-headerYellow"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        >
                        
                        <HomeIcon className="h-10 w-10 text-gray-400  cursor-pointer hover:scale-125 transition-all ease-out duration-500" />

                        </Link>
                        
                        {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
                    </div>

                    <div className="flex-col space-y-3 group transition-all duration-300 ease-out">
                     <Link
                        activeClass="text-headerYellow"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        >
                        <PersonIcon className="h-10 w-10 text-gray-400  cursor-pointer hover:scale-125 transition-all ease-out duration-500" />
                        
                        </Link>
                        {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
                    </div>

                    <div className="flex-col space-y-3 group transition-all duration-300 ease-out">
                    <Link
                        activeClass="text-headerYellow"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        >
                        
                        <WorkIcon className="h-10 w-10 text-gray-400  cursor-pointer hover:scale-125 transition-all ease-out duration-500" />
                        </Link>
                        {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
                    </div>

                    <div className="flex-col space-y-3 group transition-all duration-300 ease-out">
                    <Link
                        activeClass="text-headerYellow"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        >
                        
                        <PhoneIcon className="h-10 w-10 text-gray-400  cursor-pointer hover:scale-125 transition-all ease-out duration-500" />
                    </Link>
                        {/* <span className="hidden group-hover:flex text-white transition-all duration-300 ease-out">Home</span> */}
                    </div>
                    {/* <p className="text-gray-400">Menu</p>
                    <MenuIcon className="text-gray-400 h-24 cursor-pointer"/> */}

                </div>
            </div>

            {/* Smallscreen navbar */}

           
        </div>
     
    )
}

export default Navbar