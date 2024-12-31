import '../styles/shared/general.css';
import "../styles/pages/checkout/checkout.css"
export function CheckBody(){
    return <>
        <div className="main">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                    </div>

                    <div className="payment-summary">

                    </div>
                </div>
            </div>
    </>
}