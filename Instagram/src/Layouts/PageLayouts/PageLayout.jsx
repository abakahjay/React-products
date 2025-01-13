import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PageLayout = ({ authUser, onLogout, children }) => {
    return (
        <>
            <Navbar authUser={authUser} onLogout={onLogout} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
