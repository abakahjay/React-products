import PropTypes from "prop-types"

export function UsernameDis({ username}){
    return <div>
                {username}
            </div>
}

UsernameDis.propTypes = { username: PropTypes.string.isRequired}