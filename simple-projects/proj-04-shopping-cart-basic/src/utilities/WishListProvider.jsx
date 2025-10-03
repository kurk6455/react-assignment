import { useEffect } from "react";
import { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const wisthListContext = createContext(null);

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([
        {
            wishListType: "default",
            id: uuidv4(),
            image:
                "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg",
            title: "Mechanical Gaming Keyboard",
            price: 3499,
            quantity: 1,
            isCart: false,
        },
        {
            wishListType: "BBDsale",
            id: uuidv4(),
            image:
                "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
            title: "Wireless Bluetooth Headphones",
            price: 2599,
            quantity: 1,
            isCart: false,
        },
        {
            wishListType: "BBDsale",
            id: uuidv4(),
            image:
                "https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SL1500_.jpg",
            title: "Smartphone (128GB, 6GB RAM)",
            price: 15999,
            quantity: 1,
            isCart: false,
        },
        {
            wishListType: "FestivalSale",
            id: uuidv4(),
            image:
                "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
            title: "Laptop (Intel i5, 8GB RAM, 512GB SSD)",
            price: 56990,
            quantity: 1,
            isCart: false,
        },
        {
            wishListType: "default",
            id: uuidv4(),
            image:
                "https://m.media-amazon.com/images/I/61NJyXc9l-L._AC_SL1500_.jpg",
            title: "Smartwatch with AMOLED Display",
            price: 4999,
            quantity: 1,
            isCart: false,
        },
    ]);
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

    


    //localstorage
    useEffect( () => {
        const data = localStorage.getItem("WishList");
        if(data) setWishList( JSON.parse(data));
    }, [])
    useEffect( () => {
        localStorage.setItem("WishList", JSON.stringify(wishList));
    }, [wishList])

    //Display to catch errors
    useEffect(() => {
        console.log(wishList);
    }, [wishList])


    //utility function
    const updateWishList = (id) => {
        const newWishList = wishList.map(item => {
            if (item.id === id) {
                return { ...item, isCart: true };
            }
            return item;
        })

        setWishList(newWishList);
    }



    const wishListContextValue = {
        state: { wishList, wishListBtn, selectedType, filteredWishlist },
        action: { uuidv4, setWishList, setSelectedType, updateWishList }
    }
    return (
        <wisthListContext.Provider value={wishListContextValue}>
            {children}
        </wisthListContext.Provider>
    )
}