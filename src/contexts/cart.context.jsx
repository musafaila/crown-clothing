import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpened: false,
    setIscartOpened: ()=> {}
})

export const CartContextProvider = ({children}) => {
    const [isCartOpened, setIscartOpened] = useState(false);
    const value = {isCartOpened, setIscartOpened}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}