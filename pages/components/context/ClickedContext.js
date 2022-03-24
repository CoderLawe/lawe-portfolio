import { createContext, useState } from "react";

export const ClickedContext = createContext();
export const PostContext = createContext();
export const ModalContext = createContext();
export const FirstContext = createContext();
export const SecondContext = createContext();
export const Thirdcontext = createContext();
export default function ClickedProvider ({children})  {

    const [clicked, setClicked] = useState(false)
    const [post, setPost] = useState([]);
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")
    const [thirdImage, setThirdImage] = useState("")

    const [modalOpen, setModalOpen] = useState(false);
    console.log('open?',modalOpen)
    return(
        <ClickedContext.Provider value={[clicked, setClicked]}>
            <PostContext.Provider value={[post, setPost]}>
                <ModalContext.Provider value={[modalOpen, setModalOpen]}>
                    <FirstContext.Provider value={[firstImage, setFirstImage]}>
                        <SecondContext.Provider value={[secondImage, setSecondImage]}>
                            <Thirdcontext.Provider value={[thirdImage, setThirdImage]}>
                                {children}

                            </Thirdcontext.Provider>
                        </SecondContext.Provider>
                    </FirstContext.Provider>
                </ModalContext.Provider>
            </PostContext.Provider>
        </ClickedContext.Provider>      
    )
}