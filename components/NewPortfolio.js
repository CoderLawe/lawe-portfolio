import Image from "next/image"
import { useState } from "react"

const NewPortfolio = () => {

    const [initial, setInitial] = useState("")
    const [smallImageSources, setSmallImageSources] = useState("https://cdn.discordapp.com/attachments/839784544798638090/1056301485123702835/Screen_Shot_2022-12-24_at_7.31.23_PM.png")
     
    return(
        <div className="lg:ml-6 flex">
            <div className="block">
                <div className="relative h-[300px] w-[500px]">
                    <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1056652095169773568/kona-3.png" layout="fill" objectFit="contain"/>
                </div>

                <div className="mt-[32px] ">
                    <p className="font-Cormorant text-[32px] text-gray-200 text-center">Kona Equity Redesign</p>
                </div>
            </div>
           
        </div>
    )
}

export default NewPortfolio