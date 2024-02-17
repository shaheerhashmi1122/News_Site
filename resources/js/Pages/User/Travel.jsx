import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import "../../../css/User/user.css";
;

;
import Clgirls from "../../../js/Images/clg-girls.jpg";
import ReadSection from "../../../js/Images/news-read-sec.jpg";
import PageHead from "@/Components/UserComponents/PageHead";
import Category from "@/Components/UserComponents/Category";
import Footer from "@/Components/UserComponents/Footer";
import { usePage } from "@inertiajs/react";

export default function Travel() {
    const{ travel }= usePage().props;
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    // const [closeNav, setCloseNav] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };
    const breadcrumbs = [
        { label: "Home", url: route("user.dashboard") },
        { label: "Travel" },
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

                            {travel.map((travel)=>(
                        <div className="read-section w-100 py-4 px-2">
                            <img
                                className="w-50"
                                src={`/news/${travel?.image}`}
                                alt=""
                            />

                            <h2>{travel?.heading}</h2>
                            <p>
                            {travel?.description}
                            </p>
                            <a className="btn btn-primary" href={route("user.read", travel.id)}>Read More</a>
                        </div>
                    ))}
                        </div>

                        {/* ======================================section 2================================== */}

                        <div className="col-md-4 col-sm-10 about-section order-md-2 order-1 ">
                           
                            <Category />
                            <div className="help-section py-4">
                                <div className="card  bg-primary text-light text-center">
                                    <div className="card-body">
                                        <h3 className="card-title display-5 ">
                                            How can we help you!
                                        </h3>

                                        <p className="card-text py-3">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </p>
                                        <button
                                            href="#"
                                            className="card-link"
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-footer" >

            <Footer  />
            </div>
        </div>  
    );
}
