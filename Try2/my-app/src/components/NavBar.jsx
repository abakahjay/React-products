import {Link,} from "react-router-dom";//We use this Link instead to prevent the page from refreshing

export function NavBar(){
    return (
        <>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
        </>
    )
}