import ChatApp from "./components/ChatAppDemo";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import { Button } from "@chakra-ui/react"
import {Homepage} from './pages/Homepage/Homepage'
import { Authpage } from "./pages/Authpage/Authpage.jsx";
import PageLayout from "./Layouts/PageLayouts/PageLayout.jsx";
import { useEffect, useState } from "react";
import { logoutUser } from "./utils/auth";
import API from "./utils/api";
import {ProfilePage} from './pages/ProfilePage/ProfilePage';

export default function App(){
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const { data } = await API.get("/api/v1/auth/dashboard");
                console.log(data)
                setAuthUser(data.user);
            } catch(error) {
                console.log(error)
                setAuthUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchAuthUser();
    }, []);

    const handleLogout = async () => {
        await logoutUser();
        setAuthUser(null);
    };

    if (loading) return <div>Loading...</div>;

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <PageLayout authUser={authUser} onLogout={handleLogout}>
                    {authUser ? <Homepage  authUser={authUser}/> : <Navigate to="/auth" />}
                    {/* <Homepage authUser={authUser}/> */}
                </PageLayout>
            ),
        },
        {
            path: '/auth',
            element: (
                <>
                    {!authUser ? <Authpage onAuth={setAuthUser} /> : <Navigate to="/" />}
                    
                </>
            ),
        },
        {
            path: '/:username',
            element: (
                <PageLayout authUser={authUser}>
                    {authUser ? <ProfilePage /> : <Navigate to="/auth" />}
                    {/* <ProfilePage authUser={authUser} /> */}
                </PageLayout>
            ),
        },
    ]);



    

    return <>
            {/* THis is for Creating Routes and Pages */}
            <RouterProvider router={router} />
            {/* <ChatApp/> */}
            {/* <Button>
                Hello World
            </Button> */}
        </>
}