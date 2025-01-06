import dayJs from 'dayjs';
import PropTypes from "prop-types";
import { FormatCurrency } from "../utils/hooks/useFormatCurrency";
const today = new dayJs();
export function DeliveryOptions({delivery,pro}){
    // console.log(pro)
    const priceString = delivery.priceCents
            ===0
                ? 'FREE'//This code will run if the condition above is true
                : `$${FormatCurrency(delivery.priceCents)} -`; //This code will run if the condition above is false

    const deliveryDate = today.add(delivery.deliveryDays,'days');
    const dateString = deliveryDate.format('ddd, D MMMM YYYY');

    const IsChecked = delivery.deliveryOptionId === pro.deliveryOptionId;
    // console.log(IsChecked)
    return <>
            <div className="delivery-option"
            // data-product-id={matchingProduct.id} data-delivery-option-id={deliveryOption.id}
            >
                <input type="radio"
                checked={IsChecked}
                className="delivery-option-input"
                name={`delivery-option-${delivery._id}-${pro._id}`} onChange={()=>{

                }}/>
                <div>
                    <div className="delivery-option-date">
                        {dateString}
                    </div>
                    <div className="delivery-option-price">
                        {priceString}  Shipping
                    </div>
                </div>
            </div>
        </>
}

DeliveryOptions.propTypes = {
    delivery: PropTypes.object.isRequired,
    pro: PropTypes.object.isRequired
}