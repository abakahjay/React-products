import { NavBar } from "../components/NavBar";
import { useQuantity } from "../utils/hooks/useCartQuanity";

export function Tracking(){
    //For the Cart Quantity
    const {quantity}=useQuantity()
    return <>
            <NavBar quantity={quantity}/>
            <h1 style={{marginTop:'80px'}}>Tracking</h1>
        </>
}