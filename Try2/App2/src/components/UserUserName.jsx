import PropTypes from "prop-types";
//We are learning Props
//Props are just arguments passed to a function
export function UserUserName(props){
    // console.log(props);
    return <div>
        <b>Username: </b>
        <span>{props.username}</span>
    </div>
}
//This is used for props validation
UserUserName.propTypes = {
    username: PropTypes.string.isRequired,
}