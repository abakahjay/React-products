import useProfileStore from '../store/userProfileStore'
import useAuthStore from "../store/useAuthStore";
import API from "../utils/api";
import useShowToast from "./useShowToast"; // Custom toast hook (if you have one)




export const  useGetUser= (username)=> {
    
    const showToast = useShowToast(); // Show toast notifications
    const setError = useProfileStore((state) => state.setError); // Zustand action to handle errors
    const setLoading = useProfileStore((state) => state.setLoading); // Zustand action to manage loading state
    const isLoading = useProfileStore((state) => state.isLoading); // Zustand loading state
    const error = useProfileStore((state) => state.error); // Zustand error state
    const setUserProfile = useProfileStore((state) => state.setUserProfile); // Zustand error state
    const {userProfile} = useProfileStore();
    
    // useEffect(()=>{

        const fetchUser = async (username) => {
            if (!username) {
                return showToast("Error", "Please enter a username", "error");
            }
            setLoading(true); // Set loading state to true
            try {
                // Send login request to the backend
                const response =await API.patch(`/api/v1/users/${username}`)
    
                // Save user info to Zustand and local storage
                const user = response.data
                console.log(user)
                setUserProfile(user)
                setError(null)
                showToast("Success", `User: ${username} Found successful`, "success");
            } catch (err) {
                const message = err.response?.data?.error || "User not found";
                setError(message); // Update Zustand error state
                showToast("Error", message, "error");
            } finally {
                setLoading(false); // Reset loading state
            }
        };
    // },[username])

    return { fetchUser, isLoading, error,userProfile };

}
