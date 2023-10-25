import { Link, Head } from '@inertiajs/react';
import Content from "@/Components/UserComponents/Content";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import Footer from "@/Components/UserComponents/Footer";
// import MobBar from "@/Components/UserComponents/MobBar";
import React, { useState } from "react";
import Slider from "@/Components/UserComponents/Slider";

export default function Welcome({ auth}) {
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
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link> 
                            
                            {/* <Link
                                href={route('userdash')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                User Dashboard
                            </Link> */}
                        </>
                    )}
                </div>
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


</div>

{/* foooter */}

            {/* </div> */}
        </div>
       
    
<Footer/>
                      </>
    );
}
