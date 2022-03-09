import DownloadIcon from "@mui/icons-material/Download";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const About = () => {
    return(
        <div id="about" className="lg:mx-20 mx-8 mt-10 pb-10">
            <h3 className="text-headerYellow text-xl">ABOUT ME</h3>
            <h1 className="text-gray-200 text-[45px] lg:text-[52px] font-serif ">A Bit About Me</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <p className="text-paragraphGray text-[25px] lg:text-[30px]  leading-10 font-light ">
               My name is Lawe Sosah, and I'm 19 years old. I started programming around 7 years ago, mostly with Java, usually just as a passtime. 

            </p>

            <p className="text-paragraphGray text-[25px] lg:text-[30px]  leading-10 font-light ">
            Around 2017, I started learning Python, because of its numerous applications in data science, web developement e.t.c. I also learned Webscraping, and Web development with the Django web framework.
            </p>


            <p className="text-paragraphGray text-[25px] lg:text-[30px]  leading-10 font-light mt-5 ">
                In 2021, I branched off to Javascript because of its versatility and usefulness in Web developement. I currently use NextJS, ReatcJS and TailwindCSS as the main development tools
            </p>
                <div className="flex justify-center mx-auto ">
                   <div className="flex  items-center space-x-2 text-white  px-10 py-6 bg-black rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-500 ease-in-out cursor-pointer">
                        <FileDownloadIcon className="h-12 w-12"/>
                        <p className="font-serif italic cursor-pointer ">Download My Resume</p>
                   </div>
                  
            </div>

        </div>
    )
}
export default About