import { useState } from "react";
import { Users } from "./users";
export function UsersStates(){
    const [username,setUsername]= useState('');
    const [email,setEmail]= useState('');
    const [counter,setCounter]= useState(6);
    const [users,setUsers] = useState([
        { id: '1', name: 'John', email: 'james@example.com' },
        { id: '2', name: 'peter', email: 'peter@example.com' },
        { id: '3', name: 'joshua', email: 'joshua@example.com' },
        { id: '4', name: 'blessed', email: 'blessedr@example.com' },
        { id: '5', name: 'abakah', email: 'abakah@example.com' }
    ]);
    return( <div>
        <h1>Users State Levels</h1>
        {users.map((user) => {//We always need to add keys that are unique when generating xml data
            return  <Users key={user.id} user={user} setUsers={setUsers}/>
        })}
        <form className="form" onSubmit={(e)=>{
            e.preventDefault();
            const newUser = {
                id: String(counter),
                email:email,
                username:username,
            };
            setCounter((currentState)=>currentState+1);
            setUsers((currentState)=>[...currentState,newUser]);
            console.log(newUser)
        }}>
            <div>
                <label className="form-label" htmlFor="username">Username</label>
                <input name="username" className="form-input" id="username" required type="name" value={username}  onChange={(e)=>{
                    setUsername(e.target.value);
                }}/>
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input name="email" className="form-input" id="email" required type="email" value={email}  onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>
            <button type="submit" className="btn">Add User</button>
        </form>
    </div>);
}