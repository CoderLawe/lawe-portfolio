import React from 'react'
import { useState } from 'react'
const Field = () => {
  const [Email, setEmail] = useState('')
  const [Error, setError] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const verifEmail = (e) => {
    e.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(Email)) {
      setEmail('example@email/com')
      setError('Please provide a valid email address')
      return false
    } else {
      setEmail('')
      setError('')
      return true
    }
  }

  return (
    <div className="w-container mx-auto px-[20px] md:max-w-xl lg:max-w-3xl">
      <form
        onSubmit={verifEmail}
        className="flex flex-col md:flex-row md:items-center"
      >
        <input
          className={`my-2 px-8 py-3 ${
            Error ? 'border-Light-Red border' : 'border-Pale-Blue border'
          } placeholder:text-Pale-Blue md:w-morehalf rounded-3xl focus:outline-0`}
          type="text"
          value={Email}
          onChange={handleChange}
          placeholder="Your email address ..."
        ></input>
        <button className="mt-[30px] rounded-[24px] bg-blue-400 px-[12px] py-[15px] font-serif font-light text-white hover:bg-black hover:text-white lg:ml-[20px] lg:mt-[0px] lg:py-[10px] lg:px-[25px]">
          Notify Me
        </button>
      </form>
      <span className="text-Light-Red italic">{Error}</span>
    </div>
  )
}

export default Field
