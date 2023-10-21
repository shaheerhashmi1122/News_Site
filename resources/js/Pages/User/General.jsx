import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
// import { NavLink } from "react-router-dom";

import React, { useState } from "react";

export default function General() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <UserNav />
            <div className="toggle-btn">
                <div
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowNav(!showNav)}
                >
                    btn
                </div>
            </div>
        

            <UserSidebar show={showNav} />


{/*  */}


           
        </>
    );
}
