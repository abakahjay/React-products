import PropTypes from "prop-types"
import { FormatCurrency } from "../utils/hooks/useFormatCurrency"
import { OrdersPro } from "./OrdersPro"

export function OrdersFull({orderItem}) {

    return <>
        <div className="order-container">
            <div className="order-header">
                <div className="order-header-left-section">
                    <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{orderItem.orderTime}</div>
                    </div>
                    <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>${FormatCurrency(orderItem.totalCostCents)}</div>
                    </div>
                </div>

                <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{orderItem._id}</div>
                </div>
            </div>

            <div className="order-details-grid order-details-grid-${orderItem.orderId}">
                {orderItem.products.map(itemCart =>{
                    return <OrdersPro key={itemCart.productId} itemCart={itemCart} orderId={orderItem._id} orderTime={orderItem.orderTime}/>
                })}
                {/* <OrdersPro/> */}
            </div>
        </div>
    </>
}
OrdersFull.propTypes ={
    orderItem: PropTypes.object.isRequired,
}