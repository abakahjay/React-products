import { useEffect, useState } from "react";
import { useFetchCart } from "./useFetchCart";
import { useFetchOnePro } from "./useFetchOnePro";
import { useFetchOneDel } from "./useFetchOneDel";
export const useAmountCalc = () =>{
    const [cartData,setCart] = useState({})
    const level=useFetchCart()
    useEffect(() =>{
        if(!level.error&& level.userData.nbHits && !level.loading){
            setCart(level.userData)
        }
    },[level.error,level.loading,level.userData])



    let productsPriceCents =0;//Accumulator Variables
    let shippingPriceCents =0;//Accumulator Variables
    cartData.cart&&cartData.cart.products.forEach(cartItem => {
        // console.log(cartItem)
        // const fetcher=()=>{

            //This is for the Product Money
            // const product = useFetchOnePro(cartItem.productId);
            // productsPriceCents += product.priceCents * cartItem.quantity;
    
            // //This is for the Delivery Options Money
            // const deliveryOption  = useFetchOneDel(cartItem.deliveryOptionId);
            // shippingPriceCents += deliveryOption.priceCents
        // }
        // fetcher()

    });
    const totalBeforeTaxCents = productsPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;
    return {totalBeforeTaxCents,totalCents,taxCents};
}