import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
export function BlogPost(){

    const [posts,setPosts]= useState([])
    const {state}= useLocation();//We use this to get the data passed by the useNavigation
    console.log(state.posts[0])
    console.log(window.history.state)
    useEffect(()=>{
        if (state && state.posts) {
            setPosts(state.posts)
        }
    },[state])
    // console.log(posts)
    return <div>
                <h1>You created a route(page)</h1>
                <h1>Welcome to my BlogPost</h1>
                {posts.map((post)=>{
                    return<div key={post.id}>
                        <div>Title: {post.title}</div>
                        <div>Message: {post.message}</div>
                    </div>
                })}
            </div>
}
    
