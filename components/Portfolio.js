import Card from "./Card"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, useContext } from "react";
import { Typography } from "@mui/material";
import Image from "next/image"
import { FirstContext, ModalContext, PostContext, SecondContext, Thirdcontext, FourthContext, HoveredContext } from "./context/ClickedContext";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";

const Portfolio = () => {

    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useContext(ModalContext);
    const [post, setPost] = useContext(PostContext);
    const [firstImage, setFirstImage] = useContext(FirstContext)
    const [secondImage, setSecondImage] = useContext(SecondContext)
    const [thirdImage, setThirdImage] = useContext(Thirdcontext)
    const [fourthImage, setFourthImage] = useContext(FourthContext)

    const [hovered, setHovered] = useContext(HoveredContext);
    const handleOpen = (post) => {
        if(modalOpen){
            setOpen(true)
        }
        else{
            setOpen(false)
        }
    };
    const handleClose = () => {
        setModalOpen(false)
    // setOpen(false);
    };



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

    //   useEffect(() =>{
    //     images.push(post)
    //     console.log('images',images)
    //   },[post])
    return(
        <div id="portfolio" className="lg:mx-12 mx-8 pb-10 mt-12 relative z-[10]">
            <div className="absolute h-[240px] w-[240px] bg-white/15 rotate-[12.95deg] top-32 left-0 blur-[83px] "/>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

                >

                <Box className="relative py-[10px] my-[25%] lg:px-10 lg:py-10 pbackdrop-blur-[13.5px] bg-white bg-opacity-[0.18] lg:w-[1200px]  lg:mx-auto lg:mt-[24px] border-none focus:outline-none rounded-[8px]" >
                 
                 <AiOutlineClose onClick={() => handleClose()}className="absolute top-[12px] cursor-pointer left-[12px] h-[32px] w-[32px] text-white"/>

                  <div className="hidden lg:grid lg:grid-cols-2 gap-x-8 gap-y-4  ">
                    <div className="h-[1/2] w-[1/2] relative">
                        <Image src={firstImage} layout="fill" alt="first image" objectFit="cover"/>
                    </div>

                    <div className="h-[300px] w-[1/2] relative">
                        <Image src={secondImage} layout="fill" alt="first image" objectFit="cover"/>
                    </div>

                    <div className="h-[300px] w-[1/2] relative">
                        <Image src={thirdImage} layout="fill" alt="first image" objectFit="cover"/>
                    </div>

                    {
                        fourthImage && (
                            <div className="h-[300px] w-[1/2] relative">
                                <Image src={fourthImage} layout="fill" alt="first image" objectFit="cover"/>
                            </div>
    
                        )
                    }

                   

               

                
                  </div>
                {/* When image is clicked, image src is set */}
                <AiOutlineClose onClick={() => handleClose()}className="absolute top-[12px] cursor-pointer left-[12px] h-[32px] w-[32px] text-white"/>
                   <div className="grid grid-cols-2 gap-y-4 gap-x-4 mx-[5px]  overflow-y-scroll lg:hidden">
                        <div className="relative h-[150px] w-[1/2] ">
                            <Image src={firstImage} layout="fill" objectFit="cover"/>
                        </div>

                        <div className="relative h-[150px] w-[150px] ">
                            <Image src={secondImage} layout="fill" objectFit="cover"/>
                        </div>

                        <div className="relative h-[150px] w-[1/2] ">
                            <Image src={thirdImage} layout="fill" objectFit="cover"/>
                        </div>

                        {
                            fourthImage && (
                                <div className="relative h-[150px] w-[1/2] ">
                                    <Image src={fourthImage} layout="fill" objectFit="cover"/>
                                </div>
                            )
                        }
                     
                       
                   </div>
                </Box>
                </Modal>
            <h3 className="text-headerYellow text-xl">MY PORTFOLIO</h3>
            <h1 className="text-gray-400 text-[43px] lg:text-[52px] font-serif font-thin">Here are a handful of my projects</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 mt-6">
                {/* Portfolio Projects */}
                <Card title="Kona Equity Premium Page Redesign" description="This was a frontend intensive  redesign of Kona Equity's existing landing page. It was built with the aim of boosting conversions. It makes use of glassmorphism, gradients and unique colours to produce a truly unique browsing experience.  " link="https://konaequity.com/premium" img="https://cdn.discordapp.com/attachments/817048198022430761/1056661734913474640/Screen_Shot_2022-12-24_at_7.22.38_PM.png" first="https://cdn.discordapp.com/attachments/839784544798638090/1056301485123702835/Screen_Shot_2022-12-24_at_7.31.23_PM.png" second="https://cdn.discordapp.com/attachments/839784544798638090/1056301484783972542/Screen_Shot_2022-12-24_at_7.31.53_PM.png" third="https://cdn.discordapp.com/attachments/839784544798638090/1056301485752856676/Screen_Shot_2022-12-24_at_7.30.49_PM.png" fourth="https://cdn.discordapp.com/attachments/817048198022430761/1056652095169773568/kona-3.png"/>
                <Card link="https://juice-bar-nextjs.vercel.app" img="https://cdn.discordapp.com/attachments/817048198022430761/1030413859296661515/Juice-bar.png" first="https://cdn.discordapp.com/attachments/817048198022430761/1030413857824452628/juice-bar-contact.png" second="https://cdn.discordapp.com/attachments/817048198022430761/1030413858185166878/juice-bar-about2.png" third="https://cdn.discordapp.com/attachments/817048198022430761/1030413858894000179/Juice-bar-About.png" description="Fully responsive Smoothie bar landing page with unique UI features. This was built in NextJS with TailwindCSS and Typescript. It also includes several animations using framer-motion, a lightweight animation library."/>
                <Card link=" https://bites-on-the-double.vercel.app/" first="https://cdn.discordapp.com/attachments/817048198022430761/912216484665782282/Screen_Shot_2021-11-22_at_7.31.14_AM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/912216981946638376/Screen_Shot_2021-11-22_at_7.40.04_AM.png" title="Restaurant App with API and admin CMS" img="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" description="I built this Restaurant app with NextJS TailwindCSS, and JSON server for the backend CMS. I was mostly experimenting with several animation libraries, and ways of making a CMS."/>
                <Card link="https://lawe.pythonanywhere.com" first="https://lawe-portfolio.web.app/img/ecom_detailpage.png" second="https://lawe-portfolio.web.app/img/ecom_admin.png" third="https://lawe-portfolio.web.app/img/ecom_cover.png" title="Ecommerce WebApp with Python and Django" img="https://lawe-portfolio.web.app/img/ecom_cover.png" description="This was definitely one of my most complicated builds to date. It features a neat UI, Paypal payment integration, a blog, the ability to add reviews, a fully built Admin console/CRM, and loads of other features. This is without doubt the project that has taught me the most about django"/>

                <Card link="https://covid-19-tracker-lawe.web.app/" first ='https://lawe-portfolio.web.app/img/covid-tracker-large.png' second="https://cdn.discordapp.com/attachments/817048198022430761/883023450430664785/Screen_Shot_2021-09-02_at_6.18.16_PM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" img="https://lawe-portfolio.web.app/img/covid-tracker-large.png" description="This is an Awesome COVID-19 tracker, built with React,that pulls data from an API. It was built in conjunction with the guys over at Clever programmer, Naz Dumansky and Sonny Sangha. It has insightful information, a live map showing cases per country, and graphs, that show live data as well. I definitely learned a lot through this build"/>

                <Card link="https://react-hulu-clone-85e94.web.app/" first="https://cdn.discordapp.com/attachments/817048198022430761/883023432894251038/Screen_Shot_2021-09-02_at_6.17.25_PM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png"third= "https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" title="Expenses Tracker ReactJS" img="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" description="This is a really cool expenses tracker that I recently built as a practice project. It makes use of ReactJS, react context API, firebase Firestore, firebase realtime-database, tailwind css, and finally firebase authentication" />
                <Card link="https://airbnb-lawe.vercel.app/" title="Airbnb Clone NextJS TailwindCSS"first="https://cdn.discordapp.com/attachments/817048198022430761/882963378434375720/airbnb-4.JPG" second="https://cdn.discordapp.com/attachments/817048198022430761/872596577959694406/Screen_Shot_2021-08-05_at_12.44.29_AM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG" img="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG" description="This is an Awesome airbnb clone built with NextJS and TailwindCss. It was part of a 5 day coding challenge and actually got featured on day 3! It implements some search functionality, vercel hosting, a mock detail page replica, and a working date picker. This was quite an enjoyable build"/>
                <Card link="https://amazon-clone-psi-nine.vercel.app" first="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/863164123326840892/Screen_Shot_2021-07-09_at_11.05.28_PM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/863164486445039657/Screen_Shot_2021-07-09_at_11.07.03_PM.png" title="Amazon CLone with NextJS TailwindCSS and FakestoreAPI" img="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png" description="This is an Amazon clone built with React and NextJS, as well as Redux for state management, NextAuth and Firebase for Authentication, and Firestore"/>

                {/* <Card title="Netflix Clone with ReactJS, and the TMDB movie API" img="https://cdn.discordapp.com/attachments/817048198022430761/872201898424401960/Screen_Shot_2021-08-03_at_10.38.30_PM.png" description="This is an Netflix Clone built with React and with data from TMDB. I learned a lot about CSS and flex box from this build specifically" /> */}
                <Card title="Full stack Blog Application with Admin CMS" first="https://lawe-portfolio.web.app/img/cartopia.png" second="https://lawe-portfolio.web.app/img/ecom_sosah2.png" third="https://lawe-portfolio.web.app/img/blog_admin.jpg"img="https://lawe-portfolio.web.app/img/cartopia.png" description="Cartopia is a fullstack bloog application featuring a responsive design and an Admin CMS with full CRUD functionality. It allows selected users or authors to be able to edit site features and blog posts. It also features a functional rich text editor to markup the blog posts."/>





            </div>
        </div>
    )
}

export default Portfolio
