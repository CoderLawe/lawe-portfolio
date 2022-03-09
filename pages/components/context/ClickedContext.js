import { createContext, useState } from "react";

export const ClickedContext = createContext();

export default function ClickedProvider ({children})  {

    const [clicked, setClicked] = useState(false)
    
    return(
        <ClickedContext.Provider value={[clicked, setClicked]}>
            {children}
        </ClickedContext.Provider>
    )
}