import { useContext } from "react";
import { Link } from "react-router-dom"
import { orderTotalContext } from "../utilities/OrderTotalProvider";


export const Header = () => {
    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalQuantity } = orderTotalContextValue.state;

    return (
        <>
            <div>amazon.in</div>
            <div>Hello, user</div>
            <Link to="/cart">🛒 {totalQuantity}</Link>
        </>
    )
}
