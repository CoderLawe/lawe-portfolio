import React, { useContext } from 'react'
import { FaTools } from 'react-icons/fa' // Importing a tool icon from react-icons
import { PageLoadedContext } from './context/CarCardContext'

const UnderConstruction = () => {
  const [loaded, setLoaded] = useContext(PageLoadedContext)
  return (
    <div
      className={
        loaded
          ? 'flex min-h-screen flex-col items-center justify-center bg-gray-100'
          : 'hidden'
      }
    >
      <FaTools className="mb-4 text-6xl text-blue-500" />
      <h1 className="mb-2 text-4xl font-bold">Under Construction</h1>
      <p className="text-gray-600">
        Lawe is cooking up something great...😎! Stay tuned{' '}
      </p>
      <p className="text-gray-600">Stay Tuned! </p>
    </div>
  )
}

export default UnderConstruction
