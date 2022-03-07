import Head from 'next/head'
import Image from 'next/image'
import About from './components/About'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import RightSide from './components/RightSide'
import Skills from './components/Skills'

const Home = () => {
  return (
    <div className="bg-blackishBg h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='fixed -right-0'>
        <Navbar />
      </nav>
      <main className="lg:flex block">
          {/* Left Side */}

          <div className="lg:w-[60%] lg:border-r border-gray-500  order-2 md:order-1 ">
            <Introduction />

            <About />

            <Skills />
          </div>

          {/* Right Side */}

          <div className="lg:w-[40%] flex align-middle lg:fixed -right-0 order-1 md:order-2">
              <RightSide />
          </div>
      </main>
    </div>
  )
}

export default Home
