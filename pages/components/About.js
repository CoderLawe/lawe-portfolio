import DownloadIcon from "@mui/icons-material/Download";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const About = () => {
    return(
        <div id="about" className="lg:mx-20 mx-8 mt-10 pb-10">
            <h3 className="text-headerYellow text-xl">ABOUT ME</h3>
            <h1 className="text-gray-200 text-[45px] lg:text-[52px] font-serif ">A Bit About Me</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <p className="text-paragraphGray text-[25px] lg:text-[30px] font-Cormorant my-10 leading-10 font-light ">
               My name is Lawe Sosah I started programming around 7 years ago, mostly with Java, usually just as a passtime. 

            </p>

         
                <div className="flex justify-center mx-auto ">
                   <div className="flex  items-center space-x-2 text-white  px-10 py-6 bg-black rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-500 ease-in-out cursor-pointer">
                        <a href="/" target="_blank">
                            <FileDownloadIcon className="h-12 w-12"/>

                        </a>
                        <p className="font-serif italic cursor-pointer ">Download My Resume</p>
                   </div>
                  
            </div>

        </div>
    )
}
export default About