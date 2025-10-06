import { useState, useMemo, createContext, useContext, useEffect } from "react";
import { wishListDataContext} from "./WishListDataProvider";

export const wishListUIContext = createContext(null);

export const WishListUIProvider = ({ children }) => {
    console.log("Rendering <WishList-UI-Provider>");

    const { state : {wishList} } = useContext(wishListDataContext);

    //State
    const [wishListBtn, setWishListBtn] = useState([]);
    useEffect(() => {
        let tempBtn = [];
        wishList.map(item => {
            tempBtn.push(item.wishListType);
        })
        tempBtn = [...new Set(tempBtn)];
        setWishListBtn(tempBtn)
    }, [wishList])
    const [selectedType, setSelectedType] = useState("default");
    const [filteredWishlist, setFilteredWishlist] = useState([]);
    useEffect(() => {
        setFilteredWishlist(wishList.filter(item => item.wishListType === selectedType));
    }, [wishList, selectedType])


    const wishListUIContextValue = useMemo(() => ({
        ui: { wishListBtn, selectedType, filteredWishlist },
        action: { setSelectedType }
    }), [wishList, filteredWishlist]);
    return (
        <wishListUIContext.Provider value={wishListUIContextValue}>
            {children}
        </wishListUIContext.Provider>
    )
}