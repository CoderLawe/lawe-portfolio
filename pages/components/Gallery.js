import Image from "next/Image";

const Gallery = () => {
    return(
        <div className="grid grid-cols-2 w-full mx-10">
            <div className="h-[200px] w-[100px] absolute">
                <Image src="https://cdn.discordapp.com/attachments/817048198022430761/1030413859296661515/Juice-bar.png" objectFit="cover" layout="fill"/>

            </div>
        </div>
    )
}

export default Gallery