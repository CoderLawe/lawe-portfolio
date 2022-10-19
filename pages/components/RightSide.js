import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Carousel from "react-responsive-carousel"
import styles from '../../styles/styles.module.css'
import { useSpring, useTransition, animated, to, Spring } from '@react-spring/web'
import  { useRef, useEffect, useState } from 'react'
import Profile from "./Profile";
import Gallery from "./Gallery";
import SmallProfile from "./SmallProfile";

const RightSide = ({ scrolled }) => {
    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          zoom: 0,
          x: 0,
          y: 0,
          config: { mass: 5, tension: 350, friction: 40 },
        })
      )
      const wheel = (y) => {
        const imgHeight =10;
    
       
      return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
    }
    
    
      const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

    return(
       <div>
        <div className="hidden lg:flex">
          <Profile scrolled={scrolled}/>

        </div>

        <div className="flex lg:hidden">
          <SmallProfile scrolled={scrolled} />

        </div>
          {/* <Gallery /> */}
       </div>
    )
}

export default RightSide