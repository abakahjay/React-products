import {create} from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    user: null,
    isLoading: false,
    error: null,
    login: async (credentials) => {
        set({ isLoading: true });
        try {
            const response = await axios.post('http://localhost:7004/api/v1/auth/login', credentials);
            set({ user: response.data, error: null });
        } catch (err) {
            set({ error: err.response?.data?.error || 'Login failed' });
        } finally {
            set({ isLoading: false });
        }
    },
    logout: () => set({ user: null }),
    signup: async (userData) => {
        set({ isLoading: true });
        try {
            const response = await axios.post('http://localhost:7004/api/v1/auth/signup', userData);
            set({ user: response.data, error: null });
        } catch (err) {
            set({ error: err.response?.data?.error || 'Signup failed' });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useAuthStore;
