import React from 'react'
const News = () => {
  return (
    <div className=" w-container mx-auto flex flex-col items-center justify-center p-6 text-center">
      <img
        className="my-10 rounded-[100%]"
        src="https://media.licdn.com/dms/image/v2/D4D03AQF5v1ioqXcDVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677249770991?e=1734566400&v=beta&t=NcVMuGqL_bgb4KcD_ohCNYHIGWlaim35o0KrBNrVovA"
      ></img>
      <h1 className="text-big py-1 font-light text-gray-200 md:text-4xl lg:text-5xl">
        Renovations in Progress!I am cooking up something great! Stay tuned
      </h1>
      <p className="text-md py-3 font-light text-blue-600 md:text-lg lg:text-xl">
        Subscribe and get notified
      </p>
    </div>
  )
}

export default News
