import React from "react";
import NavBar from "../Components/AdminComponents/NavBar";
import SideBar from "@/Components/AdminComponents/SideBar";
import Footer from "@/Components/AdminComponents/Footer";


const AuthenticatedLayout = ({ auth, children }) => {
    return (
        <div className="g-sidenav-show bg-gray-100">
            <SideBar />
            <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
                <NavBar user={auth?.user} />
                <div className="container-fluid py-4">
                  
                        {children}
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default AuthenticatedLayout;
