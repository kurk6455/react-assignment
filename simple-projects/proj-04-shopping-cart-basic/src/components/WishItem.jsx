import { Link } from "react-router-dom";
import { useContext } from "react";
import { wisthListContext } from "../utilities/WishListProvider";

export   const WishItem = ({ item }) => {
    const wishListContextValue = useContext(wisthListContext);
    const { updateWishList } = wishListContextValue.action;


    return (
        <>
            <img src={item.image} />
            <div>Title - {item.title}</div>
            <div>Price - {item.price}</div>     
            { !item.isCart ? <Link onClick={() => { updateWishList(item.id) }}>Add to cart</Link> : <Link to="/cart">Proceed to cart</Link> }    
             
        </>
    )
}