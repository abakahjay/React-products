import { useState } from 'react';
import API from '../utils/api';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const registerUser = async (email, password,firstName,lastName,username) => {
        try {
            const response = await API.post('/api/v1/auth/signup', {email, password,firstName,lastName,username});
            setUser(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed');
        }
    };

    const loginUser = async (email, password) => {
        try {
            const response = await API.post('/api/v1/auth/login', {email, password});
            setUser(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };

    const logoutUser = async(userId) => {
        await API.post(`/api/v1/auth/logout?userId=${userId}`)
        setUser(null);
        localStorage.removeItem('token');
    };

    return { user, error, registerUser, loginUser, logoutUser };
};

export default useAuth;
