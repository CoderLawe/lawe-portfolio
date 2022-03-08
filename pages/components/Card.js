

const Card = ({ title, img, description }) => {

    
    return(
        <div className="group transition-all ease-in-out duration-500 flex-col space-x-4 rounded-2xl shadow-lg lg:w-[400px]  ">
            <img className=" object-cover "src={img} alt="portfolio-card-cover"/>

            <div className="py-10 -mt-10  md:hidden group-hover:flex transition-all ease-in-out duration-500">
                <div className="flex justify-center">
                    <div className="block"> 
                        <h1 className="text-gray-400 font-serif mt-3 flex justify-center">{title}</h1>
                        <div className="w-[150px] mb-3  bg-headerYellow h-[0.11rem]"/>
                        <p className="text-paragraphGray">{description}</p>
                    </div>
                  
                </div>
            </div>



      
        </div>
    )
}

export default Card