import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useContext} from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import { ClickedContext} from "../components/context/ClickedContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Menu = () => {
    const [clicked, setClicked] = useContext(ClickedContext);

    const closeSesame = () => {
        setClicked(false)
    }
    return(
        <nav className={clicked && "bg-blackishBg transition-all duration-500 ease-out relative z-50 "}>
            <MenuIcon onClick={() => setClicked(true)} className={clicked ? "hidden": "flex h-12 w-12 cursor-pointer text-gray-400"}/>

            <div className={clicked ? "flex  h-screen w-screen bg-blackishBg   justify-center cursor-pointer" : "hidden"}>
            <CloseIcon onClick={() => setClicked(false)} className="mt-5  h-10 w-10 text-gray-400 "/>

                <div className="flex-col space-y-12 mt-32 align-middle">
                    <Link
                        activeClass="text-headerYellow"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeSesame}
                        >
                        <h3 className="text-gray-400 font-serif hover:text-headerYellow text-xl py-5 transition-all duration-500 ease-out ">HOME</h3>
                    </Link>

                    <Link
                        activeClass="text-headerYellow"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeSesame}
                        >
                        <h3 className="text-gray-400 font-serif hover:text-headerYellow text-xl py-5 transition-all duration-500 ease-out">ABOUT</h3>
                    </Link>

                    <Link
                        activeClass="text-headerYellow"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeSesame}
                        >
                        <h3 className="text-gray-400 font-serif hover:text-headerYellow text-xl py-5 transition-all duration-500 ease-out">PORTFOLIO</h3>

                    </Link>

                    <Link
                        activeClass="text-headerYellow"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeSesame}
                        >
                        <h3 className="text-gray-400 font-serif hover:text-headerYellow text-xl py-5 transition-all duration-500 ease-out">CONTACT</h3>
                    </Link>

                <div className="flex space-x-8 mt-16">
                        <a target="_blank" href="https://github.com/CoderLawe">
                            <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/the_lawe_way">
                            <InstagramIcon  className="text-headerYellow h-12 cursor-pointer"/>
                        </a>
                        <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu