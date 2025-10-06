import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { wishListDataContext } from "../utilities/WishListDataProvider";

export const WishItem = React.memo(({ item }) => {
    console.log("Rendering <WishItem>", item);

    const wishListDataContextValue = useContext(wishListDataContext);
    const { updateWishList } = wishListDataContextValue.action;


    return (
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={item.image} alt={item.title} className="h-32 mb-3 object-contain" />
            <div className="font-medium text-base text-center">{item.title}</div>
            <div className="font-semibold text-lg mt-1 text-gray-700">₹{item.price}</div>
            {!item.isCart ? (
                <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded transition"
                    onClick={() => updateWishList(item.id)}> Add to Cart </button>
            ) : (
                <Link to="/cart" className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 rounded transition">
                    Proceed to Cart
                </Link>
            )}
        </div>
    )
})