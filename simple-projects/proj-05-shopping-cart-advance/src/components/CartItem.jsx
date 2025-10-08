import { useRecoilState } from "recoil";
import { wishListState } from "../utilities/recoil_state";


export const CartItem = ({ item }) => {
    console.log("Rendering <CartItem>");

    return (
        <div className="flex items-center gap-4 border-b py-3">
            <img src={item.image} className="w-20 h-20 object-contain rounded" />
            <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-lg text-gray-700 mb-2">₹{item.price}</div>
                <div className="flex items-center gap-2">
                    <DecreaseQuantity id={item.id} />
                    <div className="w-8 text-center">{item.quantity}</div>
                    <IncreaseQuantity id={item.id} />
                    <DeleteQuantity id={item.id} />
                </div>
            </div>
        </div>
    )
}

const IncreaseQuantity = ({ id }) => {
    const [wishListItem, setWishListItem] = useRecoilState(wishListState(id));

    const increaseQuantity = () => {
        setWishListItem({ ...wishListItem, quantity: wishListItem.quantity + 1 });
    }

    return (
        <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded" onClick={increaseQuantity}>+</button>
    )
}
const DecreaseQuantity = ({ id }) => {
    const [wishListItem, setWishListItem] = useRecoilState(wishListState(id));

    const decreaseQuantity = () => {
        if (wishListItem.quantity === 1) {
            setWishListItem({ ...wishListItem, isCart: false, quantity: 1 });
            return;
        }
        setWishListItem({ ...wishListItem, quantity: wishListItem.quantity - 1 });
    }

    return (
        <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded" onClick={decreaseQuantity}>-</button>
    )
}
const DeleteQuantity = ({ id }) => {
    const [wishListItem, setWishListItem] = useRecoilState(wishListState(id));

    const deleteItem = () => {
        setWishListItem({ ...wishListItem, isCart: false, quantity: 1 });
    }

    return (
        <button className="ml-3 text-red-500 hover:text-red-700" onClick={deleteItem}>Delete</button>
    )
}