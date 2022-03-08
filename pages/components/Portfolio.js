import Card from "./Card"

const Portfolio = () => {
    return(
        <div className="mx-20 pb-10 mt-12">
            <h3 className="text-headerYellow text-xl">ABOUT ME</h3>
            <h1 className="text-gray-200 text-[52px] font-serif font-thin">Here are a few of my projects</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div>
                {/* Portfolio Projects */}

                <Card title="Full Stack Ecommerce Platform with Python and Django" img="" />
            </div>
        </div>
    )
}

export default Portfolio
