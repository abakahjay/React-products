import { useEffect, useState } from 'react'
import {CheckBar} from '../components/Checkbar'
import { CheckBody } from '../components/CheckBody'
import { useFetchCart } from '../utils/hooks/useFetchCart.js'
import { CartContext } from '../utils/contexts/CartContext.js'
import { useQuantity } from '../utils/hooks/useCartQuanity.js'
export function Checkout(){
    const [cartData,setCart] = useState({})
    const [refresh,setRefresh] = useState(true)
        const {userData,loading,error}=useFetchCart()
        useEffect(() =>{
            // console.log(refresh)
            if(!error&& userData.nbHits && !loading &&refresh){
                setRefresh(false)
                setCart(userData)
                // Checkout() 
            }
        },[error,loading,userData,refresh])
        const {quantity} = useQuantity()


        return <>
            <CartContext.Provider value={{...cartData,setCart:setCart}}>
                {/* {console.log(cartData)} */}
                <CheckBar quantity={quantity}/>
                <CheckBody setRefresh={setRefresh} quantity={quantity}/>
            </CartContext.Provider>
        </>
}