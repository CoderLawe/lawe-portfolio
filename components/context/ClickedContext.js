import { createContext, useState } from "react";

export const ClickedContext = createContext();
export const PostContext = createContext();
export const ModalContext = createContext();
export const FirstContext = createContext();
export const SecondContext = createContext();
export const Thirdcontext = createContext();
export const FourthContext = createContext();

export const HoveredContext = createContext();
export const StagedContext = createContext();

export default function ClickedProvider ({children})  {

    const [clicked, setClicked] = useState(false)
    const [post, setPost] = useState([]);
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")
    const [thirdImage, setThirdImage] = useState("")
    const [fourthImage, setFourthImage] = useState("")


    const [modalOpen, setModalOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [staged, setStaged] = useState({
        title:"Kona equity",
        img1:"https://cdn.discordapp.com/attachments/817048198022430761/1056637873786458203/kona-mockup.png",
        img2:"https://cdn.discordapp.com/attachments/839784544798638090/1056301484783972542/Screen_Shot_2022-12-24_at_7.31.53_PM.png"
    })
    console.log('open?',modalOpen)
    console.log('hovered?', hovered)
    return(
        <ClickedContext.Provider value={[clicked, setClicked]}>
            <PostContext.Provider value={[post, setPost]}>
                <ModalContext.Provider value={[modalOpen, setModalOpen]}>
                    <FirstContext.Provider value={[firstImage, setFirstImage]}>
                        <SecondContext.Provider value={[secondImage, setSecondImage]}>
                            <Thirdcontext.Provider value={[thirdImage, setThirdImage]}>
                                <HoveredContext.Provider value={[hovered, setHovered]}>
                                    <StagedContext.Provider value={[staged, setStaged]}>
                                        <FourthContext.Provider value={[fourthImage, setFourthImage]}>
                                            {children}

                                        </FourthContext.Provider>
                                    </StagedContext.Provider>
                                </HoveredContext.Provider>
                            </Thirdcontext.Provider>
                        </SecondContext.Provider>
                    </FirstContext.Provider>
                </ModalContext.Provider>
            </PostContext.Provider>
        </ClickedContext.Provider>      
    )
}