import { useContext, useEffect, useState } from 'react';
import { useFetchProducts } from "../utils/hooks/useFetchProducts";
import '../styles/shared/general.css';
import { OrderSummary } from './OrderSummary';
import {PaymentSummary } from './PaymentSummary';
import "./styles/pages/checkout/checkout.css"
import { ProductContext } from '../utils/contexts/ProductContext';
import { CartContext } from '../utils/contexts/CartContext';
import PropTypes from 'prop-types';
export function CheckBody({quantity,setRefresh}){
    const {cart}=useContext(CartContext)
    cart&&console.log(cart.products)
    const [productsData,setProducts] = useState({})
    const {userData,loading,error}=useFetchProducts()

    useEffect(() =>{
        if(!error&& userData.nbHits && !loading){
            setProducts(userData)
        }
    },[error,loading,userData])
    return <>
    <ProductContext.Provider value={{...productsData,setProducts:setProducts}}>
        <div className="mains">
                <div className="page-title">Review your order</div>
                    <div className="checkout-grid">
                        <div className="order-summary">
                            {loading?<h1 style={{marginTop:'80px'}}>Loading...</h1>:cart&&cart.products.map((pro)=>{
                                return <OrderSummary key={pro._id} pro={pro} setRefresh={setRefresh}
                                />
                                })}
                        </div>
                        <div className="payment-summary">
                            {loading?<h1 style={{marginTop:'80px'}}>Loading...</h1>:cart&&<PaymentSummary totalCartCents={cart.totalCartCents} quantity={quantity}/>}
                        </div>
                    </div>
            </div>
    </ProductContext.Provider>
    </>
}

CheckBody.propTypes= {
    quantity: PropTypes.number.isRequired,
    setRefresh: PropTypes.func.isRequired
}