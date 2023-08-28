import { useContext } from 'react'
import {
  FirstContext,
  FourthContext,
  HoveredContext,
  ModalContext,
  PostContext,
  SecondContext,
  Thirdcontext,
} from './context/ClickedContext'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
const Card = ({
  title,
  img,
  description,
  link,
  first,
  second,
  third,
  fourth,
}) => {
  const [post, setPost] = useContext(PostContext)
  const [modalOpen, setModalOpen] = useContext(ModalContext)
  const [firstImage, setFirstImage] = useContext(FirstContext)
  const [secondImage, setSecondImage] = useContext(SecondContext)
  const [thirdImage, setThirdImage] = useContext(Thirdcontext)
  const [fourthImage, setFourthImage] = useContext(FourthContext)

  const [hovered, setHovered] = useContext(HoveredContext)
  const handleClicked = (first, second, third) => {
    setModalOpen(true)
    setFirstImage(first)
    setSecondImage(second)
    setThirdImage(third)
    setFourthImage(fourth)

    console.log('images', firstImage)
  }

  return (
    <div
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      className="group   flex-col space-x-4 rounded-2xl shadow-lg transition-all duration-500 ease-in-out lg:w-[350px] "
    >
      <div className="relative h-[200px]  cursor-pointer lg:w-[350px]">
        <Image
          onClick={() => handleClicked(first, second, third)}
          className="object-cover transition-all duration-500 ease-out group-hover:bg-black group-hover:opacity-75"
          layout="fill"
          src={img}
          alt="portfolio-card-cover"
        />
      </div>
      {/* <div
        onClick={() => handleClicked(first, second, third)}
        className="z-50 mx-[100px]   transform cursor-pointer  opacity-0 transition-all duration-300 group-hover:opacity-100"
      >
        <SearchIcon className="h-10 w-10 text-white" />
      </div> */}

      <div className=" -mt-10 py-10 transition-all duration-500 ease-in-out group-hover:flex md:hidden">
        <div className="z-[50] flex justify-center">
          <div className="block">
            <h1 className="mt-3 flex justify-center font-serif text-gray-400">
              {title}
            </h1>
            <div className="mb-3 h-[0.11rem]  w-[150px] bg-headerYellow" />
            <p className="text-paragraphGray">{description}</p>

            <a
              target="_blank"
              href={link}
              className="mt-5 flex cursor-pointer justify-center font-serif text-headerYellow hover:underline "
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
