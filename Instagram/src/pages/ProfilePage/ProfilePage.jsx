import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const { username } = useParams();
    return <h1>Profile of {username}</h1>;
};

export default ProfilePage;
