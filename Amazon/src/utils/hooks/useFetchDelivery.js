import { useEffect, useState } from "react";
export const useFetchDelivery = () =>{
    const [userDatas,setUserData] = useState({});
    const [loadings,setLoading] = useState(false);
    const [errors,setError] = useState();

    useEffect(() =>{
        console.log('Fetching data');
        const controller = new AbortController();
        const asyncFetch =async() =>{
            try{
                const response =await fetch(`http://localhost:7004/api/v1/delivery`, {
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
    return {userDatas,loadings,errors};
}