import { send } from 'emailjs-com'
import { MailOutline } from '@mui/icons-material'
import Image from 'next/image'
import { useContext, useState, forwardRef } from 'react'
import { LoadedContext } from './context/ClickedContext'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import News from './News'
import Field from './Field'
import Footer2 from './Footer2'

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
    <div className="m-0 box-border p-0">
      <News />
      <Field />
      <img
        className="w-image sm:w-morehalf lg:w-half 2xl:w-lesshalf my-12 mx-auto"
        src="/images/illustration-dashboard.png"
        alt="dashboard"
      ></img>
      <Footer2 />
    </div>
  )
}

export default ComingSoon
