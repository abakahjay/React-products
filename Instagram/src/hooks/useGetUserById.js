import API from "../utils/api";
import useShowToast from "./useShowToast"; // Custom toast hook (if you have one)
import { useEffect,useState } from 'react';

export const  useGetUserById= (userId)=> {
    const showToast = useShowToast(); // Show toast notifications
    const [isLoading, setLoading] = useState(true);
	const [userProfile, setUserProfile] = useState(null);
    useEffect(()=>{
        const controller = new AbortController();
        const fetchUser = async () => {
            setLoading(true); // Set loading state to true
            setUserProfile(null)
            try {
                const response =await API.get(`/api/v1/users/${userId}`,{signal: controller.signal})
                const users = response.data
                setUserProfile(users.user)
            } catch (err) {
                const message = err.response?.data?.error ||err.message ||"User not found";
                if(err.message==='canceled'){
                    return
                }
                showToast("Error", message, "error");
            } finally {
                setLoading(false); // Reset loading state
            }
        };
        fetchUser()

        return ()=>{//This is a cleanup function
            controller.abort();
        }
    },[ userId,showToast, setUserProfile, ])

    return {isLoading,userProfile,setUserProfile };

}
