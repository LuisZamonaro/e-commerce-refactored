import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
    const [numberCart, setNumberCart] = useState(0)

    const addProduct = () => {
        setCounter(counter + 1)
      }
    
      const removeProduct = () => {
        setCounter(counter - 1)
        setNumberCart(counter - 1)
        if (counter <= 0) {
          setCounter(0)
        }
      }

      const handleValue = () => {
        setNumberCart(counter)
      }

      return (
        <CartContext.Provider value={{counter, setCounter, removeProduct, addProduct, numberCart, setNumberCart, handleValue}}>{children}</CartContext.Provider>
      )
}