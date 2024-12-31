//The App component is the root component of the application
//So all other components must be imported and used in this App component.
import { UserProfile } from "./components/UserProfile"
import { Users } from "./components/users"
import { Fragment, useEffect, useState } from "react"
import { Auth } from "./components/auth"
import { Switch } from "./components/switch"
import { LoginForm } from "./components/LoginForm.jsx"
import { RegisterForm } from "./components/RegisterForm.jsx"
import { UsersStates } from "./components/usersState.jsx"
import { Hook } from "./components/Hooks.jsx"
import { Hooks2 } from "./components/Hooks2.jsx"
import { CustomHook } from "./components/customHook.jsx"
import { PostContentContainer } from "./components/postContentContainer.jsx"
import { UserContext } from "./utils/contexts/userContext.js"
import { useFetchUser } from "./utils/hooks/useFetchUser.js"
import { NavBar } from "./components/NavBar.jsx"
import { Outlet , useNavigate} from "react-router-dom";//We use this Link instead to prevent the page from refreshing
export default function App(){
    //Beginning of React component
    const  callMe= ()=>{
        console.log('Hello')
    }
    const users = [
        { id: '1', name: 'John', email: 'james@example.com' },
        { id: '2', name: 'peter', email: 'peter@example.com' },
        { id: '3', name: 'joshua', email: 'joshua@example.com' },
        { id: '4', name: 'blessed', email: 'blessedr@example.com' },
        { id: '5', name: 'abakah', email: 'abakah@example.com' }
    ];
    const setUsers = ()=>{
        console.log('setUsers');
        return users;
    }
    const [toggle,setToggle]= useState(false);
    //We can pass any value to the props

    const {userData,loading,error} =useFetchUser('abakahjoshua1@gmail.com','2468Qwerty.')
    console.log(loading)
    //This is the state that stores the data we are loading with fetch
    const [data,setData]= useState({})
    const navigate = useNavigate()

    useEffect(()=>{//We use this useEffect Hook to pass the data we fetched  to the document
        if (!error && !loading && userData.user) {
            setData(userData.user);
            //This is how we navigate the user programmatically
            navigate('/')
        }
    },[error,loading,userData.user,navigate])


    return (
        <Fragment>
            <NavBar/>
            <h1>Root Component</h1>
            <div>Hello World</div>
            <div>
                <label htmlFor="data"></label>
                <input type="text" id="data" onChange={(e)=>{
                    if(e.target.value.length > 10){
                        navigate('/users',{
                            state:{//We can also pass down data here
                                posts:[
                                    {
                                        id:'1',
                                        // post: e.target.value,
                                        title: 'Hello World',
                                        message: 'Welcome to my first post',
                                    },
                                    {
                                        id:'2',
                                        // post: e.target.value,
                                        title: 'Hello People',
                                        message: 'Welcome to my second post',
                                    }
                                ]
                            }
                        })
                    }
                }}/>
            </div>
            {/* We must always put values other than strings into curly braises */}
            <UserProfile age={21} username="Abakah Joshua Blessed" callMe={callMe} isLoggedIn={true} favoriteFoods={[{
                name:"Sushi",
                id:"sushi",
            },{
                name:"Yam",
                id:"yam"
            },{
                name:"Pizza",
                id:"pizza",
            }]}/>
            
            <>
                {users.map((user) => {//We always need to add keys that are unique when generating xml data
                    return  <Users key={user.id} user={user} setUsers={setUsers}/>
                })}
            </>
            <Auth/>
            <Switch/>
            <LoginForm/>
            <RegisterForm/>
            <UsersStates/>
            <Hook/>
            <Hooks2/>


            <h1>Custom Levels</h1>
            <button onClick={()=>{
                setToggle((currentState)=>!currentState)
            }}>Toggle Custom Hook</button>


            {/* Conditional Rendering */}
            <p>Conditional Rendering</p>
            {toggle&&<CustomHook/>}


            <h1>API Contexts</h1>
            <UserContext.Provider value={{...data,setData: setData}}>
                {/* Any Component that is found in this Provider is part of the UserContext */}
                {loading?<h1>Loading...</h1>:<PostContentContainer/>}
            </UserContext.Provider>
            {/* This is used to show the the child routes of the current root route */}



            <h1>Child Routes </h1>
            <Outlet/>
        </Fragment>
)}


//npm i -D vitest @testing-library/react jsdom