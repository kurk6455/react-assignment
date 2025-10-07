import { atom, selector } from "recoil"
import { v4 as uuidv4 } from 'uuid';

export const wishListState = atom({
    key: "wishListState",
    default: [
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
    ]
})

export const wishListBtnState = selector({
    key: "wishListBtnState",
    get: ({get}) => {
        const wishList = get(wishListState);

        let tempBtn = [];
        wishList.map(item => {
            tempBtn.push(item.wishListType);
        })
        return [...new Set(tempBtn)];
    }
})

export const selectedTypeState = atom({
    key: "selectedTypeState",
    default : "default"
})

export const filteredWishListState = selector({
    key: "filteredWishListState",
    get: ({get}) => {
        const wishList = get(wishListState);
        const selectedType = get(selectedTypeState);

        const filteredWishList = wishList.filter( item => item.wishListType === selectedType);
        return filteredWishList;
    }
})

export const shoppingCartState = selector({
    key: "shoppingCartState",
    get: ({get}) => {
        const wishList = get(wishListState);
        const cartList = wishList.filter( item => item.isCart);

        return cartList;
    }
})



export const orderTotalState = selector({
    key: "orderTotalState",
    get : ({get}) => {
        const cartList = get(shoppingCartState);
        let totalQuantity = 0, totalPrice = 0;
        cartList.map( item => {
            totalQuantity += item.quantity;
            totalPrice += (item.price * item.quantity);
        });

        return { totalQuantity, totalPrice }
    } 
})



export const purchaseState = atom({
    key : "purchase",
    default : false
})