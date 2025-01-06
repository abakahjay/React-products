import { useEffect, useState } from 'react'
import {CheckBar} from '../components/Checkbar'
import { CheckBody } from '../components/CheckBody'
import { useFetchCart } from '../utils/hooks/useFetchCart.js'
import { CartContext } from '../utils/contexts/CartContext.js'
import { useQuantity } from '../utils/hooks/useCartQuanity.js'
export function Checkout(){
    const [cartData,setCart] = useState({})
        const {userData,loading,error}=useFetchCart()
        useEffect(() =>{
            if(!error&& userData.nbHits && !loading){
                setCart(userData)
            }
        },[error,loading,userData])
        const {quantity} = useQuantity()


        return <>
            <CartContext.Provider value={{...cartData,setCart:setCart}}>
                <CheckBar quantity={quantity}/>
                <CheckBody quantity={quantity}/>
            </CartContext.Provider>
        </>
}