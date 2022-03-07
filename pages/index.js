import Head from 'next/head'
import Image from 'next/image'
import Introduction from './components/Introduction'

const Home = () => {
  return (
    <div className="bg-blackishBg h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:flex">
          {/* Left Side */}

          <div className="w-[60%] border-r border-gray-500">
            <Introduction />
          </div>

          {/* Right Side */}

          <div className="w-[40%] flex align-middle">
            <div className='mx-auto mt-32 lg:h-[500px] w-[400px] border border-gray-500 px-10 py-10'>
                <Image src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={450} width={350} objectFit="cover"/>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
