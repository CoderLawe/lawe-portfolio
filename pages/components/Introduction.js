import Image from "next/image";

const Introduction = () => {
    return(
        <div className="py-32 mx-20 block">
            <h3 className="text-headerYellow text-xl">INTRODUCTION</h3>

            <h1 className="text-gray-200 text-[52px] mt-10">Web Developer</h1>

            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="mt-5">
                <p className="text-paragraphGray text-[30px]  leading-10 font-light">I design and Develop web applications mmostly in NextJS and TailwindCSS. TailwindCSS, is my prefered CSS tool, as it increases performance, and responsiveness</p>
            </div>

            <div className="mt-10 flex justify-start">
                <img className="bg-cover h-[100px] w-[450px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950096546215649330/signature_3.png" height={100} width={450} objectFit="cover"/>

            </div>
        </div>
    )
}

export default Introduction