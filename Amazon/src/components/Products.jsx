import PropTypes from "prop-types"

export function Products({product}){
    return <>
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image" src={product.image}/>
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars" src={product.getStarsUrl()}/>
                <div className="product-rating-count link-primary">
                {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {product.getPrice()}
            </div>

            <div className="product-quantity-container">
                <select className="js-quantity-selector-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>
            {product.extraInfoHTML()}
            <div className="added-to-cart added-to-cart-${product.id}">
                <img src="images/icons/checkmark.png"/>
                Added
            </div>

            <button className="add-to-cart-button button-primary js-add-to-cart" data-product-id={product.id}>
                Add to Cart
            </button>
        </div>
    </>
}

Products.propTypes= {
    product: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string.isRequired,
            rating: PropTypes.object,
            extraInfoHTML: PropTypes.func.isRequired,
            getPrice: PropTypes.func.isRequired,
            getStarsUrl: PropTypes.func.isRequired,
    }).isRequired,
}