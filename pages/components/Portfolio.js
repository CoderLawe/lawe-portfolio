import Card from "./Card"

const Portfolio = () => {
    return(
        <div className="mx-12 pb-10 mt-12">
            <h3 className="text-headerYellow text-xl">ABOUT ME</h3>
            <h1 className="text-gray-200 text-[52px] font-serif font-thin">Here are a few of my projects</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
                {/* Portfolio Projects */}

                <Card title="Covid-19 Tracker" img="https://lawe-portfolio.web.app/img/covid-tracker-large.png"  description="This is an Awesome COVID-19 tracker, built with React,that pulls data from an API. It was built in conjunction with the guys over at Clever programmer, Naz Dumansky and Sonny Sangha. It has insightful information, a live map showing cases per country, and graphs, that show live data as well. I definitely learned a lot through this build"/>
                <Card title="Expenses Tracker ReactJS" img="https://cdn.discordapp.com/attachments/817048198022430761/883023421137633330/Screen_Shot_2021-09-02_at_6.18.07_PM.png" description="This is a really cool expenses tracker that I recently built as a practice project. It makes use of ReactJS, react context API, firebase Firestore, firebase realtime-database, tailwind css, and finally firebase authentication" />
                <Card title="Restaurant App with API and admin CMS" img="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" description="I built this Restaurant app with NextJS TailwindCSS, and JSON server for the backend CMS. I was mostly experimenting with several animation libraries, and ways of making a CMS."/>
                <Card title="Airbnb Clone NextJS TailwindCSS" img="https://cdn.discordapp.com/attachments/817048198022430761/882950927550672917/bnb.JPG" description="This is an Awesome airbnb clone built with NextJS and TailwindCss. It implements some search functionality, vercel hosting, a mock detail page replica, and a working date picker. This was quite an enjoyable build"/>
                <Card title="Ecommerce WebApp with Python and Django" img="https://lawe-portfolio.web.app/img/ecom_cover.png" description="This was definitely one of my most complicated builds to date. It features a neat UI, Paypal payment integration, a blog, the ability to add reviews, a fully built Admin console/CRM, and loads of other features. This is without doubt the project that has taught me the most about django"/>
                <Card title="Amazon CLone with NextJS TailwindCSS and FakestoreAPI" img="https://cdn.discordapp.com/attachments/817048198022430761/863165976153292861/Screen_Shot_2021-07-09_at_11.12.49_PM.png" description="This is an Amazon clone built with React and NextJS, as well as Redux for state management, NextAuth and Firebase for Authentication, and Firestore"/>

                <Card title="Netflix Clone with ReactJS, and the TMDB movie API" img="https://cdn.discordapp.com/attachments/817048198022430761/872201898424401960/Screen_Shot_2021-08-03_at_10.38.30_PM.png" description="This is an Netflix Clone built with React and with data from TMDB. I learned a lot about CSS and flex box from this build specifically" />
                <Card title="Full stack Blog Application with Admin CMS" img="https://lawe-portfolio.web.app/img/cartopia.png" description="Cartopia, was my second real Django project. I learned most of the django basics from this app, and improved it bit by bit in my free time. I built the first version with my bro back in 2019, and it had a pretty basic front-end. Thankfully, it had full CRUD functionality. Later, as my front-end skills grew to match my back-end skills, I began to add features like a carousel, well designed forms, and a pretty cool admin section with basic analytics, Comment moderation, Post creation, Updating and deleting, Newsletter email lists collection, e.t.c. In my books, it's technically not yet complete, but then again I know that there will always be something to add. Enjoy having a look at it, and please let me know what you think in the comments. Feel free to check out the GitHub repo! -Lawe Sosah"/>





            </div>
        </div>
    )
}

export default Portfolio
