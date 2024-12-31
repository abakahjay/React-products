import { FormatCurrency } from "./useFormatCurrency";

class Product {//We are converting the products into instances of a Class to add more Functionality
    id;
    image;
    name;
    rating;
    priceCents;
    keywords;
    type;
    constructor(productDetails) {//It is the constructor that contains the setup code for the product
        //All the code below is just to convert an object into a class
        this.id = productDetails._id;
        this.image = productDetails.image;
        this.name = productDetails.name;
        this.rating = productDetails.rating;
        this.priceCents = productDetails.priceCents;
        this.keywords = productDetails.keywords;
        this.type = productDetails.type;
    }
    getStarsUrl() {
        return `images/ratings/rating-${this.rating.stars * 10}.png`;
    }
    getPrice() {
        return `$${FormatCurrency(this.priceCents)}`;
    }
    extraInfoHTML() {
        return '';
    }
};
class Clothing extends Product {//This is called Inheritance//The word after the extend keyword is the parent class leaving the other to be the child class
    sizeChartLink;
    constructor(productDetails) {
        super(productDetails);//Super constructor must be called in derived class before accessing properties from constructor(eg. this)
        this.sizeChartLink = productDetails.sizeChartLink;
    }
    extraInfoHTML() {//This is called Polymorphism(Method Overriding)
        return <a href={this.sizeChartLink} target="_blank">
                    Size chart
                </a>
        
    }
};
class Appliances extends Product {
    instructions;
    warranty;
    constructor(productDetails) {
        super(productDetails);
        this.instructions = productDetails.instructions;
        this.warranty = productDetails.warranty;
    }
    extraInfoHTML() {
        return <>
            <a href={this.instructions} target="_blank">
                Instructions
            </a>
            <a href={this.warranty} target="_blank">
                Warranty
            </a>
        </>
    };
};
export const ClassWrapper = (products) => {
    products=products.map((product) => {//This is an Array function that runs code for each and every member of the Array
        if (product.type === 'clothing') {
            return new Clothing(product);
        }
        if (product.type === 'appliance') {
            return new Appliances(product);
        }
        return new Product(product);//Whatever that is the return value will be put in the new Array
    });
    return products;
}