import { NavBar } from "../components/NavBar";
import { useQuantity } from "../utils/hooks/useCartQuanity";

export function Orders(){

    //For the Cart Quantity
    const {quantity}=useQuantity()
    
    return <>
            <NavBar quantity={quantity}/>
            <h1 style={{marginTop:'80px'}}>Orders</h1>
        </>
}