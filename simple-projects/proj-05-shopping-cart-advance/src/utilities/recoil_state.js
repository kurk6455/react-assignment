import { atom, atomFamily, selector } from "recoil"

//Data
const wishList = [
    {
        wishListType: "default",
        id: 1,
        image:
            "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg",
        title: "Mechanical Gaming Keyboard",
        price: 3499,
        quantity: 1,
        isCart: false,
    },
    {
        wishListType: "BBDsale",
        id: 2,
        image:
            "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
        title: "Wireless Bluetooth Headphones",
        price: 2599,
        quantity: 1,
        isCart: false,
    },
    {
        wishListType: "BBDsale",
        id: 3,
        image:
            "https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SL1500_.jpg",
        title: "Smartphone (128GB, 6GB RAM)",
        price: 15999,
        quantity: 1,
        isCart: false,
    },
    {
        wishListType: "FestivalSale",
        id: 4,
        image:
            "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
        title: "Laptop (Intel i5, 8GB RAM, 512GB SSD)",
        price: 56990,
        quantity: 1,
        isCart: false,
    },
    {
        wishListType: "default",
        id: 5,
        image:
            "https://m.media-amazon.com/images/I/61NJyXc9l-L._AC_SL1500_.jpg",
        title: "Smartwatch with AMOLED Display",
        price: 4999,
        quantity: 1,
        isCart: false,
    },
]


//Atoms and Selectors
export const wishListIdState = atom({
    key: "wishListIdState",
    default: wishList.map(item => item.id)
})


export const wishListState = atomFamily({
    key: "wishListState",
    default: (id) => wishList.find( item => item.id === id) ?? {}
})

export const wishListBtnState = selector({
    key: "wishListBtnState",
    get: ({ get }) => {
        const wishListId = get(wishListIdState);

        const tempBtn = wishListId.map( id => get(wishListState(id)).wishListType);
        return [...new Set(tempBtn)];
    }
})

export const selectedTypeState = atom({
    key: "selectedTypeState",
    default: "default"
})

export const filteredWishListState = selector({
    key: "filteredWishListState",
    get: ({ get }) => {
        const wishListId = get(wishListIdState);
        const selectedType = get(selectedTypeState);

        return wishListId
        .map( id => get(wishListState(id)))
        .filter(item => item && item.wishListType === selectedType)
    }
})

export const shoppingCartState = selector({
    key: "shoppingCartState",
    get: ({ get }) => {
        const wishListId = get(wishListIdState);
        
        return wishListId
        .map( id => get(wishListState(id)))
        .filter( item => item && item.isCart)
    }
})


export const orderTotalState = selector({
    key: "orderTotalState",
    get: ({ get }) => {
        const cartList = get(shoppingCartState);
        let totalQuantity = 0, totalPrice = 0;
        cartList.forEach(item => {
            totalQuantity += item.quantity;
            totalPrice += (item.price * item.quantity);
        });

        return { totalQuantity, totalPrice }
    }
})


export const purchaseState = atom({
    key: "purchase",
    default: false
})