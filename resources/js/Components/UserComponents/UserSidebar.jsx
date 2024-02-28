import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

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
        {
            name: "Travel",
            route: "/user/travel",
            icon: "bx bx-world",
        },
        {
            name: "Enviornment",
            route: "/user/enviornment",
            icon: "bx bx-street-view",
        },
        {
            name: "Business",
            route: "/user/business",
            icon: "bx bx-buildings",
        },
    ];

    return (
        <>
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
                            <i className={link.icon}></i>{" "}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="list-items position-fixed bottom-0 overflow-hidden">
                    <Link className="li-names  " href={route("user.edit")}>
                        <i className="bx bx-user "></i>
                        <span>Profile</span>
                    </Link>
                    <Link
                        className="li-names "
                        href={route("logout")}
                        method="post"
                    >
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
                    <Link className="li-names  " href={route("user.edit")}>
                        <i className="bx bx-user "></i>
                        <span>Profile</span>
                    </Link>
                    <Link
                        className="li-names "
                        href={route("logout")}
                        method="post"
                    >
                        <i className="bx bx-exit "></i>
                        <span>SignOut</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
