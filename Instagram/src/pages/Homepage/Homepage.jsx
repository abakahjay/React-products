import React from "react";
export function Homepage({authUser}){
    const user=authUser.user;
    console.log(user)
    return <>
            <h1>Welcome to Instagram Clone</h1>
            <h1>Home Page</h1>
            <h1>Hello {user.firstName}</h1>
        </>
}

