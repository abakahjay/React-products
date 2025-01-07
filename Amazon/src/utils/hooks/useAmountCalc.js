import { useEffect, useState } from "react";
import { useFetchCart } from "./useFetchCart";
export const useAmountCalc = () =>{
    const [cartData,setCart] = useState({})
    const level=useFetchCart()
    useEffect(() =>{
        if(!level.error&& level.userData.nbHits && !level.loading){
            setCart(level.userData)
        }
    },[level.error,level.loading,level.userData])


    let cartItem;
    let productsPriceCents =0;//Accumulator Variables
    let shippingPriceCents =0;//Accumulator Variables
    cartData.cart&&cartData.cart.products.forEach(cartItems => {
        cartItem=cartItems
        productsPriceCents =cartData.cart.totalCartCents;
        shippingPriceCents = cartData.cart.totalDeliveryCents;

    });
    const totalBeforeTaxCents = productsPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;
    return {shippingPriceCents,totalBeforeTaxCents,totalCents,taxCents,cartItem};
}