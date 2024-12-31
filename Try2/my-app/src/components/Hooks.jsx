import { useEffect, useState } from "react"

export function Hook(){
    const [counter,setCounter]=useState(0);
    const [sync,setSync] = useState(false);//THis is a common approach for checking if something is changed
    //?THis useEffect takes two parameters:A callback function and an Array of dependencies
    //The Array changes  how the useEffect Hook works
    useEffect(()=>{//It is used for side Effects
        console.log('Rendering....')
        document.title='Hook useEffect ' + counter
    //If there is no Array,the callback function will be called everytime the document is loaded or refreshed
    //If there is an empty array the callback function will be called only when the the document loads successfully
    //When we add a dependency to the array it also call the callback function when the dependency is changed
    },[counter,sync])//This function is invoked by the useEffect hook as soon as the App loads this component or refreshes the page

    useEffect(()=>{//It is used for side Effects
        const controller = new AbortController();
        // console.log(controller.signal)
        const asyncWrapper =async()=>{
            try{
                const response =await fetch("http://localhost:7004/api/v1/auth/logins", {
                    signal: controller.signal,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email:'abakahjoshua1@gmail.com', password:'2468Qwerty.'}),
                })
                const data = await response.json();
                // if (data.token) {
                //     alert("Login successful!");
                //     localStorage.setItem(`token-${data.userId}`, data.token);
                //     localStorage.setItem(`userId`,data.userId)
                //     window.location.href = "http://localhost:7004/dashboard/dashboard.html";
                // } else {
                //     alert(data.error || "No Token found");
                // }
                console.log(data)
            }catch(error){
                console.log(`There is an error: ${error.message}`)
                return (<div style={{color:'white'}}>{error.message}</div>)
            }
        }
        asyncWrapper();
        //This is also called a cleanup Function
        return ()=>{//!This callback function is called at the stage of unmounting
            //Unmounting is done only once on reload or refresh
            console.log("Unmounting");
            controller.abort();
        }
    },[])
    return <>
        <h1>Use Effect Hook</h1>
        <div>You clicked the button {counter} times</div>
        <div style={{display:"flex",gap:"10px"}}>
            <button onClick={()=>{
                setCounter((currentState)=>currentState+1)
            }}>Click me</button>
            <button onClick={()=>{
                setSync((currentState)=>!currentState)
            }}>Sync</button>
        </div>
    </>
}