import PropTypes from "prop-types"
import { useFetchOnePro } from "../utils/hooks/useFetchOnePro"
import { useEffect, useState } from "react"

export function OrdersPro({itemCart,orderId,orderTime}){
    const[data,setData]=useState({})//This is for the products in the cart
    const {userData,loading,error}=useFetchOnePro(itemCart.productId)
    useEffect(() =>{
                if(!error&& userData.nbHits && !loading){
                    setData(userData)
                    // data.nbHits&&console.log(data);
                }
            },[error,loading,userData,data])
    const product = data;
    // data.product&&console.log(product.product);
    return <>
                <div className="product-image-container">
                    <img src={data.product&&product.product.image} alt=""/>
                </div>

                <div className="product-details">
                    <div className="product-name">
                        {data.product&&product.product.name}
                    </div>
                    <div className="product-delivery-date">
                        Arriving on: {itemCart.estimatedDeliveryTime}
                    </div>
                    <div className="product-quantity">
                        Quantity: {itemCart.quantity}
                    </div>
                    <button className="buy-again-button button-primary" data-product-id="${itemCart.id}">
                        <img className="buy-again-icon" src="images/icons/buy-again.png" alt=""/>
                        <span className="buy-again-message">Buy it again</span>
                    </button>
                </div>

                <div className="product-actions">
                    <a href={`/tracking?orderId=${orderId}&estimatedDeliveryTime=${itemCart.estimatedDeliveryTime}&productId=${itemCart.productId}&quantity=${itemCart.quantity}&orderTime=${orderTime}`}>
                        <button className="track-package-button button-secondary">
                            Track package
                        </button>
                    </a>
                </div>
            </>
}

OrdersPro.propTypes ={
    itemCart: PropTypes.object.isRequired,
    orderTime: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
}