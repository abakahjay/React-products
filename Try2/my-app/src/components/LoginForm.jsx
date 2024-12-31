export function LoginForm(){
    return(
        <>
            <h1>Login</h1>
            <form className="form" onSubmit={async(event)=>{//It is not advisable to state the method and the action in the form
                    event.preventDefault();//The prevents the default behavior of the browser refreshing
                    //We can also get values of the form data this way
                    const formData = new FormData(event.target);
                    console.log(`Your Email is: ${formData.get('email')}`);
                    console.log(`Your Password is: ${formData.get('password')}`);

                    const email = document.querySelector("#username").value;
                    const password = document.querySelector("#password").value;
                
                    const response = await fetch("http://localhost:7004/api/v1/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password }),
                    });
                
                    const data = await response.json();
                    // console.log(data);
                    // if (response.ok) {
                    //     alert("Login successful!");
                    // } else {
                    //     alert(data.error || "Something went wrong");
                    // }
                    if (data.token) {
                        alert("Login successful!");
                        localStorage.setItem(`token-${data.userId}`, data.token);
                        localStorage.setItem(`userId`,data.userId)
                        sessionStorage.setItem(`token-${data.userId}`, data.token);
                        sessionStorage.setItem(`userId`,data.userId)
                        window.location.href = `http://localhost:7004/dashboard/dashboard.html?oven=${data.token}&id=${data.userId}`;
                    } else {
                        alert(data.error || "No Token found");
                    }
                
                }}>
                <label htmlFor="username" className="form-label">Email</label>
                <br />
                <input className="form-input" autoComplete="true" placeholder="Enter email" name="email" id="username" onChange={(e)=>{
                    console.log('Value Changed');
                    console.log(e.target.value);
                }}/>
                <br />
                <label htmlFor="password" className="form-label">Password</label>
                <br />
                <input className="form-input" autoComplete="true" placeholder="Enter password" type="password" name="password" id="password"onChange={(e)=>{
                    console.log('Value Changed');
                    console.log(e.target.value);
                }}/>
                <br />
                <button type="submit" className="btn">Login</button>
            </form>
        </>
    )
}