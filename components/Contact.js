import { send } from 'emailjs-com'
import { useState, forwardRef } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Contact = () => {
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
    <div id="contact" className="mx-8 block py-24 lg:mx-20">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your email was succesfully sent. I will reply to you as soon as
          possible!
        </Alert>
      </Snackbar>
      <h3 className="text-xl text-headerYellow">CONTACT ME</h3>

      <h1 className="font-Cormorant text-[50px] font-light text-gray-400 ">
        Let's get in touch
      </h1>
      <div className="h-[0.11rem] w-[200px] bg-gray-500" />

      <p className="mt-5 font-Cormorant text-[30px] text-paragraphGray">
        Hi! I would be pleased to have a chat with you. Feel free to send me a
        message below, and I will get back to you as soon as possible. Thanks.
      </p>
      <p className="font-Cormorant text-[30px] italic text-gray-400">-Lawe</p>

      <form className="mt-8 flex items-center justify-center">
        <div className="flex-col space-y-5">
          <div className="block space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <input
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              className="w-[80vw] border border-headerYellow bg-transparent p-5 font-serif text-gray-400 transition-all duration-500 ease-out focus:border-gray-400 focus:outline-none lg:w-[auto]"
              type="text"
              placeholder="Name"
            />
            <input
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              className="w-[80vw] border border-headerYellow bg-transparent p-5 font-serif text-gray-400 transition-all duration-500 ease-out focus:border-gray-400 focus:outline-none lg:w-[auto]"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="">
            <textarea
              name="message"
              value={toSend.message}
              onChange={handleChange}
              className="h-[350px] w-[80vw] border border-headerYellow bg-transparent py-5 px-3 font-serif text-gray-400 transition-all duration-500 ease-out focus:border-gray-400 focus:outline-none lg:w-[550px]"
              placeholder="Enter your message here"
            />
          </div>

          <div className="justify-center lg:flex">
            <button
              onClick={onSubmit}
              className="border border-headerYellow py-6 px-24 font-serif text-gray-400 hover:border-gray-400 active:scale-90 lg:px-20"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
