// import Carousal from "@/Components/UserComponents/Slider";
import Content from "@/Components/UserComponents/Content";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
// import MobBar from "@/Components/UserComponents/MobBar";
import React, { useState } from "react";
import Slider from "@/Components/UserComponents/Slider";

export default function UserDash() {
    const styleHead = {
        fontSize: "45px",
        textAlign: "center",

        margin: "12px",
    };

    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    // const [closeNav, setCloseNav] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };

    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">UserDashboard</h2>}
        // >
        //     <Head title="UserDash" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
          
        <div className="container">
                <header>
                <UserNav />

                </header>

                <div className="toggle-btn">
                    <div
                        className="btn btn-primary "
                        onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                    >
                        {" "}
                        <i
                            className="bx bx-menu"
                            style={{ fontSize: "24px" }}
                        ></i>{" "}
                    </div>
                </div>

                <UserSidebar
                    show={showMobileSidebar}
                    onClose={toggleMobileSidebar}
                />

                <h1 style={styleHead}>GlobeLink</h1>
                <Content />

               <Slider/>
            {/* </div> */}
        </div>
    );
}
