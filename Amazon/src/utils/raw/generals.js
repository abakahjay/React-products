import { ProductsContainer } from "../../components/ProductsContainer.jsx";
import { useState } from "react";
// import { renderProductsGrid } from "./amazon.js";
import { useEffect } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts.js";


export function Generals(searchBar,searchButton){
    const [productse,setProducts] = useState({})
    const {userData,loading,error}=useFetchProducts()
    useEffect(() =>{
        if(!error&& userData.nbHits && !loading&&userData.products[0]){
            setProducts(userData.products)
        }
    },[error,loading,userData])
    const products=productse;
    products[0]&&console.log(products)
    let searchItems = [];//All the query(searched words) will be placed in this array

    // Load search items from local storage
    function loadFromStorage() {
        searchItems = JSON.parse(localStorage.getItem('searchItems')) || [];
    }

    // Save search items to local storage
    function saveToStorage() {
        localStorage.setItem('searchItems', JSON.stringify(searchItems));
    }

    // Perform search and update the UI
    function performSearch(query) {
        const searched = products[0]&&products.filter((product) =>//We can use the filter and some to the filter
            product.keywords.some(keyword => keyword.includes(query))
        );

        if (!query || searched.length === 0) {
            const message = query
                ? `Sorry, no results for: ${query}. Please check spelling or try a single keyword.`
                : "No products found.";
            document.querySelector('.js-products-grid').innerHTML = `
                <div style="font-size: 20px; text-align: center;">
                    <p>${message}</p>
                </div>`;
        } else {
            ProductsContainer(searched);
            console.log(searched);
            console.log(query);
        }
    }

    // Update URL with the search query
    function updateURL(query) {
        const baseURL = '/';
        const newURL = `${baseURL}?search=${encodeURIComponent(query)}`;
        window.location.href = newURL;
    }

    // Handle search button click or Enter key
    function handleSearch() {
        // const searchBar = document.querySelector('.search-bar');
        const query = searchBar.value.trim().toLowerCase();
        if (!query) return;

        searchItems = [query];//It resets the array every time to  be equal to the query
        saveToStorage();//And this will update the local storage every time
        updateURL(query); // Redirect to the new URL with the search query
        
    }

    // Initialize search logic and events
    function initializeSearch() {
        loadFromStorage();

        // const searchBar = document.querySelector('.search-bar');
        // const searchButton = document.querySelector('.search-button');

        // Parse query from URL if present
        const urlParams = new URLSearchParams(window.location.search);//We can use this directly instead of the URL class itself
        const query = urlParams.get('search');
        if (query) {
            searchBar.value = query;
            performSearch(query.toLowerCase());
        }

        // Add event listeners
        searchButton.addEventListener('click', handleSearch);
        searchBar.addEventListener('keydown', event => {
            if (event.key === 'Enter') handleSearch();
        });
    }
    loadFromStorage();
    console.log(searchItems);
    // Initialize everything once products are loaded
    initializeSearch();
}

