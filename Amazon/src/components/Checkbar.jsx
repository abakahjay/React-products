import"./styles/pages/checkout/checkout-header.css"
import '../styles/shared/general.css';
import PropTypes from "prop-types";
export function CheckBar ({quantity}){
    return <>
                    <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <a href="/" title="home">
                        <img className="amazon-logo" src="images/amazon-logo.png" alt=""/>
                            <img className="amazon-mobile-logo" src="images/amazon-mobile-logo.png" alt=""/>
                            </a>
                        </div>

                        <div className="checkout-header-middle-section">
                            Checkout (<a className="return-to-home-link" title="home"
                                href="/" >{quantity} items</a>)
                        </div>

                        <div className="checkout-header-right-section">
                            <img src="images/icons/checkout-lock-icon.png" alt=""/>
                        </div>
                </div>
            </div>

            </>
}
CheckBar.propTypes = {
    quantity: PropTypes.number.isRequired,
}