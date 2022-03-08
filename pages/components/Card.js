const Card = ({ title, img, description }) => {
    return(
        <div className="flex-col space-x-4 rounded-lg shadow-lg w-[400px]">
            <img className=" object-cover"src="https://lawe-portfolio.web.app/img/covid-tracker-large.png" alt="portfolio-card-cover"/>
        </div>
    )
}

export default Card