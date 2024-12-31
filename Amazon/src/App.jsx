
import './styles/shared/general.css';
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { useFetchProducts } from "./utils/hooks/useFetchProducts";
import { ProductContext } from "./utils/contexts/ProductContext";
import { ProductsContainer } from "./components/ProductsContainer";
export default function App(){
    const [productsData,setProducts] = useState({})
    const {userData,loading,error}=useFetchProducts()
    useEffect(() =>{
        if(!error&& userData.nbHits && !loading){
            setProducts(userData)
        }
    },[error,loading,userData])
    return <>
            <NavBar/>
            <ProductContext.Provider value={{...productsData,setProducts:setProducts}}>
                {loading?<h1 style={{marginTop:'80px'}}>Loading...</h1>:<ProductsContainer/>}
            </ProductContext.Provider>
        </>
}