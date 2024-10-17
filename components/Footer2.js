import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer2 = () => {
  return (
    <div className="w-footer mx-auto">
      <div className="mb-9 flex content-center justify-center">
        <FaTwitter className="text-Blue border-Pale-Blue hover:bg-Blue mr-3 h-10 w-11 cursor-pointer rounded-3xl border p-2 hover:text-white " />
        <FaFacebook className="text-Blue border-Pale-Blue hover:bg-Blue mr-3 h-10 w-11 cursor-pointer rounded-3xl border p-2 hover:text-white " />
        <FaInstagram className=" text-Blue border-Pale-Blue hover:bg-Blue h-10 w-11 cursor-pointer rounded-3xl border p-2 hover:text-white " />
      </div>
      <p className="text-Gray text-center">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </div>
  )
}

export default Footer2
