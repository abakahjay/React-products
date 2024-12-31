import { createContext } from "react";
export const ProductContext = createContext([//We can add any value we want
    {
        products: [],
        setProducts:()=>{}
    }
]);
