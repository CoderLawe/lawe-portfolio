import { send } from "emailjs-com";
import { useState, forwardRef } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name:"",
        message:"",
        reply_to:"",
    });

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    

const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_kv6g78p',
        'template_adq07to',
        toSend,
        'OsrgV26KCnzNX1gPf'

    )
    .then((response) => {
        console.log("Success!", response)
    })
    .catch((err) => {
        console.log("Yeah it failed...", err)
    })

    setToSend({from_name:"", message:"", reply_to:""})
    setOpen(true)

}

const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  
    return(
        <div id="contact" className="py-24 lg:mx-20 mx-8 block">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your email was succesfully sent. I will reply to you as soon as possible!
            </Alert>
            </Snackbar>
            <h3 className="text-headerYellow text-xl">CONTACT ME</h3>

            <h1 className="text-gray-200 text-[40px] lg:text-[52px] mt-10 font-serif">Let's get in touch</h1>
            <div className="w-[200px] bg-gray-500 h-[0.11rem]"/>

            <p className="text-paragraphGray text-[30px] mt-5 font-Cormorant">
                Hi! I would be pleased to have a chat with you. Feel free to send me a message below, and I will get back to you as soon as possible.
                Thanks.
            </p>
            <p className="text-gray-400 text-[30px] font-Cormorant italic">-Lawe</p>

            <form className="flex justify-center items-center mt-8">
                <div className="flex-col space-y-5">
                    <div className="lg:flex lg:space-x-6 block space-y-6 lg:space-y-0">
                        <input name="from_name"  value={toSend.from_name} onChange={handleChange} className="border border-headerYellow p-5 font-serif bg-transparent focus:outline-none w-[80vw] lg:w-[auto] text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" type="text" placeholder="Name" />
                        <input name="reply_to" value={toSend.reply_to} onChange={handleChange}  className="border border-headerYellow p-5 font-serif bg-transparent focus:outline-none w-[80vw] lg:w-[auto] text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" type="email" placeholder="Email" />

                    </div>

                    <div className="">
                        <textarea name="message" value={toSend.message} onChange={handleChange}  className="bg-transparent border border-headerYellow h-[350px] w-[80vw] lg:w-[550px] font-serif py-5 px-3 focus:outline-none text-gray-400 transition-all duration-500 ease-out focus:border-gray-400" placeholder="Enter your message here"/>
                    </div>
                    
                    <div className="lg:flex justify-center">
                        <button onClick={onSubmit} className="border border-headerYellow text-gray-400 font-serif py-6 lg:px-20 px-24 active:scale-90 hover:border-gray-400" >SUBMIT</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact