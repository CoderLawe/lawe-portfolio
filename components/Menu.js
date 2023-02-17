import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useContext } from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'
import { ClickedContext } from '../components/context/ClickedContext'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'

const Menu = () => {
  const [clicked, setClicked] = useContext(ClickedContext)

  const closeSesame = () => {
    setClicked(false)
  }
  return (
    <nav
      className={
        clicked &&
        'relative z-50 bg-blackishBg transition-all duration-500 ease-out '
      }
    >
      <MenuIcon
        onClick={() => setClicked(true)}
        className={
          clicked ? 'hidden' : 'flex h-12 w-12 cursor-pointer text-gray-400'
        }
      />
      <div
        className={
          clicked
            ? 'flex  h-screen w-screen cursor-pointer   justify-center bg-blackishBg'
            : 'hidden'
        }
      >
        <CloseIcon
          onClick={() => setClicked(false)}
          className="mt-5  h-10 w-10 text-gray-400 "
        />

        <div className="mt-32 flex-col space-y-12 align-middle">
          <Link
            activeClass="text-headerYellow"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={closeSesame}
          >
            <h3 className="py-5 font-serif text-xl text-gray-400 transition-all duration-500 ease-out hover:text-headerYellow ">
              HOME
            </h3>
          </Link>

          <Link
            activeClass="text-headerYellow"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={closeSesame}
          >
            <h3 className="py-5 font-serif text-xl text-gray-400 transition-all duration-500 ease-out hover:text-headerYellow">
              ABOUT
            </h3>
          </Link>

          <Link
            activeClass="text-headerYellow"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={closeSesame}
          >
            <h3 className="py-5 font-serif text-xl text-gray-400 transition-all duration-500 ease-out hover:text-headerYellow">
              PORTFOLIO
            </h3>
          </Link>

          <Link
            activeClass="text-headerYellow"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={closeSesame}
          >
            <h3 className="py-5 font-serif text-xl text-gray-400 transition-all duration-500 ease-out hover:text-headerYellow">
              CONTACT
            </h3>
          </Link>

          <div className="mt-16 flex space-x-8">
            <a target="_blank" href="https://github.com/CoderLawe">
              <GitHubIcon className="h-12 cursor-pointer text-headerYellow" />
            </a>

            <a target="_blank" href="https://www.instagram.com/the_lawe_way">
              <InstagramIcon className="h-12 cursor-pointer text-headerYellow" />
            </a>
            <GitHubIcon className="h-12 cursor-pointer text-headerYellow" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
