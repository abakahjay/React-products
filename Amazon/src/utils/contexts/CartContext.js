import { createContext } from "react";
export const CartContext = createContext([//We can add any value we want
    {
        cart: [],
        setCart:()=>{}
    }
]);