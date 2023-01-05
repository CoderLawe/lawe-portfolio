import Image from "next/image";
const Blog = () => {
    return(
        <div className="block lg:flex space-between items-center lg:mx-5 mt-10 mb-5 cursor-pointer">
            {/* Left Side */}
            <div className="ml-[12.5%] lg:ml-3 z-10">   
                <Image src="https://cdn.discordapp.com/attachments/817048198022430761/953208587033907220/unknown.png" height={200} width={250} objectFit="contain"/>
            </div>  

            {/* Right Side */}
            <div className="flex-col px-3 group">
                <h1 className="text-gray-400 font-serif font-thin text-2xl lg:-mt-5">Why NEXTJS, Why TailwindCSS? Build a WhatsApp clone with Me and find out</h1>
                <div className="lg:w-[500px] w-[1/2] mb-3  bg-headerYellow h-[0.11rem] group-hover:bg-white transition-all duration-500 ease-out"/>
                <div>
                    <p className="text-paragraphGray text-lg mt-5">Come along with me as I build a WhatsApp web clone to show you why I enjoy using NextJS and TailwindCSS so much!</p>
                </div>
            </div>
        </div>
    )
}

export default Blog