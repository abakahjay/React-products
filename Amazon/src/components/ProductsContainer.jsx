import './styles/pages/amazon.css';
import { useContext } from "react"
import { ProductContext } from "../utils/contexts/ProductContext"
import { Products } from './Products';

export function ProductsContainer(){
    const {products}= useContext(ProductContext);
    return <>
                <div className="main">
                    <div className="products-grid js-products-grid" >
                            {products&&products.map((product)=>{
                                return <Products key={product.id} product={product}/>
                            })}
                    </div>
                </div>
            </>
}