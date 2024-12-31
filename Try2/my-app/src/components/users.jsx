import  PropTypes  from "prop-types"
import { useState } from "react";
export function Users({user,setUsers}) {//We did destructuring of the props here
    const [isEditing,setIsEditing] = useState(false);//useState can take any  value
    const [username,setUsername]= useState(user.name);
    const [email,setEmail]= useState(user.email);
    return (
        <div>
            <div>
                    <b>Id: </b><span>{user.id}</span>
                    <br/>
                    <b>Username: </b>{isEditing?<input name="username" id="username" value={username} onChange={(e)=>{
                        setUsername(()=>e.target.value);
                    }}/>:<span>{user.name}</span>}
                    <br/>
                    <b>Email: </b>{isEditing?<input name="email" id="email" type="email" value={email} onChange={(e)=>{
                        setEmail(()=>e.target.value);
                    }}/>:<span>{user.email}</span>}
            </div>
            <div style={{display:"flex",gap:"10px"}}>
                <button onClick={async()=>{
                    await setIsEditing((currentState)=>!currentState)
                    console.log(isEditing)
                }}>Edit</button>
                {isEditing&&<button onClick={()=>{
                    setUsers((currentState)=>{
                        return currentState.map((currentUser)=>
                            //We can do the checking in two ways
                            //This is the first way with if/else check
                            // {if (currentUser.id === user.id) {
                            //     return {...currentUser,name:username,email:email}
                            // }else return currentUser;}

                            //This the second way with ternary check(shortcut for the above code)
                            //!Don't fool yourself
                            //?Don't fool yourself
                            // Don't fool yourself
                            //*Don't fool yourself
                            /////Don't fool yourself
                            currentUser.id === user.id
                                ?{...currentUser,name:username,email:email}
                                :currentUser
                        )
                    })
                    setIsEditing(false);
                    // console.log(user)
                }}>Save</button>}
                <button onClick={()=>{
                    //This is for the delete button
                    setUsers((currentState)=>{
                        return currentState.filter((currentUser)=>currentUser.id !== user.id)
                    })
                }}>Delete</button>
            </div>
        </div>
)}

Users.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
setUsers: PropTypes.func.isRequired,
}