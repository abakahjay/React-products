import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';

const useAuth = () => {
    const { user, loginUser, registerUser, logoutUser } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return {
        user,
        isLoading,
        error,
        loginUser: async (email, password) => {
            setIsLoading(true);
            try {
                await loginUser(email, password);
                setIsLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Login failed');
                setIsLoading(false);
            }
        },
        registerUser: async (email, password,firstName,lastName,username) => {
            setIsLoading(true);
            try {
                await registerUser(email, password,firstName,lastName,username);
                setIsLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Signup failed');
                setIsLoading(false);
            }
        },
        logoutUser: async(userId) => {
            setIsLoading(true)
            try {
                await logoutUser(userId);
                setIsLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Logout failed');
                setIsLoading(false);
            }
        }
    };
};

export default useAuth;
