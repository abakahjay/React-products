//The App component is the root component of the application
//So all other components must be imported and used in this App component.
import { UserProfile } from "./components/UserProfile"
export default function App(){
    const  callMe= ()=>{
        console.log('Hello')
    }
    //We can pass any value to the props
    return <div>
            <h1>Root Component</h1>
            <div>Hello World</div>
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
        </div>
}