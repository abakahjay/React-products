import { useContext, useState } from "react";
import { PostContent } from "./postContent";
import { UserContext } from "../utils/contexts/userContext.js";

export function PostContentContainer(){
    const [data,setData]= useState('hello World')
    //To get the values of the Context we have to use the hook called useContext()
    //We are going to consume the context

    //Instead of using props we can create a new context and make it accessible to the components we want
    const aData =useContext(UserContext)
    console.log(aData)
    return <div>
        <h2>Post Content Container</h2>
        <div>Email:  {aData.email}</div>
        <div>First Name:  {aData.lastName}</div>
        <PostContent data={data} setData={setData}/>
    </div>
}