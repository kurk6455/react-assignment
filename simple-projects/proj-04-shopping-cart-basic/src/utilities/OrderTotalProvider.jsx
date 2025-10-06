import { useEffect, useState, createContext, useContext, useCallback, useMemo } from "react";
import { shoppingCartContext } from "./ShoppingCartProvider";

export const orderTotalContext = createContext(null);

export const OrderTotalProvider = ({ children }) => {
    console.log("Rendering <OrderTotalProvider>");

    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { shoppingCart } = shoppingCartContextValue.state;
    const { deleteItem } = shoppingCartContextValue.action;

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useMemo(() => {
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


    //Utility
    const purchaseSuccessfulFn = useCallback(() => {
        shoppingCart.map( item => deleteItem(item.id))
        setPurchase(false);
    })


    const orderTotalContextValue = {
        state: { totalQuantity, totalPrice, purchase },
        action: { setPurchase, purchaseSuccessfulFn }
    }
    return (
        <orderTotalContext.Provider value={orderTotalContextValue}>
            {children}
        </orderTotalContext.Provider>
    )
}


