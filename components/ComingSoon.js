import { send } from 'emailjs-com'
import { MailOutline } from '@mui/icons-material'
import Image from 'next/image'
import { useContext, useState, forwardRef } from 'react'
import { LoadedContext } from './context/ClickedContext'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ComingSoon = () => {
  const [loaded, setLoaded] = useContext(LoadedContext)

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send('service_kv6g78p', 'template_adq07to', toSend, 'OsrgV26KCnzNX1gPf')
      .then((response) => {
        console.log('Success!', response)
      })
      .catch((err) => {
        console.log('Yeah it failed...', err)
      })

    setToSend({ from_name: '', message: '', reply_to: '' })
    setOpen(true)
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <div
      className={
        loaded ? 'h-screen w-full  justify-between bg-white lg:flex' : 'hidden'
      }
    >
      {/* Left side */}
      <div className="flex justify-center lg:block">
        <div className="absolute order-1 h-[40%] w-[90vw] lg:mt-[99px] lg:h-[435px] lg:w-[610px]">
          <Image
            className=""
            src="https://cdn.discordapp.com/attachments/817048198022430761/1074061856110542960/house.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right side */}

      <div className="mx-32 flex justify-center lg:block">
        <div className="mt-[250px] block space-y-[10px] lg:mt-[130px]  lg:mr-[90px]">
          <div className="hidden space-y-[10px] lg:block lg:w-[400px]">
            <div className="">
              <p className="text-center font-serif text-[24px] text-gray-700">
                {' '}
                Renovations in progress!
              </p>
            </div>
            <p className="font-Cormorant text-[22px] leading-[32px] text-gray-700">
              I'm currently doing minor fixes to the site for a more immersive
              experience(A 3D experience). Trust me... it will be worth the wait
            </p>
          </div>

          {/* Small screen */}

          <div className="lg:hidden">
            <p className="text-center font-serif text-[18px] text-gray-700">
              {' '}
              Renovations in progress!
            </p>
          </div>

          <div className="relative -top-[10px] mx-[24px] flex justify-center lg:hidden">
            <p className="text-center font-Cormorant text-[18px] leading-[32px] text-black">
              I'm currently doing minor fixes to the site for a more immersive
              experience(A 3D experience). Trust me... it will be worth the wait
            </p>
          </div>

          <div className="mx-[12px]">
            <div className="mt-[70px] block ">
              <div className="flex space-x-[10px]">
                <input
                  value={toSend.from_name}
                  onChange={handleChange}
                  name="from_name"
                  className="rounded-[8px] border border-[#6C63FF] px-[14px] py-[6px] font-Cormorant"
                  placeholder="First name"
                />
                <input
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  className="rounded-[8px] border border-[#6C63FF] px-[14px] py-[6px] font-Cormorant"
                  placeholder="Email address"
                  type="email"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <textarea
                name="message"
                value={toSend.message}
                onChange={handleChange}
                className="h-[100px] w-full rounded-[8px] border border-[#6C63FF] px-[14px] pt-[8px] font-Cormorant"
                placeholder="Leave me a message here"
              />
            </div>

            <div className="group mt-[10px] flex cursor-pointer items-center justify-center transition-all duration-500 ease-linear">
              <MailOutline
                onClick={onSubmit}
                className="cursor-pointer text-[35px] text-[#6C63FF]"
              />
              <p className="ml-[5px] hidden font-Cormorant text-[14px] text-[#6C63FF]  group-hover:flex">
                Send
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
