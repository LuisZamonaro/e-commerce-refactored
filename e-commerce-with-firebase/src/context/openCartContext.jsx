import { createContext, useState } from "react";

export const OpenContext = createContext()

export const OpenProvieder = ({children}) => {
    const [openCart, setOpenCart] = useState(false)

    return (
        <OpenContext.Provider value={{openCart, setOpenCart}}>{children}</OpenContext.Provider>
    )
}