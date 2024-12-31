//To create a state we need to import the function from react
import { useState } from "react";//This is also a react hook

export function RegisterForm(){
    //We can also use this get the values from the form
    //This is Array destructuring
    //This is the best option to use to bind data to a state
    const [firstName,setFirstName]=useState('');//THis always returns an array with two elements(a dispatch function and the your first state)
    const [lastName,setLastName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //This is used to control the button
    const isDisabled = !firstName || !lastName || !username || !password || !email || !password

    //THis is the shortcut for the above code
    const [formFields,setFormFields] = useState({
        firstName:'',lastName:'',username:'',password:'',email:'',
    })

    return (
        <>
            <h1>Sign-Up</h1>
            <form className="form" onSubmit={async(event)=>{//It is not advisable to state the method and the action in the form
                    event.preventDefault();//The prevents the default behavior of the browser refreshing
                    //We can also get values of the form data this way instead of using document.querySelector
                    const formData = new FormData(event.target);
                    console.log(`Your First Name is: ${formData.get('First Name')}`);
                    console.log(`Your Last Name is: ${formData.get('Last Name')}`);
                    console.log(`Your User Name is: ${formData.get('User Name')}`);
                    console.log(`Your Email is: ${formData.get('email')}`);
                    console.log(`Your Password is: ${formData.get('password')}`);

                    //This is also another method of getting the form values
                    const firstName = document.querySelector("#fname").value;
                    const lastName = document.querySelector("#lname").value;
                    const username = document.querySelector("#usernames").value;//We cant use the keyword username
                    const email = document.querySelector("#email").value;
                    const password = document.querySelector("#passwords").value;//We cant use the keyword password
                
                    const response = await fetch("http://localhost:7004/api/v1/auth/signup", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ firstName, lastName, username, email, password }),
                    });
                
                    const data = await response.json();
                    console.log(data);
                    // if (response.ok) {
                    //     alert("Login successful!");
                    // } else {
                    //     alert(data.error || "Something went wrong");
                    // }
                    if (data.token) {
                        alert("Sign-Up successful!");
                        localStorage.setItem(`token-${data.userId}`, data.token);
                        localStorage.setItem(`userId`,data.userId)
                        sessionStorage.setItem(`token-${data.userId}`, data.token);
                        sessionStorage.setItem(`userId`,data.userId)
                        window.location.href = `http://localhost:7004/dashboard/dashboard.html?oven=${data.token}&id=${data.userId}`;
                    } else {
                        alert(data.error || "No Token found");
                    }
                
                }}>
                <div>
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <br />
                    {/* first ve have to bind the value to the useState function before we can set it */}
                    <input className="form-input" required value={formFields.firstName} autoComplete="true" placeholder="Enter first name" name="First Name" id="fname" onChange={(e)=>{
                        console.log('Value Changed');
                        setFirstName(e.target.value)

                        //THis one is preferred to the one on top
                        setFormFields((currentState)=>(//This is the shortcut to return an object
                            //So this code creates a copy of the current state and overrides the first name
                            {...currentState,firstName:e.target.value}//We used the spreader operator so that it doesn't change the value
                        ))
                        // console.log(e.target.value);
                    }}/>
                </div>
                <div>{formFields.firstName}</div>
                <div>
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <br />
                    <input className="form-input" required value={lastName} autoComplete="true" placeholder="Enter last name" name="Last Name" id="lname" onChange={(e)=>{
                        console.log('Value Changed');
                        setLastName(e.target.value)
                        // console.log(e.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="usernames" className="form-label">Username</label>
                    <br />
                    <input className="form-input" required value={username} autoComplete="true" placeholder="Enter username" name="User Name" id="usernames" onChange={(e)=>{
                        console.log('Value Changed');
                        setUsername(e.target.value)
                        // console.log(e.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <br />
                    <input className="form-input" required value={email} autoComplete="true" placeholder="Enter email" name="email" id="email" onChange={(e)=>{
                        console.log('Value Changed');
                        setEmail(e.target.value);
                        // console.log(e.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="passwords" className="form-label">Password</label>
                    <br />
                    <input className="form-input" value={password} autoComplete="true" placeholder="Enter password" required type="password" name="password" id="passwords"onChange={(e)=>{
                        console.log('Value Changed');
                        setPassword(e.target.value);
                        // console.log(e.target.value);
                    }}/>
                </div>
                <button type="submit" disabled={isDisabled} className="btn">Register</button>
            </form>
        </>
    )
}