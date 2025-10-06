import { useContext } from "react";
import { Link } from "react-router-dom"
import { orderTotalContext } from "../utilities/OrderTotalProvider";


export const Header = () => {
    console.log("Rendering <Header>");

    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalQuantity } = orderTotalContextValue.state;

    return (
        <div className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow">
            <div className="text-2xl font-bold tracking-wide">amazon.in</div>
            <div className="text-sm">Hello, user</div>
            <Link to="/cart" className="relative px-3 py-2 rounded hover:bg-gray-800 transition"> 🛒
                <span className="absolute -top-1 -right-2 bg-orange-500 text-xs rounded-full px-1.5 py-0.5 font-semibold">{totalQuantity}</span>
            </Link>
        </div>
    )
}
