import React, { useContext } from "react"
import { wishListUIContext } from "../utilities/WishListUIProvider";
import { WishItem } from "./WishItem";

export const WishList = React.memo(() => {
    console.log("Rendering <WishList>");

    const wishListUIContextValue = useContext(wishListUIContext);
    const { wishListBtn, filteredWishlist } = wishListUIContextValue.ui;
    const { setSelectedType } = wishListUIContextValue.action;



    return (
        <>
            {filteredWishlist.length !== 0 ?
                <>
                    <div>
                        {wishListBtn.map(type => {
                            return <button key={type} onClick={() => {
                                setSelectedType(type);
                            }}>{type}</button>
                        })}
                    </div>

                    <div>
                        {filteredWishlist.map(item => <WishItem key={item.id} item={item} />)}
                    </div>
                </>
                : <div>Wishlist is empty</div>}
        </>
    )
})

