import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import NavLink from "../AdminComponents/NavLink";
import Dropdown from "../../Components/AdminComponents/Dropdown";
import "../../../css/User/user.css";

export default function UserSidebar({ show, onClose }, user) {
    const [closeMenu, setCloseMenu] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        // Set initial active link when component mounts
        setActiveLink(window.location.pathname);
    }, []);

    const handleClick = (route) => {
        console.log("Link clicked:", route);
        setActiveLink(route);
    };

    const links = [
        { name: "Home", route: "/user/dashboard", icon: "bx bx-grid-alt" },
        { name: "General", route: "/user/general", icon: "bx bx-globe" },
        { name: "Sports", route: "/user/sports", icon: "bx bx-football" },
        {
            name: "Techonology",
            route: "/user/technology",
            icon: "bx bx-laptop",
        },
    ];

    return (
        <>
            {/* <aside
                className="sidenav navbar navbar-vertical  navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
                id="sidenav-main"
            >
                <div className="sidenav-header">
                    <div className="navbar-brand m-0">
                        <span className="ms-1 font-weight-bold">
                            Globe-Link
                        </span>
                    </div>
                </div>
                <hr className="horizontal dark mt-0" />
                <div
                    className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100"
                    id="sidenav-collapse-main"
                >
                    <ul className="navbar-nav">
                        {routes.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    isActive={link.route === activeLink}
                                    href={link.route}
                                    onClick={() => handleClick(link.route)}
                                >
                                    <span>
                                        <i
                                            className={`icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center fa ${link.icon}`}
                                          
                                        ></i>
                                    </span>
                                        <span className="nav-link-text ms-1">
                                            {link.name}
                                        </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside> */}

            <div className="User-sidebar desktop shadow-md">
                <div className="logo-details">
                    <i className="bx bx-menu"></i>
                    <div className="head">GlobLink</div>
                </div>
                <div className="list-items">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.route}
                            className={`li-names ${
                                activeLink === link.route ? "active" : ""
                            }`}
                            onClick={() => handleClick(link.route)}
                        >
                            <i className={link.icon}></i>
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="list-items position-fixed bottom-0 overflow-hidden">
                    <Link className="li-names  " href={route("profile.edit")}>
                        <i className="bx bx-user "></i>
                        <span>Profile</span>
                    </Link>
                    <Link className="li-names " href={route("logout")}>
                        <i className="bx bx-exit "></i>
                        <span>SignOut</span>
                    </Link>
                </div>
            </div>

            {/* ================mobile view toogle sidebar======================================= */}

            <div
                className={show ? "mob-sidebar " : "mob-sidebar mobile active"}
            >
                <div className="close-menu " onClick={onClose}>
                    <i className="bx bx-x "></i>
                </div>

                <div className="logo-details">
                    <i
                        className="bx bx-menu"
                        style={{ paddingTop: "20px" }}
                    ></i>
                    <div className="head">GlobLink</div>
                </div>
                <div className="list-items">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.route}
                            className={`li-names ${
                                activeLink === link.route ? "active-link" : ""
                            }`}
                            onClick={() => handleClick(link.route)}
                        >
                            <i className={link.icon}></i>
                            <span className="sp-name">{link.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="list-items position-fixed bottom-0 overflow-hidden">
                    <Link className="li-names  " href={route("profile.edit")}>
                        <i className="bx bx-user "></i>
                        <span>Profile</span>
                    </Link>
                    <Link className="li-names " href={route("logout")}>
                        <i className="bx bx-exit "></i>
                        <span>SignOut</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
