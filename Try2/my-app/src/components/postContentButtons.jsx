import PropTypes from "prop-types"
import { useContext } from "react"
import { UserContext } from "../utils/contexts/userContext"

export function PostContentButtons({data,setData}){
    const aData= useContext(UserContext);
    return (
            <div>
                <h2>Post Content Buttons</h2>
                <div>{data}</div>
                <div>_id: {aData._id}</div>
                <div>email: {aData.email}</div>
                <div>username: {aData.username}</div>
                <div>firstName: {aData.firstName}</div>
                <div>lastName: {aData.lastName}</div>
                <button className="btn" onClick={()=>{
                    aData.setData((currentState)=>({...currentState,lastName:'Updated lastName with Context'}))
                    setData('Hi there Joshua')
                }}>Click me</button>
            </div>
)}


PostContentButtons.propTypes = {
    data: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired
}
