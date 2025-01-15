import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';

const useAuth = () => {
    const { user, login, signup, logout } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return {
        user,
        isLoading,
        error,
        login: async (credentials) => {
            setIsLoading(true);
            try {
                await login(credentials);
                setIsLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Login failed');
                setIsLoading(false);
            }
        },
        signup: async (userData) => {
            setIsLoading(true);
            try {
                await signup(userData);
                setIsLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Signup failed');
                setIsLoading(false);
            }
        },
        logout: () => {
            logout();
        }
    };
};

export default useAuth;
