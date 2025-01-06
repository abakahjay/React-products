
import './styles/shared/general.css';
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { useFetchProducts } from "./utils/hooks/useFetchProducts";
import { ProductContext } from "./utils/contexts/ProductContext";
import { ProductsContainer } from "./components/ProductsContainer";
import { useQuantity } from './utils/hooks/useCartQuanity';
export default function App(){
    const [productsData,setProducts] = useState({})
    const {userData,loading,error}=useFetchProducts()
    useEffect(() =>{
        if(!error&& userData.nbHits && !loading){
            setProducts(userData)
        }
    },[error,loading,userData])

    //For the Cart Quantity
    const {quantity}=useQuantity()

    return <>
            <ProductContext.Provider value={{...productsData,setProducts:setProducts}}>
                <NavBar quantity={quantity}/>
                {loading?<h1 style={{marginTop:'80px'}}>Loading...</h1>:<ProductsContainer/>}
            </ProductContext.Provider>
        </>
}