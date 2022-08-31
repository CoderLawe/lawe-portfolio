import { useContext } from "react";
import { FirstContext, ModalContext, PostContext, SecondContext, Thirdcontext } from "./context/ClickedContext";
import SearchIcon from "@mui/icons-material/Search";
const Card = ({ title, img, description, link, first, second, third}) => {

    const [post, setPost] = useContext(PostContext);
    const [modalOpen, setModalOpen] = useContext(ModalContext)
    const [firstImage, setFirstImage] = useContext(FirstContext)
    const [secondImage, setSecondImage] = useContext(SecondContext)
    const [thirdImage, setThirdImage] = useContext(Thirdcontext)
    const handleClicked = (first, second, third) => {
            setModalOpen(true)
            setFirstImage(first)
            setSecondImage(second)
            setThirdImage(third)
        

        console.log('images', firstImage)
    }
    
    return(
        <div className="group transition-all ease-in-out duration-500 flex-col space-x-4 rounded-2xl shadow-lg lg:w-[350px] relative ">
            <div className="cursor-pointer ">
                <img onClick={() => handleClicked(first, second, third)} className=" object-cover group-hover:bg-black group-hover:opacity-75 transition-all duration-500 ease-out  "src={img} alt="portfolio-card-cover"/>
               
            </div>
            <div onClick={() => handleClicked(first, second, third)}className="p-5 cursor-pointer z-50 -mt-[30%] right-[50%] absolute translate-x-[50%] opacity-0 group-hover:opacity-100 transform transition-all duration-300">
                        <SearchIcon className="h-10 w-10 text-white"/>
            </div>
            

            <div className="py-10 -mt-10  md:hidden group-hover:flex transition-all ease-in-out duration-500">
                <div className="flex justify-center">
                 
                    <div className="block"> 
                        <h1 className="text-gray-400 font-serif mt-3 flex justify-center">{title}</h1>
                        <div className="w-[150px] mb-3  bg-headerYellow h-[0.11rem]"/>
                        <p className="text-paragraphGray">{description}</p>

                        <a target="_blank" href={link} className="text-headerYellow font-serif mt-5 flex justify-center hover:underline cursor-pointer ">View Demo</a>
                    </div>
                  
                </div>
            </div>



      
        </div>
    )
}

export default Card