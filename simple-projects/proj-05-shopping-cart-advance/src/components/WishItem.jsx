import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { wishListState } from "../utilities/recoil_state";

export const WishItem = ({ item }) => {
    console.log("Rendering <WishItem>", item);

    return (
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={item.image} alt={item.title} className="h-32 mb-3 object-contain" />
            <div className="font-medium text-base text-center">{item.title}</div>
            <div className="font-semibold text-lg mt-1 text-gray-700">₹{item.price}</div>
            {!item.isCart ? (
                <AddToCart id={item.id} />
            ) : (
                <Link to="/cart" className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 rounded transition">
                    Proceed to Cart
                </Link>
            )}
        </div>
    )
}

const AddToCart = ({id}) => {
    const [wishListItem, setWishListItem] = useRecoilState(wishListState(id));

    const updateWishList = () => {
        //i can't introduce hooks directly inside a function
        setWishListItem( {...wishListItem, isCart: true});
    }

    return(
        <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded transition"
        onClick={updateWishList}> Add to Cart </button>
    )
}