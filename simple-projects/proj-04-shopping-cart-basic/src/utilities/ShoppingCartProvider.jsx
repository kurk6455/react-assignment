import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { wishListDataContext } from "./WishListDataProvider";

export const shoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
    console.log("Rendering <ShoppingCartProvider>");

    const wishListDataContextValue = useContext(wishListDataContext);
    const { wishList } = wishListDataContextValue.state;
    const { setWishList } = wishListDataContextValue.action;

    const [shoppingCart, setShoppingCart] = useState([]);
    useEffect(() => {
        const filteredItem = wishList.filter( item => item.isCart);
        // const filteredItem = wishList.reduce((acc, item) => {
        //     if (item.isCart) acc.push({ ...item, quantity: 1 });

        //     return acc;
        // }, [])
        setShoppingCart(() => filteredItem)
    }, [wishList])


    // Display to catch errors
    useEffect(() => {
        console.log(shoppingCart)
    }, [shoppingCart])


    //utility function
    const increaseQuantity = useCallback((id) => {
        const newShoppingCart = wishList.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setWishList(newShoppingCart);
    }, [wishList])
    const decreaseQuantity = useCallback((id) => {
        const newShoppingCart = wishList.map(item => {
            if(item.quantity === 1){
                return { ...item, isCart: false, quantity: 1};
            }
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
        })
        setWishList(newShoppingCart);
    }, [wishList])
    const deleteItem = useCallback((id) => {
        const newWishList = wishList.map(item => {
            if (item.id === id) {
                console.log("INside deleteItem function ----> ")
                console.log(item);
                return { ...item, isCart: false, quantity: 1};
            }
            return item;
        })
        setWishList(newWishList);
    }, [wishList])


    const shoppingCartContextValue = {
        state: { shoppingCart },
        action: { increaseQuantity, decreaseQuantity, deleteItem }
    }
    return (
        <shoppingCartContext.Provider value={shoppingCartContextValue}>
            {children}
        </shoppingCartContext.Provider>
    )
}


