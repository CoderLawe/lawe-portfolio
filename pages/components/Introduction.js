import Image from "next/image";

const Introduction = () => {
    return(
        <div id="home" className="lg:py-32 lg:mx-20 pt-5 mx-8 block mt-5">
            <h3 className="text-headerYellow text-xl">INTRODUCTION</h3>

            <h1 className="text-gray-200 text-[45px] lg:text-[52px] mt-10">Web Developer</h1>

            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="mt-5">
                <p className="text-paragraphGray text-[25px] lg:text-[30px]  leading-10 font-light">I develop web applications mmostly in NextJS and TailwindCSS. TailwindCSS, is my prefered CSS tool, as it increases performance, and responsiveness</p>
            </div>

            <div className="mt-10 flex justify-start mb-8">
                <img className="bg-cover h-[100px] w-[450px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950096546215649330/signature_3.png" height={100} width={450} objectFit="cover"/>

            </div>
        </div>
    )
}

export default Introduction