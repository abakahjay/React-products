import { useEffect, useState } from "react";

export const useFetchUser = (email,password) =>{
    const [userData,setUserData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();

    useEffect(() =>{
        console.log('Fetching data');
        const controller = new AbortController();
        const asyncFetch =async() =>{
            
            // setLoading(true);
            try{
                const response =await fetch("http://localhost:7004/api/v1/auth/login", {
                    signal: controller.signal,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email:email, password:password }),
                })
                setLoading(true);
                const data = await response.json();
                // console.log(data)
                setUserData(data);
                setError(undefined)
                setTimeout(()=>{
                    setLoading(false);
                },2000)
            }catch(error){
                setLoading(true);
                console.log(`There is an error: ${error.message}`)
                const data = {user:{message:'error',successful:false}};
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
    },[email,password]);
    return {userData,loading,error};
}