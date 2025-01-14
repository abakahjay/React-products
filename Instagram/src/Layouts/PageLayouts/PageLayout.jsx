import React from "react";
import Navbar from "../../components/NavBar/Navbar.jsx";
import Footer from "../../components/trys/Footer.jsx";
import { Flex,Box } from "@chakra-ui/react";
import {SideBar} from '../../components/SideBar/SideBar.jsx'
import { useLocation } from "react-router-dom";

const PageLayout = ({ authUser, onLogout, children }) => {

    const { pathname } = useLocation();
    const user=authUser?authUser.user||authUser:null
    // console.log(authUser)
	
	const canRenderSidebar = pathname !== "/auth"&&user;
    const canRenderNavbar =pathname !== "/auth"&&!user;
    return (
            <Flex flexDir={canRenderNavbar ? "column" : "row"}>
                {/* side bar on the left */}
                {canRenderSidebar?(
                <Box w={{base:'70px',md:'240px'}}>
                    <SideBar authUser={authUser} onLogout={onLogout}/>
                </Box>):null
                }
                {/* Navbar on the top */}
                {canRenderNavbar ? <Navbar authUser={authUser} onLogout={onLogout}  /> : null}

                {/* content on the right */}
                <Box flex={1} w={{base:'calc(100%-70px)',md:'calc(100%-240px)'}}>
                    {children}
                </Box>
            </Flex>
    );
};

export default PageLayout;
