import { NavBar } from "../components/NavBar";
import { useQuantity } from "../utils/hooks/useCartQuanity";
import dayjs from 'dayjs'
import { useFetchOnePro } from "../utils/hooks/useFetchOnePro";
import { useEffect, useState } from "react";

import '../components/styles/pages/tracking.css'

export function Tracking() {
    //For the Cart Quantity
    const { quantity } = useQuantity()

    //This is how we get all the url parameter values
    const url = new URL(window.location.href);//This a builtin Class used for url parameters that takes a url to get the parameter
    // const orderId = url.searchParams.get('orderId');
    const productId = url.searchParams.get('productId');
    const estimatedDeliveryTime = url.searchParams.get('estimatedDeliveryTime');
    const orderTime = url.searchParams.get('orderTime');
    const quantitys = url.searchParams.get('quantity');
    const currentTime = dayjs().format('MMMM D');//This is todays date in the format MONTH Day



    //This is for the product
    const[data,setData]=useState({})//This is for the products in the cart
        const {userData,loading,error}=useFetchOnePro(productId)
        useEffect(() =>{
                    if(!error&& userData.nbHits && !loading){
                        setData(userData)
                        // data.nbHits&&console.log(data);
                    }
                },[error,loading,userData,data])
        const product = data;


    
    // Parse the dates using dayjs
    const currentDate = dayjs(currentTime, 'MMMM D'); // Current time
    const orderDate = dayjs(orderTime, 'MMMM D'); // Order time,This code sends it back to dayjs original format with date in the variable orderTime
    const estimatedDate = dayjs(estimatedDeliveryTime, 'MMMM D'); // Estimated delivery time
    const elapsedTime = currentDate.diff(orderDate, 'day'); // Time elapsed since the order, in days
    const totalTime = estimatedDate.diff(orderDate, 'day'); // Total time from order to delivery, in days


    // console.log('elapsedTime is', elapsedTime, 'days');
    // console.log('totalTime is', totalTime, 'days'); //
    // console.log('orderId is ', orderId);
    // console.log('productId is ', productId);
    // console.log('product is ', product);
    // console.log('orderTime is ', orderTime);
    // console.log('estimatedDeliveryTime is ', estimatedDeliveryTime);
    // console.log('currentTime is ', currentTime);





    const progressPercent = Math.min(Math.max((elapsedTime / totalTime) * 100, 0), 100); // Clamp between 0-100 //We wont get any values outside of this
    // console.log(progressPercent);


    useEffect(()=>{
        const loadEvent =()=>{
            console.log('load event')
            if(progressPercent>=0 && progressPercent<50) {
                document.querySelector('.js-preparing').classList.add('current-status')
            }else if (progressPercent>=50 && progressPercent<=99.9) {
                document.querySelector('.js-shipped').classList.add('current-status')
            }else if (progressPercent===100) {
                document.querySelector('.js-delivered').classList.add('current-status')
            }
        }
        loadEvent()
        document.addEventListener("DOMContentLoaded",loadEvent)

        //We always have to add a cleanup Function in our useEffect Callback
        return ()=>{//This Function is called whenever the component unmounts
            console.log('Unmount Load')
            document.removeEventListener("DOMContentLoaded",loadEvent)

        }
    },[progressPercent])
    
    
    return <>
        <NavBar quantity={quantity} />
        <div className="mainse">
            <div className="order-tracking">
                <a className="back-to-orders-link link-primary" href="/orders">
                    View all orders
                </a>

                <div className="delivery-date">
                    Arriving on {estimatedDeliveryTime}
                </div>

                <div className="product-info">
                    {product.product&&product.product.name}
                </div>

                <div className="product-info">
                    Quantity:{quantitys}
                </div>

                <img className="product-image" src={product.product&&product.product.image} alt=""/>
                    <div className="progress-labels-container">
                        <div className="progress-label js-preparing">
                            Preparing
                        </div>
                        <div className="progress-label js-shipped">
                            Shipped
                        </div>
                        <div className="progress-label js-delivered">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width:progressPercent}}></div>
                    </div>
            </div>
        </div>
    </>
}