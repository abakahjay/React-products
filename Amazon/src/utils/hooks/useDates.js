import { useEffect, useState } from "react";
// import dayJs from "dayjs"
// import { FormatCurrency } from "./useFormatCurrency";
import { useFetchOneDel } from "./useFetchOneDel";
export const useDates = (pro) =>{
    const[data,setData]=useState({})//This is for the products in the cart
    const {userDatas,loadings,errors}=useFetchOneDel(pro.deliveryOptionId);

    useEffect(() =>{
        if(!errors&& userDatas.nbHits && !loadings){
            setData(userDatas)
            // data.nbHits&&console.log(data);
        }
    },[errors,loadings,userDatas,data])



    // const today = new dayJs();
    // userData.delivery&&console.log(userData.delivery.deliveryDays)
    // const priceString = userData.delivery.priceCents
    //             ===0
    //                 ? 'FREE'//This code will run if the condition above is true
    //                 : `$${FormatCurrency(userData.delivery.priceCents)} -`; //This code will run if the condition above is false
    
    // console.log(userData);


    // const deliveryDate = today.add(userData.delivery.deliveryDays,'days');
    // const dateString = deliveryDate.format('ddd, D MMMM YYYY');
    
    return {data};
}