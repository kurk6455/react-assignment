import { useContext } from "react";
import { orderTotalContext } from "../utilities/OrderTotalProvider";


export const PurchaseSuccessfull = () => {
    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalPrice } = orderTotalContextValue.state;
    const { setPurchase } = orderTotalContextValue.action;

    return (
        <>
            <div>Purchase Successfull</div>
            <div>✅</div>
            <p>Thank you for your purchase. Your order has been successfully processed</p>
            <div>Total amount - {totalPrice}</div>
            <button onClick={() => setPurchase(false)}>Close</button>
        </>
    )
}