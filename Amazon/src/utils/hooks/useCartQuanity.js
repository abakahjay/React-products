import { useEffect, useState } from "react";
import { useFetchCart } from "./useFetchCart";
export const useQuantity = () =>{
    const [cartData,setCart] = useState({})
    const level=useFetchCart()
    useEffect(() =>{
        if(!level.error&& level.userData.nbHits && !level.loading){
            setCart(level.userData)
        }
    },[level.error,level.loading,level.userData])

    let quantity=0;
    cartData.cart&&cartData.cart.products.forEach(product => {
        quantity+=product.quantity
    });
    // cartData.cart&&console.log(quantity)
    return {quantity};
}