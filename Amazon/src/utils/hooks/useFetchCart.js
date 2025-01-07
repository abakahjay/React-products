import { useEffect, useState } from "react";
// import dayJs from "dayjs"
export const useFetchCart = () =>{
    const [userData,setUserData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    

    useEffect(() =>{
        console.log('Fetching data');
        const controller = new AbortController();
        const asyncFetch =async() =>{
            try{
                const response =await fetch("http://localhost:7004/api/v1/cart/677d11f3fbb51c2146710501", {
                    signal: controller.signal,
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                })
                setLoading(true);
                const data = await response.json();
                
                
                setUserData(data);
                // console.log(userData)
                setError(undefined)
                setTimeout(()=>{
                    setLoading(false);
                },200)
            }catch(error){
                setLoading(true);
                console.log(`There is an error: ${error.message}`)
                const data = {products:{message:'error',successful:false}};
                // console.log(data);
                setUserData(data);
                setError(error.message);
                setTimeout(()=>{
                    setLoading(false);
                },2000)
            }
        };
        asyncFetch();//Async Wrapper
        return ()=>{//This is a cleanup function
            setLoading(true);
            console.log('Unmounting the custom useEffect Fetch');
            setTimeout(()=>{
                setLoading(false);
            },2000)
            controller.abort();
        }
    },[]);
    return {userData,loading,error};
}