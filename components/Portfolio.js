import Card from './Card'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { useState, useContext } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import {
  FirstContext,
  ModalContext,
  PostContext,
  SecondContext,
  Thirdcontext,
  FourthContext,
  HoveredContext,
} from './context/ClickedContext'
import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CloseIcon from '@mui/icons-material/Close'
import Aos from 'aos'
const Portfolio = () => {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useContext(ModalContext)
  const [post, setPost] = useContext(PostContext)
  const [firstImage, setFirstImage] = useContext(FirstContext)
  const [secondImage, setSecondImage] = useContext(SecondContext)
  const [thirdImage, setThirdImage] = useContext(Thirdcontext)
  const [fourthImage, setFourthImage] = useContext(FourthContext)

  const [hovered, setHovered] = useContext(HoveredContext)
  const handleOpen = (post) => {
    if (modalOpen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  const handleClose = () => {
    setModalOpen(false)
    // setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  //   useEffect(() =>{
  //     images.push(post)
  //     console.log('images',images)
  //   },[post])

  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <div id="portfolio" className="relative z-[10] mx-8  pb-10 lg:mx-12">
      <div className="bg-white/15 absolute top-32 left-0 h-[240px] w-[240px] rotate-[12.95deg] blur-[83px] " />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="pbackdrop-blur-[13.5px] relative my-[25%] rounded-[8px] border-none bg-white bg-opacity-[0.18] py-[10px] focus:outline-none  lg:mx-auto lg:mt-[24px] lg:w-[1200px] lg:px-10 lg:py-10">
          <AiOutlineClose
            onClick={() => handleClose()}
            className="absolute top-[12px] left-[12px] h-[32px] w-[32px] cursor-pointer text-white"
          />

          <div className="hidden gap-x-8 gap-y-4 lg:grid lg:grid-cols-2  ">
            <div className="relative h-[1/2] w-[1/2]">
              <Image
                src={firstImage}
                layout="fill"
                alt="first image"
                objectFit="cover"
              />
            </div>

            <div className="relative h-[300px] w-[1/2]">
              <Image
                src={secondImage}
                layout="fill"
                alt="first image"
                objectFit="cover"
              />
            </div>

            <div className="relative h-[300px] w-[1/2]">
              <Image
                src={
                  thirdImage
                    ? thirdImage
                    : 'https://cdn.discordapp.com/attachments/1160095645747662948/1203072330369343488/istockphoto-1222357475-612x612.jpeg?ex=65cfc36b&is=65bd4e6b&hm=d734d2079f555bb1e7a58cbbdbdbde7009456291fbc3ed693936044adaf70ed9&'
                }
                layout="fill"
                alt="first image"
                objectFit="cover"
              />
            </div>

            {fourthImage && (
              <div className="relative h-[300px] w-[1/2]">
                <Image
                  src={fourthImage}
                  layout="fill"
                  alt="first image"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
          {/* When image is clicked, image src is set */}
          <AiOutlineClose
            onClick={() => handleClose()}
            className="absolute top-[12px] left-[12px] h-[32px] w-[32px] cursor-pointer text-white"
          />
          <div className="mx-[5px] grid grid-cols-2 gap-y-4 gap-x-4  overflow-y-scroll lg:hidden">
            <div className="relative h-[150px] w-[1/2] ">
              <Image src={firstImage} layout="fill" objectFit="cover" />
            </div>

            <div className="relative h-[150px] w-[150px] ">
              <Image
                src={
                  secondImage
                    ? secondImage
                    : 'https://cdn.discordapp.com/attachments/1160095645747662948/1203072330369343488/istockphoto-1222357475-612x612.jpeg?ex=65cfc36b&is=65bd4e6b&hm=d734d2079f555bb1e7a58cbbdbdbde7009456291fbc3ed693936044adaf70ed9&'
                }
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="relative h-[150px] w-[1/2] ">
              <Image
                src={
                  thirdImage
                    ? thirdImage
                    : 'https://cdn.discordapp.com/attachments/1160095645747662948/1203072330369343488/istockphoto-1222357475-612x612.jpeg?ex=65cfc36b&is=65bd4e6b&hm=d734d2079f555bb1e7a58cbbdbdbde7009456291fbc3ed693936044adaf70ed9&'
                }
                layout="fill"
                objectFit="cover"
              />
            </div>

            {fourthImage && (
              <div className="relative h-[150px] w-[1/2] ">
                <Image
                  src={
                    fourthImage
                      ? fourthImage
                      : 'https://cdn.discordapp.com/attachments/1160095645747662948/1203072330369343488/istockphoto-1222357475-612x612.jpeg?ex=65cfc36b&is=65bd4e6b&hm=d734d2079f555bb1e7a58cbbdbdbde7009456291fbc3ed693936044adaf70ed9&'
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <h3 className="text-xl text-headerYellow">MY PORTFOLIO</h3>
      <h1 className="font-serif text-[43px] font-thin text-gray-400 lg:text-[52px]">
        Here are a handful of my projects
      </h1>
      <div className="h-[0.11rem] w-[200px] bg-gray-500" />

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {/* Portfolio Projects */}
        <Card
          data-aos="fade-in"
          data-aos-duration="3000"
          title="Kona Equity Premium Page Redesign"
          description="This project was a redesign of Kona Equity's premium page with the aim of boosting paying conversions. Together with a talented designer, I implemented this design with NextJS and TailwindCSS. There was a 25% increase in sales within the first month alone!"
          link="https://konaequity.com/premium"
          img="/images/kona1.png"
          first="/images/kona1.png"
          second="/images/kona2.png"
          third="/images/kona-3.png"
          fourth="https://cdn.discordapp.com/attachments/817048198022430761/1056652095169773568/kona-3.png"
        />

        <Card
          link="https://medium.com/@sosahlawe/build-a-real-time-flight-tracker-with-nextjs-tailwindcss-and-react-map-gl-a-step-by-step-d480d053052c"
          img="/images/RealTimeFlightTracker.png"
          title="Realtime Flight Tracker web app"
          description="November Romeo is a web app that is useful for aviation enthusiasts, travelers, and anyone interested in tracking flights in real-time. It demonstrates the use of popular web development frameworks and APIs to create a modern, interactive, and responsive web application.that tracks commercial flights in real-time using data from the OpenSky Network API. The app displays a world map that updates flight positions every five seconds. The map is built using Mapbox GL JS, and the application is built using React and Next.js.
        Users can interact with the map by dragging and zooming to view flights from different regions.   
       "
          first="/images/RealTimeFlightTracker.png"
          second="/images/trajectoryLine.png"
          third="https://cdn.discordapp.com/attachments/839784544798638090/1093163648182124584/Screenshot_20230405-152038.jpg"
        />

        <Card
          link=""
          first="/images/headlessCMS1"
          second="/images/headlessCMS2"
          title="Headless Content Management System with MERN Stack"
          img="https://cdn.discordapp.com/attachments/1160095645747662948/1203070445231018054/Screen_Shot_2024-02-02_at_10.11.18_PM.png?ex=65cfc1aa&is=65bd4caa&hm=73d9cb72333e1fdb973a411162d6ff4d4a11aa249d99d9d32946dc7fae871b4f&"
          description="This is a fullstack Headless CMS that I built to help manage personal projects and client projects. I built it with the intention of being fully plug and play...to be able to connect and manage content on React/NextJS projects. I chose to make one instead of using an existing one like Wordpress in order to cover my specific needs as a developer"
        />
        <Card
          link=" https://bites-on-the-double.vercel.app/"
          first="https://cdn.discordapp.com/attachments/817048198022430761/912216484665782282/Screen_Shot_2021-11-22_at_7.31.14_AM.png"
          second="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png"
          third="https://cdn.discordapp.com/attachments/817048198022430761/912216981946638376/Screen_Shot_2021-11-22_at_7.40.04_AM.png"
          title="Restaurant App with API and admin CMS"
          img="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png"
          description="I built this Restaurant app with NextJS TailwindCSS. The app features an in-built CMS built in NodeJS and Express. It demonstrates different animation libraries and several backend and frontend tools."
        />
        <Card
          link="https://juice-bar-nextjs.vercel.app"
          img="https://cdn.discordapp.com/attachments/817048198022430761/1030413859296661515/Juice-bar.png"
          first="https://cdn.discordapp.com/attachments/817048198022430761/1030413857824452628/juice-bar-contact.png"
          second="https://cdn.discordapp.com/attachments/817048198022430761/1030413858185166878/juice-bar-about2.png"
          third="https://cdn.discordapp.com/attachments/817048198022430761/1030413858894000179/Juice-bar-About.png"
          description="Fully responsive Smoothie bar landing page with unique UI features. This was built in NextJS with TailwindCSS and Typescript. It also includes several animations using framer-motion, a lightweight animation library."
        />
        <Card
          link="https://lawe.pythonanywhere.com"
          first="https://lawe-portfolio.web.app/img/ecom_detailpage.png"
          second="https://lawe-portfolio.web.app/img/ecom_admin.png"
          third="https://lawe-portfolio.web.app/img/ecom_cover.png"
          title="Ecommerce WebApp with Python and Django"
          img="https://lawe-portfolio.web.app/img/ecom_cover.png"
          description="This django build was a full stack ecommerce platform, that was to be implemented by a local busieness. It features a neat UI, Paypal payment integration, a blog, the ability to add reviews, a fully built Admin console/CRM, and loads of other features."
        />

        <Card
          link="https://lawe.pythonanywhere.com"
          title="Full stack Blog Application with Admin CMS"
          first="https://lawe-portfolio.web.app/img/cartopia.png"
          second="https://lawe-portfolio.web.app/img/ecom_sosah2.png"
          third="https://lawe-portfolio.web.app/img/blog_admin.jpg"
          img="https://lawe-portfolio.web.app/img/cartopia.png"
          description="Cartopia is a fullstack blog application featuring a responsive design and an Admin CMS with full CRUD functionality. It allows selected users or authors to be able to edit site features and blog posts. It also features a functional rich text editor to markup the blog posts."
        />

        <Card
          link="https://covid-19-tracker-lawe.web.app/"
          first="https://lawe-portfolio.web.app/img/covid-tracker-large.png"
          second="https://cdn.discordapp.com/attachments/817048198022430761/883023450430664785/Screen_Shot_2021-09-02_at_6.18.16_PM.png"
          third="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png"
          img="https://lawe-portfolio.web.app/img/covid-tracker-large.png"
          description="This is an Awesome COVID-19 tracker, built with React,that pulls data from an API. It was built in conjunction with the guys over at Clever programmer, Naz Dumansky and Sonny Sangha. It has insightful information, a live map showing cases per country, and graphs, that show live data as well. I definitely learned a lot through this build"
        />

        {/* <Card link="https://react-hulu-clone-85e94.web.app/" first="https://cdn.discordapp.com/attachments/817048198022430761/883023432894251038/Screen_Shot_2021-09-02_at_6.17.25_PM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png"third= "https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" title="Expenses Tracker ReactJS" img="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" description="This is a really cool expenses tracker that I recently built as a practice project. It makes use of ReactJS, react context API, firebase Firestore, firebase realtime-database, tailwind css, and finally firebase authentication" /> */}
        <Card
          link="https://airbnb-lawe.vercel.app/"
          title="Airbnb Clone NextJS TailwindCSS"
          first="https://cdn.discordapp.com/attachments/817048198022430761/882963378434375720/airbnb-4.JPG"
          second="https://cdn.discordapp.com/attachments/817048198022430761/872596577959694406/Screen_Shot_2021-08-05_at_12.44.29_AM.png"
          third="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG"
          img="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG"
          description="This is an Awesome airbnb clone built with NextJS and TailwindCss. It was part of a 5 day coding challenge and actually got featured on day 3! It implements some search functionality, vercel hosting, a mock detail page replica, and a working date picker. This was quite an enjoyable build"
        />
        <Card
          link="https://amazon-clone-psi-nine.vercel.app"
          first="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png"
          second="https://cdn.discordapp.com/attachments/817048198022430761/863164123326840892/Screen_Shot_2021-07-09_at_11.05.28_PM.png"
          third="https://cdn.discordapp.com/attachments/817048198022430761/863164486445039657/Screen_Shot_2021-07-09_at_11.07.03_PM.png"
          title="Amazon CLone with NextJS TailwindCSS and FakestoreAPI"
          img="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png"
          description="This is an Amazon clone built with React and NextJS, as well as Redux for state management, NextAuth and Firebase for Authentication, and Firestore"
        />

        {/* <Card title="Netflix Clone with ReactJS, and the TMDB movie API" img="https://cdn.discordapp.com/attachments/817048198022430761/872201898424401960/Screen_Shot_2021-08-03_at_10.38.30_PM.png" description="This is an Netflix Clone built with React and with data from TMDB. I learned a lot about CSS and flex box from this build specifically" /> */}
      </div>
    </div>
  )
}

export default Portfolio
