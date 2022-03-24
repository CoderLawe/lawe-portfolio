import Card from "./Card"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, useContext } from "react";
import { Typography } from "@mui/material";
import Image from "next/image"
import { FirstContext, ModalContext, PostContext, SecondContext, Thirdcontext } from "./context/ClickedContext";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Portfolio = () => {

    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useContext(ModalContext);
    const [post, setPost] = useContext(PostContext);
    const [firstImage, setFirstImage] = useContext(FirstContext)
    const [secondImage, setSecondImage] = useContext(SecondContext)
    const [thirdImage, setThirdImage] = useContext(Thirdcontext)
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
        <div id="portfolio" className="lg:mx-12 mx-8 pb-10 mt-12">
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

                >

                <Box className="p-10 bg-transparent bg-opacity-75  lg:mx-52 lg:mt-48 border-none focus:outline-none" >
                   <div className="hidden lg:flex justify-between space-x-8 gap-4 ">
                        <Image src={firstImage} height={500} width={610}  objectFit="cover"/>
                        <Image src={secondImage} height={500} width={610}  objectFit="cover"/>
                        <Image src={thirdImage} height={500} width={610} objectFit="cover" />
                {/* When image is clicked, image src is set */}
                   </div>
                        <CloseIcon onClick={handleClose}className="h-10 w-10 text-gray-200 lg:hidden" />
                   <div className="block gap-y-4 h-[60vh] overflow-y-scroll lg:hidden">
                        <Image src={firstImage} height={500} width={610}  objectFit="cover"/>
                        <Image src={secondImage} height={500} width={610}  objectFit="cover"/>
                        <Image src={thirdImage} height={500} width={610} objectFit="cover" />
                   </div>
                </Box>
                </Modal>
            <h3 className="text-headerYellow text-xl">MY PORTFOLIO</h3>
            <h1 className="text-gray-200 text-[43px] lg:text-[52px] font-serif font-thin">Here are a handful of my projects</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
                {/* Portfolio Projects */}

                <Card link="https://covid-19-tracker-lawe.web.app/" first ='https://lawe-portfolio.web.app/img/covid-tracker-large.png' second="https://cdn.discordapp.com/attachments/817048198022430761/883023450430664785/Screen_Shot_2021-09-02_at_6.18.16_PM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" img="https://lawe-portfolio.web.app/img/covid-tracker-large.png" description="This is an Awesome COVID-19 tracker, built with React,that pulls data from an API. It was built in conjunction with the guys over at Clever programmer, Naz Dumansky and Sonny Sangha. It has insightful information, a live map showing cases per country, and graphs, that show live data as well. I definitely learned a lot through this build"/>
                <Card link="https://react-hulu-clone-85e94.web.app/" first="https://cdn.discordapp.com/attachments/817048198022430761/883023432894251038/Screen_Shot_2021-09-02_at_6.17.25_PM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png"third= "https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" title="Expenses Tracker ReactJS" img="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" description="This is a really cool expenses tracker that I recently built as a practice project. It makes use of ReactJS, react context API, firebase Firestore, firebase realtime-database, tailwind css, and finally firebase authentication" />
                <Card link=" https://bites-on-the-double.vercel.app/" first="https://cdn.discordapp.com/attachments/817048198022430761/912216484665782282/Screen_Shot_2021-11-22_at_7.31.14_AM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/912216981946638376/Screen_Shot_2021-11-22_at_7.40.04_AM.png" title="Restaurant App with API and admin CMS" img="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" description="I built this Restaurant app with NextJS TailwindCSS, and JSON server for the backend CMS. I was mostly experimenting with several animation libraries, and ways of making a CMS."/>
                <Card link="https://airbnb-lawe.vercel.app/" title="Airbnb Clone NextJS TailwindCSS"first="https://cdn.discordapp.com/attachments/817048198022430761/882963378434375720/airbnb-4.JPG" second="https://cdn.discordapp.com/attachments/817048198022430761/872596577959694406/Screen_Shot_2021-08-05_at_12.44.29_AM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG" img="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG" description="This is an Awesome airbnb clone built with NextJS and TailwindCss. It was part of a 5 day coding challenge and actually got featured on day 3! It implements some search functionality, vercel hosting, a mock detail page replica, and a working date picker. This was quite an enjoyable build"/>
                <Card link="https://lawe.pythonanywhere.com" first="https://lawe-portfolio.web.app/img/ecom_detailpage.png" second="https://lawe-portfolio.web.app/img/ecom_admin.png" third="https://lawe-portfolio.web.app/img/ecom_cover.png" title="Ecommerce WebApp with Python and Django" img="https://lawe-portfolio.web.app/img/ecom_cover.png" description="This was definitely one of my most complicated builds to date. It features a neat UI, Paypal payment integration, a blog, the ability to add reviews, a fully built Admin console/CRM, and loads of other features. This is without doubt the project that has taught me the most about django"/>
                <Card link="https://amazon-clone-psi-nine.vercel.app" first="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png" second="https://cdn.discordapp.com/attachments/817048198022430761/863164123326840892/Screen_Shot_2021-07-09_at_11.05.28_PM.png" third="https://cdn.discordapp.com/attachments/817048198022430761/863164486445039657/Screen_Shot_2021-07-09_at_11.07.03_PM.png" title="Amazon CLone with NextJS TailwindCSS and FakestoreAPI" img="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png" description="This is an Amazon clone built with React and NextJS, as well as Redux for state management, NextAuth and Firebase for Authentication, and Firestore"/>

                {/* <Card title="Netflix Clone with ReactJS, and the TMDB movie API" img="https://cdn.discordapp.com/attachments/817048198022430761/872201898424401960/Screen_Shot_2021-08-03_at_10.38.30_PM.png" description="This is an Netflix Clone built with React and with data from TMDB. I learned a lot about CSS and flex box from this build specifically" /> */}
                <Card title="Full stack Blog Application with Admin CMS" first="https://lawe-portfolio.web.app/img/cartopia.png" second="https://lawe-portfolio.web.app/img/ecom_sosah2.png" third="https://lawe-portfolio.web.app/img/blog_admin.jpg"img="https://lawe-portfolio.web.app/img/cartopia.png" description="Cartopia, was my second real Django project. I learned most of the django basics from this app, and improved it bit by bit in my free time. I built the first version with my bro back in 2019, and it had a pretty basic front-end. Thankfully, it had full CRUD functionality. Later, as my front-end skills grew to match my back-end skills, I began to add features like a carousel, well designed forms, and a pretty cool admin section with basic analytics, Comment moderation, Post creation, Updating and deleting, Newsletter email lists collection, e.t.c. In my books, it's technically not yet complete, but then again I know that there will always be something to add. Enjoy having a look at it, and please let me know what you think in the comments. Feel free to check out the GitHub repo! -Lawe Sosah"/>





            </div>
        </div>
    )
}

export default Portfolio
