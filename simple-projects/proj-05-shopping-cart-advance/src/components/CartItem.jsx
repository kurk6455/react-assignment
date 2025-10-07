import { useRecoilState } from "recoil";
import { wishListState } from "../utilities/recoil_state";


export const CartItem = ({ item }) => {
    console.log("Rendering <CartItem>");

    const [wishList, setWishList] = useRecoilState(wishListState);
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
            if (item.quantity === 1) {
                return { ...item, isCart: false, quantity: 1 };
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
                console.log("INside deleteItem function ----> ")
                console.log(item);
                return { ...item, isCart: false, quantity: 1 };
            }
            return item;
        })
        setWishList(newWishList);
    }


    return (

        <div className="flex items-center gap-4 border-b py-3">
            <img src={item.image} className="w-20 h-20 object-contain rounded" />
            <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-lg text-gray-700 mb-2">₹{item.price}</div>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <div className="w-8 text-center">{item.quantity}</div>
                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => increaseQuantity(item.id)}>+</button>
                    <button className="ml-3 text-red-500 hover:text-red-700" onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}