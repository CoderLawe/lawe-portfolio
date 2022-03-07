import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
    return(
        <div className="mx-20 pb-10">
            <h3 className="text-headerYellow text-xl">ABOUT ME</h3>
            <h1 className="text-gray-200 text-[52px] ">A Bit About Me</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <p className="text-paragraphGray text-[30px]  leading-10 font-light mt-5">
               My name is Lawe Sosah, and I'm 19 years old. I started programming around 7 years ago, mostly with Java, usually just as a passtime. Around 2017, I improved my knowledge of Python, and soon learned Webscraping, and Web development with the Django web framework.

            </p>

            <div className="hover:border-headerYellow  transition-all ease-out duration-300 border border-gray-400 flex align-middle mt-5 w-[50%] mx-[20%]">
                <div className="flex justify-center mx-auto ">
                    <div className="flex-col items-center">
                        <DownloadIcon  className="h-52 w-40 text-white cursor-pointer hover:text-headerYellow transition-all ease-out duration-500 active:scale-95"/>
                        <p className="text-gray-400 flex justify-center font-serif">DOWNLOAD RESUME</p>
                    </div>
                  
                </div>
            </div>

        </div>
    )
}
export default About