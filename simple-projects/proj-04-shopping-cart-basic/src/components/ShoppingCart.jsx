import { useContext } from "react";
import { shoppingCartContext } from "../utilities/ShoppingCartProvider";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { orderTotalContext } from "../utilities/OrderTotalProvider";
import { useState } from "react";
import { PurchaseSuccessful } from "./PurchaseSuccessful";


export const ShoppingCart = () => {
    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { shoppingCart } = shoppingCartContextValue.state;

    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalQuantity, totalPrice, purchase } = orderTotalContextValue.state;
    const { setPurchase } = orderTotalContextValue.action;



    return (
        <>
            {shoppingCart.length !== 0 ?
                <>
                    <div>
                        <div>Shopping Cart</div>

                        {shoppingCart.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })}
                    </div>

                    <div>
                        <div>Order Summary</div>
                        <div>Item ({totalQuantity}):                {totalPrice}</div>
                        <div>OrderTotal:              {totalPrice}</div>
                        <button onClick={() => setPurchase(true)}>Proceed to buy</button>
                        {purchase && <PurchaseSuccessful/>}
                    </div>
                </> : <div>Cart is empty</div>}

                <Link to="/">Go to wishlist</Link>
        </>
    )
}


