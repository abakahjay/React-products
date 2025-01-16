import ChatApp from "./components/ChatApp/ChatAppDemo.jsx";
import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from 'react-router-dom';
import {Homepage} from './pages/Homepage/Homepage'
import { Authpage } from "./pages/Authpage/Authpage.jsx";
import PageLayout from "./Layouts/PageLayouts/PageLayout.jsx";
import { useEffect, useState } from "react";
import useAuthStore from "./store/useAuthStore.js";
import API from "./utils/api";
import {ProfilePage} from './pages/ProfilePage/ProfilePage';

// const navigate = useNavigate()
export default function App(){
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const token= localStorage.getItem('token');
    const {user}= useAuthStore();
    console.log(user)

    if (user){
        // localStorage.setItem(`token`, user.token);
        // navigate(`/?userId=${user.userId}&token=${user.token}`);
    }
    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const { data } = await API.get("/api/v1/auth/dashboard",{
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                // console.log(data)
                setAuthUser(data.user);
            } catch(error) {
                console.warn(error)
                setAuthUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchAuthUser();
    }, []);

    const handleLogout = async (userId) => {
        console.log(userId)
        await logoutUser(userId)
        .catch((error)=>{
            console.log(error)
        });
        localStorage.removeItem('token')
        setAuthUser(null);
    };

    if (loading) return <div>Loading...</div>;








    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <PageLayout authUser={authUser} onLogout={handleLogout}>
                    {authUser ? <Homepage  authUser={authUser} onLogout={handleLogout}/> : <Navigate to="/auth" />}
                </PageLayout>
            ),
        },
        {
            path: '/auth',
            element: (
                <>
                    <PageLayout>
                        {!authUser ? <Authpage onAuth={setAuthUser} /> : <Navigate to="/" />}
                    </PageLayout>
                    
                </>
            ),
        },
        {
            path: '/:username',
            element: (
                <PageLayout authUser={authUser} onLogout={handleLogout}>
                    {authUser ? <ProfilePage authUser={authUser} onLogout={handleLogout} /> : <Navigate to="/auth" onLogout={handleLogout}/>}
                    {/* <ProfilePage authUser={authUser} /> */}
                </PageLayout>
            ),
        },
    ]);



    

    return <>
            {/* This is for Creating Routes and Pages */}
            <RouterProvider router={router} />
            {/* <ChatApp userId={'67886226f65d5209b0836659'} recipientId={'67886bde4f9166876c734a8c'}/> */}
        </>
}