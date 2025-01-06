import PropTypes from "prop-types"

import {FormatCurrency} from '../utils/hooks/useFormatCurrency'
export function  PaymentSummary({quantity,totalCartCents}){
    return <>
        <div className="payment-summary-title">
                    Order Summary
                </div>
                <div className="payment-summary-row">
                    <div className="items">Items({quantity}):</div>
                    <div className="payment-summary-money">
                        ${FormatCurrency(totalCartCents)}
                        </div>
                </div>
                <div className="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div className="payment-summary-money">$
                        {/* {useFormatCurrency(shippingPriceCents)} */}
                        </div>
                </div>
                <div className="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div className="payment-summary-money">$
                        {/* {useFormatCurrency(totalBeforeTaxCents)} */}
                        </div>
                </div>
                <div className="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div className="payment-summary-money">
                        {/* ${ useFormatCurrency(taxCents)} */}
                    </div>
                </div>
                <div className="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div className="payment-summary-money">$
                        {/* {useFormatCurrency(totalCents)} */}
                        </div>
                </div>
                <button className="place-order-button button-primary">
                    Place your order
                </button>
    </>
}

PaymentSummary.propTypes = {
    quantity: PropTypes.number.isRequired,
    totalCartCents: PropTypes.number.isRequired,
}