import { useEffect, useState, createContext, useContext } from "react";
import { wishListContext } from "./WishListProvider";

export const shoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
    const wishListContextValue = useContext(wishListContext);
    const { wishList } = wishListContextValue.state;
    const { setWishList } = wishListContextValue.action;

    const [shoppingCart, setShoppingCart] = useState([]);
    useEffect(() => {
        const filteredItem = wishList.filter( item => item.isCart);
        // const filteredItem = wishList.reduce((acc, item) => {
        //     if (item.isCart) acc.push({ ...item, quantity: 1 });

        //     return acc;
        // }, [])
        setShoppingCart(() => filteredItem)
    }, [wishList])


    //Display to catch errors
    useEffect(() => {
        console.log("inside ShoppingCartProvider")
        console.log(shoppingCart)
    }, [shoppingCart])


    //utility function
    const increaseQuantity = (id) => {
        const newShoppingCart = wishList.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setWishList(newShoppingCart);
    }
    const decreaseQuantity = (id) => {
        const newShoppingCart = wishList.map(item => {
            if(item.quantity === 1){
                return { ...item, isCart: false, quantity: 1};
            }
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
        })
        setWishList(newShoppingCart);
    }
    const deleteItem = (id) => {
        const newWishList = wishList.map(item => {
            if (item.id === id) {
                return { ...item, isCart: false, quantity: 1};
            }
            return item;
        })
        setWishList(newWishList);
    }


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


