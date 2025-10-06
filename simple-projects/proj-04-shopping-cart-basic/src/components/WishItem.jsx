import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { wishListDataContext } from "../utilities/WishListDataProvider";

export const WishItem = React.memo(({ item }) => {
    console.log("Rendering <WishItem>", item);

    const wishListDataContextValue = useContext(wishListDataContext);
    const { updateWishList } = wishListDataContextValue.action;


    return (
        <>
            <img src={item.image} />
            <div>Title - {item.title}</div>
            <div>Price - {item.price}</div>     
            { !item.isCart ? <Link onClick={() => { updateWishList(item.id) }}>Add to cart</Link> : <Link to="/cart">Proceed to cart</Link> }    
             
        </>
    )
})