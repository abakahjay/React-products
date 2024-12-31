import { useState } from "react";
import  Cookie from "js-cookie";



export function Hooks2(){
    
    const [logInfo,setLogInfo] = useState({
            email:'',
            password:'',
        });
    return <>
            <h1>Use Post Example</h1>
            <form className="form" onSubmit={async(e)=>{
                e.preventDefault();
                const formData = new FormData(e.target);
                console.log(`Your Email is: ${formData.get('email')}`);
                console.log(`Your Password is: ${formData.get('password')}`);
                const email = logInfo.email//document.querySelector("#email").value;
                const password = logInfo.password//document.querySelector("#passwords").value;
            
                if(logInfo.email && logInfo.password){
                    //We can also get values of the form data this way

                    const response = await fetch("http://localhost:7004/api/v1/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password }),
                    });
                
                    const data = await response.json();
                    console.log(data);
                    if (data.token) {
                        console.log(data.token);
                        Cookie.set('userId',data.token)
                        localStorage.setItem(`userId`,data.userId)
                        localStorage.setItem(`token-${data.userId}`, data.token)
                        sessionStorage.setItem(`token-${data.userId}`, data.token);
                        sessionStorage.setItem(`userId`,data.userId)
                        alert("Login successful!");
                        window.location.href = `http://localhost:7004/dashboard/dashboard.html?oven=${data.token}&id=${data.userId}`
                        // After login on localhost:7004

                    } else {
                        alert(data.error || "No Token found");
                    }
                }
            }}>
                <label htmlFor="username" className="form-label">Email</label>
                <br />
                <input className="form-input"  type="email" autoComplete="true" placeholder="Enter email" name="email" id="email" value={logInfo.email} onChange={(e)=>{
                    setLogInfo((currentState)=>(//Shortcut for returning an object
                        {...currentState,email: e.target.value}
                    ));
                }}/>
                <br />
                <label htmlFor="passwords" className="form-label">Password</label>
                <br />
                <input className="form-input" autoComplete="true" placeholder="Enter password" type="password" name="password" id="passwords" value={logInfo.password}
                onChange={(e)=>{
                    setLogInfo((currentState)=>(//Shortcut for returning an object
                        {...currentState,password: e.target.value}
                    ));
                }}/>
                <br />
                <button type="submit" className="btn">Login</button>
            </form>
    </>
}