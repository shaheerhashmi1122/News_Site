import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import "../../../css/User/user.css";
import Clgirls from "../../../js/Images/clg-girls.jpg";
import ReadSection from "../../../js/Images/news-read-sec.jpg";
import PageHead from "@/Components/UserComponents/PageHead";
import Category from "@/Components/UserComponents/Category";
import Footer from "@/Components/UserComponents/Footer";
import { usePage } from "@inertiajs/react";

export default function Technology() {
    const { technology } = usePage().props;
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    // const [closeNav, setCloseNav] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };
    const breadcrumbs = [
        { label: "Home", url: route("user.dashboard") },
        { label: "Technology" },
    ];

    return (
        <div className="user-panel text-light">
            <div className="page-nav">
                <UserNav />
            </div>
            <div className="toggle-btn m-0">
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
            <PageHead breadcrumbs={breadcrumbs} />

            <div className="news-content py-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-10 order-md-1 order-2 read-part ">
                            <div className="news-image">
                                <img src={Clgirls} alt="" />
                            </div>
                            {technology.map((tech) => (
                                <div className="read-section w-100 py-4 px-2">
                                    <img
                                        className="w-50"
                                        src={`/news/${tech?.image}`}
                                        alt=""
                                    />

                                    <h2>{tech?.heading}</h2>
                                    <p>{tech?.description}</p>
                                    <a
                                        className="btn btn-primary"
                                        href={route("user.read", tech.id)}
                                    >
                                        Read More
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* ======================================section 2================================== */}

                        <div className="col-md-4 col-sm-10 about-section order-md-2 order-1 ">
                            <Category />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-footer">
                <Footer />
            </div>
        </div>
    );
}
