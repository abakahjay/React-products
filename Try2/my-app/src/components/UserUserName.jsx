import PropTypes from "prop-types";
import { Fragment } from "react";
import './Styles/UserUserName.css'
//We are learning Props
//Props are just arguments passed to a function
export function UserUserName(props){
    // console.log(props);
    return (
        <Fragment>
            <div className="names">
                <b>Username: </b>
                <span>{props.username}</span>
            </div>
        </Fragment>
    )
}
//This is used for props validation
UserUserName.propTypes = {
    username: PropTypes.string.isRequired,
}