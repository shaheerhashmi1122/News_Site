import { Link, Head } from "@inertiajs/react";
import Content from "@/Components/UserComponents/Content";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import Footer from "@/Components/UserComponents/Footer";
import "../../css/User/user.css";
import React, { useState } from "react";
import Slider from "@/Components/UserComponents/Slider";

export default function Welcome({ auth }) {
    const styleHead = {
        fontSize: "45px",
        textAlign: "center",
color:"#fff",
        margin: "12px",
    };

    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };

    return (
        <div className="welcome-bg text-light">
            <Head title="Welcome" />
            <div className="  container">
                <div className="d-flex justify-content-end">
                    {auth.user ? (
                        <Link href={route("dashboard")} className="">
                           <button className="button-62" role="button">
                                    Dashboard
                                </button>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className=" mx-4 mt-3 text-center "
                            >
                                <button className="button-62" role="button">
                                    Login
                                </button>
                            </Link>

                            <Link href={route("register")} className=" mt-3">
                                <button className="button-62" role="button">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div className="container">
                    <div className="toggle-btn">
                        <div
                            className="btn btn-primary "
                            onClick={() =>
                                setShowMobileSidebar(!showMobileSidebar)
                            }
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

                    <Slider />
                </div>

                {/* foooter */}

                {/* </div> */}
            </div>

            <Footer />
        </div>
    );
}
