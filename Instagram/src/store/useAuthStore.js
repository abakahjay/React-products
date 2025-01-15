import {create} from 'zustand';
// import axios from 'axios';
import API from '../utils/api';

const useAuthStore = create((set) => ({
    user: null,
    isLoading: false,
    error: null,
    loginUser: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await API.post('/api/v1/auth/login',{email, password});
            set({ user: response.data, error: null });
        } catch (err) {
            set({ error: err.response?.data?.error || 'Login failed' });
        } finally {
            set({ isLoading: false });
        }
    },
    logoutUser: async(userId) => {
        set({ isLoading: true });
        try{
            await API.post(`/api/v1/auth/logout?userId=${userId}`)
            set({ user: null }),
            localStorage.removeItem('token');
        }catch(err){
            set({ error: err.response?.data?.error || 'Logout Failed' });
        }finally {
            set({ isLoading: false });
        }
    },
    registerUser: async (email, password,firstName,lastName,username) => {
        set({ isLoading: true });
        try {
            const response = await API.post('/api/v1/auth/signup', {email, password,firstName,lastName,username});
            set({ user: response.data, error: null });
        } catch (err) {
            set({ error: err.response?.data?.error || 'Signup failed' });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useAuthStore;
