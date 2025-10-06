import { useContext } from "react";
import { shoppingCartContext } from "../utilities/ShoppingCartProvider";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { orderTotalContext } from "../utilities/OrderTotalProvider";
import { PurchaseSuccessful } from "./PurchaseSuccessful";


export const ShoppingCart = () => {
    console.log("Rendering <ShoppingCart>");

    const shoppingCartContextValue = useContext(shoppingCartContext);
    const { shoppingCart } = shoppingCartContextValue.state;

    const orderTotalContextValue = useContext(orderTotalContext);
    const { totalQuantity, totalPrice, purchase } = orderTotalContextValue.state;
    const { setPurchase } = orderTotalContextValue.action;



    return (
        <div className="w-full max-w-7xl mx-auto flex flex-row gap-6 px-4 py-8">
            {/* Cart Items */}
            <div className="flex-1 bg-white rounded shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                {shoppingCart.length > 0 ? (
                    shoppingCart.map(item => <CartItem key={item.id} item={item} />)
                ) : (
                    <div className="text-gray-500 text-lg">Cart is empty</div>
                )}
            </div>
            {/* Order Summary */}
            <div className="w-96 bg-white rounded shadow p-6 h-fit">
                <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
                <div className="mb-2 text-gray-700">Items: {totalQuantity}</div>
                <div className="mb-2 text-gray-700">Order Total: <span className="font-semibold text-lg">₹{totalPrice}</span></div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded text-lg font-bold transition mb-2" onClick={() => setPurchase(true)}>
                    Proceed to Buy
                </button>
                {purchase && <PurchaseSuccessful />}
                <Link to="/" className="block mt-4 text-blue-500 hover:underline">
                    Go to wishlist
                </Link>
            </div>
        </div>
    )
}


