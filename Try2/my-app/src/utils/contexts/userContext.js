import { createContext } from "react";


export const UserContext = createContext({//We can add any value we want
    _id:'',
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    username:'',
    profile_picture:'',
    tokens: [],
    setData:()=>{},
});
