import PropTypes from 'prop-types';
import '../styles/shared/amazon-header.css';
// import { Generals } from '../utils/raw/generals';
export function NavBar({quantity}) {
    // const searchBar=document.querySelector('.search-bar')
    // const searchButton=document.querySelector('.search-button')
    // Generals(searchBar,searchButton);
    return <nav className="amazon-header">
                <div className="amazon-header-left-section">
                    <a href="/" className="header-link" title="home">
                        <img className="amazon-logo" alt=""
                            src="images/amazon-logo-white.png" />
                        <img className="amazon-mobile-logo" alt=""
                            src="images/amazon-mobile-logo-white.png" />
                    </a>
                </div>

                <div className="amazon-header-middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button title="search" className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" alt="" />
                    </button>
                </div>

                <div className="amazon-header-right-section">
                    <a className="orders-link header-link" href="/orders">
                        <span className="returns-text">Returns</span>
                        <span className="orders-text">& Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" alt="" />
                        <div className="cart-quantity js-cart-quantity">{quantity}</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </nav>
}

NavBar.propTypes = {
    quantity: PropTypes.number.isRequired
}