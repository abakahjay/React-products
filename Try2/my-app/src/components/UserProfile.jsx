import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods"
import { UserUserName } from "./UserUserName"

export function UserProfile(props){
    console.log(props);
    //All the child components of UserProfile can access the values of the props object
    return (<>
        {/* <p>Username: Abakah Joshua Blessed</p> */}
        <UserUserName username={props.username}/>
        <br/>
        <b>Age: </b><span>{props.age}</span>
        <div>
            <span>Email: </span>
            <span>abakahjoshua1@gmail.com</span>
        </div>
        <UserFavoriteFoods favoriteFoods={props.favoriteFoods}/>
        <div>{String(props.isLoggedIn)}</div>
    </>)
}
//This is used for props validation
UserProfile.propTypes={
    age: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    callMe: PropTypes.func.isRequired,
    favoriteFoods: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
    }))
}