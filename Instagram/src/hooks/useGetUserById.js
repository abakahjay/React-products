import useProfileStore from '../store/userProfileStore'
import useAuthStore from "../store/useAuthStore";
import API from "../utils/api";
import useShowToast from "./useShowToast"; // Custom toast hook (if you have one)
import { useEffect } from 'react';




export const  useGetUserById= (userId)=> {
    
    const showToast = useShowToast(); // Show toast notifications
    const {user}= useAuthStore();
    const {userProfile,setError,setLoading,isLoading,error,setUserProfile} = useProfileStore();

    
    useEffect(()=>{
        const controller = new AbortController();
        const fetchUser = async () => {
            if (!username) {
                return showToast("Error", "Please enter a username", "error");
            }
            setLoading(true); // Set loading state to true
            try {
                // Send login request to the backend
                const response =await API.get(`/api/v1/users/${userId}`,{
                    signal: controller.signal,
                })
                // Save user info to Zustand and local storage
                const users = response.data
                // console.log(user)
                setUserProfile(users)
                setError(null)
                const a =user.username===username
                console.log(a)
                console.log('Searched',userId)
                console.log('Actual',user.username)
                // console.log(user)
                if(a){
                    return
                }
                setTimeout(()=>{
                    showToast("Success", `User: ${userId} Found successful`, "success");
                },3500)
            } catch (err) {
                const message = err.response?.data?.error ||err.message ||"User not found";
                setError(message); // Update Zustand error state
                setTimeout(()=>{
                    showToast("Error", message, "error");
                },3500)
                
            } finally {
                setLoading(false); // Reset loading state
            }
        };
        fetchUser()

        return ()=>{//This is a cleanup function
            controller.abort();
        }
    },[ username, showToast])

    return {isLoading, error,userProfile };

}
