import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { orderTotalState, purchaseState, wishListIdState, wishListState } from "../utilities/recoil_state";


export const PurchaseSuccessful = () => {
    console.log("Rendering <PurchaseSuccessful>");

    const { totalPrice } = useRecoilValue(orderTotalState);
    const wishListId = useRecoilValue(wishListIdState);
    const setPurchase = useSetRecoilState(purchaseState);


    const purchaseSuccessfulFn = useRecoilCallback(({ set }) => () => {
        wishListId.forEach(id => {
            set(wishListState(id), (prev) => ({ ...prev, isCart: false, quantity: 1 }))
        })

        setPurchase(false);
    })

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center text-center">
                <div className="text-2xl font-bold mb-2">Purchase Successful!</div>
                <div className="text-green-500 text-5xl mb-4">✅</div>
                <p className="text-gray-700 mb-4">Thank you for your purchase. Your order has been successfully processed.</p>
                <div className="text-lg font-semibold mb-6">Total Amount: <span className="text-blue-500">₹{totalPrice}</span></div>
                <button className="w-40 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold transition" onClick={purchaseSuccessfulFn} >Close</button>
            </div>
        </div>
    )
}