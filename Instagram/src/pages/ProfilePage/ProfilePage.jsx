import React from "react";
import { useParams } from "react-router-dom";

export function ProfilePage (){
    const { username } = useParams();
    return <h1>Profile of {username}</h1>;
};
