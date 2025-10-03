import { useContext } from "react";
import { shoppingCartContext } from "../utilities/ShoppingCartProvider";


export const CartItem = ({ item }) => {
    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { increaseQuantity, decreaseQuantity, deleteItem } = shoppingCartContextValue.action;

    return (
        <>
            <img src={item.image} />
            <div>Title - {item.title}</div>
            <div>Price - {item.price}</div>
            <button onClick={ () => increaseQuantity(item.id)}>+</button>
            <div>{item.quantity}</div>
            <button onClick={ () => decreaseQuantity(item.id)}>-</button>
            <button onClick={ () => deleteItem(item.id)}>Delete</button>
        </>
    )
}