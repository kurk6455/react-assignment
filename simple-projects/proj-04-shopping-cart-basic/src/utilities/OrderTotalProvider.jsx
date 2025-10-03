import { useEffect, useState, createContext, useContext } from "react";
import { shoppingCartContext } from "./ShoppingCartProvider";

export const orderTotalContext = createContext(null);

export const OrderTotalProvider = ({ children }) => {
    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { shoppingCart } = shoppingCartContextValue.state;

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        //Calculate the total quantity
        setTotalQuantity(shoppingCart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0))

        //Calculate the total price
        setTotalPrice(shoppingCart.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0))
    }, [shoppingCart])

    const [purchase, setPurchase] = useState(false);


    const orderTotalContextValue = {
        state: { totalQuantity, totalPrice, purchase },
        action: { setPurchase }
    }
    return (
        <orderTotalContext.Provider value={orderTotalContextValue}>
            {children}
        </orderTotalContext.Provider>
    )
}


