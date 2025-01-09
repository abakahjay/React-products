import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { useQuantity } from "../utils/hooks/useCartQuanity";
import { useFetchOrders } from "../utils/hooks/useFetchOrders";
import "../components/styles/pages/orders.css";
import { OrdersFull } from "../components/OrdersFull";

export function Orders(){
    const [orderData,setOrder] = useState({})
        const [refresh,setRefresh] = useState(true)
            const {userData,loading,error}=useFetchOrders()
            useEffect(() =>{
                // console.log(refresh)
                if(!error&& userData.nbHits && !loading &&refresh){
                    setRefresh(false)
                    setOrder(userData)
                    // Checkout() 
                }
            },[error,loading,userData,refresh])
            const orders=orderData
            orders.nbHits&&console.log(orderData)

    //For the Cart Quantity
    const {quantity}=useQuantity()
    
    return <>
            <NavBar quantity={quantity}/>
            {/* <h1 style={{marginTop:'80px'}}>Orders</h1> */}
            <div className="mainss">
            <div className="page-title">Your Orders</div>
                <div className="orders-grid">
                {orders.nbHits&&orderData.orders.map((orderItem)=>{
                    return <OrdersFull key={orderItem._id}  orderItem={orderItem}/>
                })}
                </div>
            </div>
        </>
}