export function Auth(){
    const isAuthenticated = false;
    //This is the shortcut for the code below
    //And it is the best option to use ternary operators instead
    return isAuthenticated ?
    <>
        <h1>You are Logged in</h1>
    </> :
    <>
    <h1>You are not Logged in</h1>
    </>
    // if(isAuthenticated){
    //     return (
    //         <>
    //             <h1>You are Logged in</h1>
    //         </>
    //     )
    // }
    // return (
    //     <>
    //         <h1>You are not Logged in</h1>
    //     </>
    // )
}