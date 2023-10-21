import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import "../../../css/User/General.css";
import "../../../css/User/UserNav.css";
import Clgirls from "../../../js/Images/clg-girls.jpg";
import ReadSection from "../../../js/Images/news-read-sec.jpg";
import PageHead from "@/Components/UserComponents/PageHead";
import Category from "@/Components/UserComponents/Category";

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
            <PageHead />

            <div className="news-content py-3 mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md ">
                            <div className="news-image">
                                <img src={Clgirls} alt="" />
                            </div>

                            <div className="read-section w-100 py-4">
                                <img className="w-50" src={ReadSection} alt="" />

                                <h2>News Updates are the Best site</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos mollitia modi maxime! Officiis odio pariatur architecto dolorum iste vero quo modi illo amet? Quam pariatur quo quas eos, modi suscipit.</p>
                            </div>
                        </div>

                        {/* ======================================section 2================================== */}

                        <div className="col-12 col-sm-4  about-section">
                            <div className="container">
                                <div className=" text-center">
                                    <div className="col-xl-3 col-sm-6 mb-5">
                                        <div className="bg-white rounded shadow-sm py-5 px-4 ">
                                            <img
                                                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                                                alt=""
                                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm w-50 mx-auto"
                                            />
                                            <h5 className="mb-4">
                                                Manuella Nevoresky
                                            </h5>
                                            <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eligendi eaque neque maxime quia corporis aperiam quos odio alias voluptas, cupiditate commodi, sapiente distinctio vitae voluptate illo at. Exercitationem, rerum!</p>
                                            <span className="small text-uppercase text-muted">
                                                CEO - Founder
                                            </span>
                                            <ul className="social mb-0 list-inline mt-3">
                                                <li className="list-inline-item">
                                                    <a
                                                        href="#"
                                                        className="social-link"
                                                    >
                                                        <i className="fa fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        href="#"
                                                        className="social-link"
                                                    >
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        href="#"
                                                        className="social-link"
                                                    >
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        href="#"
                                                        className="social-link"
                                                    >
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Category />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
