import { useContext } from "react";
import { orderTotalContext } from "../utilities/OrderTotalProvider";


export const PurchaseSuccessful = () => {
    console.log("Rendering <PurchaseSuccessful>");

    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalPrice } = orderTotalContextValue.state;
    const { purchaseSuccessfulFn} = orderTotalContextValue.action;

    return (
        <>
            <div>Purchase Successfull</div>
            <div>✅</div>
            <p>Thank you for your purchase. Your order has been successfully processed</p>
            <div>Total amount - {totalPrice}</div>
            <button onClick={purchaseSuccessfulFn}>Close</button>
        </>
    )
}