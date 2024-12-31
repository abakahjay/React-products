import '../styles/shared/general.css';
import "./styles/pages/checkout/checkout.css"
export function CheckBody(){
    return <>
        <div className="mains">
                <div className="page-title">Review your order</div>
                    <div className="checkout-grid">
                        <div className="order-summary">
                            Order Summary
                        </div>

                        <div className="payment-summary">
                            Payment Summary
                        </div>
                    </div>
            </div>
    </>
}