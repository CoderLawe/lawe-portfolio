import DownloadIcon from '@mui/icons-material/Download'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
// import { motion } from "framer-motion"

const About = () => {
  return (
    <div
      initial={{
        opacity: 0,
        y: -200,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 3,
      }}
      id="about"
      className="mx-8 mt-8 pb-10 lg:mx-20  lg:mt-0"
    >
      <h3 className="text-xl text-headerYellow">ABOUT ME</h3>
      <h1 className="font-Cormorant text-[50px] font-light text-gray-400 ">
        A Bit About Me
      </h1>
      <div className="h-[0.11rem] w-[200px] bg-gray-500" />

      <p className="my-10  font-Cormorant text-[25px] font-light leading-[50px] text-paragraphGray lg:text-[30px] ">
        My name is Lawe Sosah and I specialize in building fully responsive,
        dynamic websites that provide an intuitive user experience. My
        experience with React.js and Next.js has enabled me to create
        feature-rich websites and apps that are optimized for performance and
        compatibility. Additionally, my experience with Django allows me to
        create secure, maintainable applications.
      </p>

      <div className="mx-auto flex justify-center ">
        <a
          href="https://drive.google.com/file/d/1Pa_ZDjIY6h7OmD7pGykb3syt6I-jrzu2/view?usp=sharing"
          target="_blank"
          className="  flex cursor-pointer items-center  space-x-2 rounded-xl border border-white bg-transparent px-10 py-[12px] text-white transition-all duration-500 ease-in-out hover:bg-gray-200 hover:text-black"
        >
          <FileDownloadIcon className="h-12 w-12" />
          <p className="cursor-pointer">Download My Resume</p>
        </a>
      </div>
    </div>
  )
}
export default About
