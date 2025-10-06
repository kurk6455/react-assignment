import { useContext } from "react";
import { shoppingCartContext } from "../utilities/ShoppingCartProvider";


export const CartItem = ({ item }) => {
    console.log("Rendering <CartItem>");

    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { increaseQuantity, decreaseQuantity, deleteItem } = shoppingCartContextValue.action;

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