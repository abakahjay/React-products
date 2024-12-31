import PropTypes from "prop-types";
import { PostContentButtons } from "./postContentButtons";
import { useContext } from "react";
import { UserContext } from "../utils/contexts/userContext";

export function PostContent({data,setData}){
    const aData = useContext(UserContext);

    return <div>
        <h2>Post Content</h2>
        <div>{aData.username}</div>
        <PostContentButtons data={data} setData={setData}/>
    </div>
}
PostContent.propTypes = {
    data: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired
}
