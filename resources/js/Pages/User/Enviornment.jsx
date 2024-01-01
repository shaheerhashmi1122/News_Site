import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import "../../../css/User/user.css";

import Clgirls from "../../../js/Images/clg-girls.jpg";
import ReadSection from "../../../js/Images/news-read-sec.jpg";
import PageHead from "@/Components/UserComponents/PageHead";
import Category from "@/Components/UserComponents/Category";
import Footer from "@/Components/UserComponents/Footer";

export default function Enviornment() {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    // const [closeNav, setCloseNav] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };
    const breadcrumbs = [
        { label: "Home", url: route("user.dashboard") },
        { label: "Enviornment" },
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

                            <div className="read-section w-100 py-4 px-2">
                                <img
                                    className="w-50"
                                    src={ReadSection}
                                    alt=""
                                />

                                <h2>News Updates are the Best site</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Dignissimos mollitia modi
                                    maxime! Officiis odio pariatur architecto
                                    dolorum iste vero quo modi illo amet? Quam
                                    pariatur quo quas eos, modi suscipit.
                                </p>
                            </div>

                            <div className="artical-section">
                                <h1>Title</h1>

                                <div className="under-line "></div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Saepe, deserunt nisi
                                    libero dicta rem, error incidunt eaque
                                    delectus repellat quasi corrupti pariatur
                                    cumque facere. Fugiat optio, unde, eius et
                                    voluptatum doloremque ipsam culpa quae
                                    repellat ullam quas eum voluptates enim
                                    molestiae sed numquam ducimus expedita
                                    dignissimos eveniet exercitationem, dolores
                                    itaque.
                                </p>
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
                                                Manuella Nevoresky
                                            </h5>
                                            <p className=" text-light">
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Dolores eligendi eaque neque
                                                maxime quia corporis aperiam
                                                quos odio alias voluptas,
                                                cupiditate commodi, sapiente
                                                distinctio vitae voluptate illo
                                                at. Exercitationem, rerum!
                                            </p>
                                            <span className="small text-uppercase text-light">
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
                                            className=" card-link  "
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
