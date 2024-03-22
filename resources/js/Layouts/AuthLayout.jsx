import React, { useState } from "react";
import Style from "../../css/Admin/admin.css";

import NavBar from "../Components/AuthorComponents/NavBar";
import AuthorSideBar from "@/Components/AuthorComponents/AuthorSidebar";
import Footer from "@/Components/AdminComponents/Footer";

export default function AuthorLayout({ auth, children }) {
    return (
        <>
            <div className={`${Style["g-sidenav-show"]} bgGray100`}>
                {/* <Head title="Add News" /> */}
                <AuthorSideBar />
                <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
                    <NavBar user={auth?.user} />
                    <div className="container-fluid py-4">
                        {children}
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    );
}
    