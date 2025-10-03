import { useContext } from "react"
import { wisthListContext } from "../utilities/WishListProvider"
import { WishItem } from "./WishItem";

export const WishList = () => {
    const wishListContextValue = useContext(wisthListContext);
    const { wishListBtn, filteredWishlist } = wishListContextValue.state;
    const { setSelectedType } = wishListContextValue.action;

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
}

