import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import "../../../css/User/user.css";

import Clgirls from "../../../js/Images/clg-girls.jpg";
import PageHead from "@/Components/UserComponents/PageHead";
import Category from "@/Components/UserComponents/Category";
import Footer from "@/Components/UserComponents/Footer";
import { usePage } from "@inertiajs/react";

export default function ReadMore() {
    const { readmore } = usePage().props;
    // console.log(readmore)
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    // const [closeNav, setCloseNav] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };
    const breadcrumbs = [
        { label: "Home", url: route("user.dashboard") },
        { label: "Read More" },
    ];

    return (
        <>
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
                    {readmore.map((readmore) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-10 order-md-1 order-2 read-part ">
                                    <div className="news-image">
                                        <img
                                            src={`/news/${readmore?.image}`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                {/* ======================================section 2================================== */}
                                <div className="col-md-4 col-sm-10 about-section order-md-2 order-1 ">
                                    <div className="about-profile ">
                                        <div className=" text-center">
                                            <div className="">
                                                <div className=" rounded shadow-sm p-3 about-card mb-4 ">
                                                    <img
                                                        src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                                                        alt=""
                                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm  mx-auto"
                                                    />
                                                    <h5 className="mb-4 text-light">
                                                        {readmore?.name}
                                                    </h5>
                                                    <h2 className=" text-light">
                                                        Contact Us:
                                                    </h2>
                                                    <span className="small text-light">
                                                        {readmore?.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news-details">
                                <div className="container">
                                    <div className="row">
                                        <div className="read-section  py-4 px-2">
                                            <h1
                                                className="text-center "
                                                style={{
                                                    fontSize: "43px",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                {readmore?.heading}
                                            </h1>

                                            <p className="px-4">
                                                {readmore?.text}
                                            </p>
                                        </div>
                                        <div>
                                            <h2>
                                                No. of views:
                                                {readmore?.total_views}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}
