import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Carousel from "react-responsive-carousel"
import styles from '../../styles/styles.module.css'
import { useSpring, useTransition, animated, to, Spring } from '@react-spring/web'
import React, { useRef, useEffect, useState } from 'react'

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
        <div className="">
            {/* <div className={scrolled ? 'lg:mx-[15%] mt-10 mx-[7.5] lg:mt-20 lg:h-[580px] w-[350px] border border-gray-500 lg:px-10 px-8 py-10 ':'lg:mx-[25%]  mt-20 lg:h-[600px] lg:w-[400px] w-[350px] border border-gray-500 lg:px-10 px-8 py-10 '}>
                <img  className={scrolled ? "object-contain h-[320px] lg:w-[300px] bg-cover ": "bg-cover h-[320px] w-[350px]"} src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={450} width={350} objectFit="cover"/>

                <h3 className="text-gray-400 flex justify-center mt-5 font-bold">HI THERE! I'M</h3>

                <div className="flex justify-center">
                    <p className="text-gray-400 mt-2 text-3xl whitespace-nowrap "><span className="text-green-700 mr-12">[</span>Lawe Sosah<span className="text-green-700 ml-12">]</span></p>
                   
                </div>

                <div className="flex justify-between mt-5 mx-10">
                    <a target="_blank" href="https://github.com/CoderLawe">
                    <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>

                    </a>
                    <a target="_blank" href="https://www.instagram.com/the_lawe_way">
                        <InstagramIcon  className="text-headerYellow h-12 cursor-pointer"/>

                    </a>
                        <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>

                </div>
            </div> */}
<div data-aos="fade-in"  className={styles.container}>
      <animated.div

        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <animated.div style={{ transform: wheelY.to(wheel) }}>
          {/* {imgs.map((img, i) => (
            <div key={i} style={{ backgroundImage: `url(${img})` }} />
          ))} */}
          <img src="https://cdn.discordapp.com/attachments/839784544798638090/991006223904153641/pexels-gillian-harrison-8190692.jpg"/>
          {/* <video className="object-cover" src="/videos/video-3.mp4" autoPlay loop muted/> */}
        </animated.div>
      </animated.div>
    </div>
        </div>
    )
}

export default RightSide