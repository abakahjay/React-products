import { useEffect, useState } from "react";
import { useFetchCart } from "./useFetchCart";

export const useQuantity = () => {
    const [cartData, setCart] = useState({});
    const level = useFetchCart();

    // Fetch cart data initially and whenever `level` changes
    useEffect(() => {
        if (!level.error && level.userData.nbHits && !level.loading) {
            setCart(level.userData);
        }
    }, [level.error, level.loading, level.userData]);

    // Method to refresh the cart data manually
    const refreshCart = async () => {
        try {
            const response = await fetch("http://localhost:7004/api/v1/cart/677d11f3fbb51c2146710501");
            const data = await response.json();
            setCart(data); // Update cart state with new data
        } catch (error) {
            console.error("Failed to fetch cart data:", error);
        }
    };

    // Calculate quantity from the cart data
    let quantity = 0;
    cartData.cart && cartData.cart.products.forEach((product) => {
        quantity += product.quantity;
    });

    return { quantity, refreshCart }; // Expose quantity and refreshCart
};
