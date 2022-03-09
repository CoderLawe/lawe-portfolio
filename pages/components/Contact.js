const Contact = () => {
    return(
        <div className="py-24 lg:mx-20 mx-8 block">
            <h3 className="text-headerYellow text-xl">CONTACT ME</h3>

            <h1 className="text-gray-200 text-[40px] lg:text-[52px] mt-10 font-serif">Let's get in touch</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <p className="text-paragraphGray text-[30px] mt-5 font-serif">
                Hi! I'd be more than pleased to have a chat with you. Feel free to send me a message below, and I'll get back to you as soon as possible.
                Thanks.
            </p>
            <p className="text-gray-400 text-[30px] font-serif italic">-Lawe</p>

            <form className="flex justify-center mt-8">
                <div className="flex-col space-y-5">
                    <div className="lg:flex lg:space-x-6 block space-y-6">
                        <input className="border border-headerYellow p-5 font-serif bg-transparent focus:outline-none text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" type="text" placeholder="Name" />
                        <input className="border border-headerYellow p-5 font-serif bg-transparent focus:outline-none text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" type="email" placeholder="Email" />

                    </div>

                    <div className="">
                        <textarea className="bg-transparent border border-headerYellow h-[350px] lg:w-[550px] font-serif py-5 px-3 focus:outline-none text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" placeholder="Enter your message here"/>
                    </div>
                    
                    <div className="lg:flex justify-center">
                        <button className="border border-headerYellow text-gray-400 font-serif py-6 lg:px-20 px-24 active:scale-90 hover:border-gray-400" >SUBMIT</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact