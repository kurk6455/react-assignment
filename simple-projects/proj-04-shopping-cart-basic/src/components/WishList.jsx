import React, { useContext } from "react";
import { wishListUIContext } from "../utilities/WishListUIProvider";
import { WishItem } from "./WishItem";

export const WishList = React.memo(() => {
    console.log("Rendering <WishList>");

    const wishListUIContextValue = useContext(wishListUIContext);
    const { wishListBtn, filteredWishlist } = wishListUIContextValue.ui;
    const { setSelectedType } = wishListUIContextValue.action;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar with filters/types */}
            <aside className="lg:col-span-3 bg-white rounded-lg shadow border border-gray-200 p-4 flex flex-col">
                <h2 className="font-semibold text-lg mb-4">Your Wish List</h2>
                <div className="flex flex-col gap-2">
                    {wishListBtn.map(type =>
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className="w-full text-left px-4 py-2 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-50 transition"
                        >
                            {type}
                        </button>
                    )}
                </div>
            </aside>

            {/* Main grid area for wish list items or empty state */}
            <section className="lg:col-span-9">
                {filteredWishlist.length !== 0 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWishlist.map(item => <WishItem key={item.id} item={item} />)}
                    </div>
                    :
                    <div className="bg-white border border-dashed border-gray-300 rounded-lg p-12 text-center text-gray-600 text-sm">
                        Wishlist is empty
                    </div>
                }
            </section>
        </div>
    )
});
