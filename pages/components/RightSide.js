import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const RightSide = ({ scrolled }) => {
    return(
        <div className="flex">
            <div className={scrolled ? 'lg:mx-[15%] mt-10 mx-[7.5] lg:mt-20 lg:h-[580px] w-[350px] border border-gray-500 lg:px-10 px-8 py-10 ':'lg:mx-[25%]  mt-20 lg:h-[600px] lg:w-[400px] w-[350px] border border-gray-500 lg:px-10 px-8 py-10 mx-[7.5]'}>
                <img  className={scrolled ? "bg-cover h-[350px] lg:w-[300px] ": "bg-cover h-[400px] w-[350px]"} src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={450} width={350} objectFit="cover"/>

                <h3 className="text-gray-400 flex justify-center mt-5 font-bold">HI THERE! I'M</h3>

                <div className="flex justify-center">
                    <p className="text-gray-400 mt-2 text-3xl whitespace-nowrap "><span className="text-green-700 mr-12">[</span>Lawe Sosah<span className="text-green-700 ml-12">]</span></p>
                   
                </div>

                <div className="flex justify-between mt-5 mx-10">
                        <InstagramIcon  className="text-headerYellow h-12 cursor-pointer"/>
                        <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>
                        <GitHubIcon  className="text-headerYellow h-12 cursor-pointer"/>

                </div>
            </div>
        </div>
    )
}

export default RightSide