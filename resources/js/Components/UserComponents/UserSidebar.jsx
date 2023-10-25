import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "../../Components/AdminComponents/Dropdown";

export default function UserSidebar({ show, onClose }, user) {
    const [closeMenu, setCloseMenu] = useState(false);

    const [activeLink, setActiveLink] = useState("");

    const handleClick = (route) => {
        console.log("Link clicked:", route);
        setActiveLink(route);
    };

    const links = [
        { name: "Home", route: "/user/dashboard", icon: "bx bx-grid-alt" },
        { name: "General", route: "/user/general", icon: "bx bx-user" },
        { name: "Sports", route: "/user/sports", icon: "bx bx-football" },
        {
            name: "Techonology",
            route: "/user/technology",
            icon: "bx bx-laptop",
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
                                activeLink === link.route ? "active-link" : ""
                            }`}
                            onClick={() => handleClick(link.route)}
                        >
                            <i className={link.icon}></i>
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ================mobile view toogle sidebar======================================= */}

            <div
                className={show ? "mob-sidebar " : "mob-sidebar mobile active"}
            >
                <button className="close-menu" onClick={onClose}>
                    <i className="bx bx-x "></i>
                </button>

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

                    <Dropdown>
                        <div className="drop-down2">
                            <Dropdown.Trigger>
                               <i className="bx bx-cog"></i>
                                <span style={{color:"#fff", fontSize:"14px"}}>
                                  Setting {user.name}
                                    {/* <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        User {user.name}
                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button> */}
                                </span>
                            </Dropdown.Trigger>
                        </div>
                        
                        {/* <div className="drop-content"> */}
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        {/* </div> */}
                    </Dropdown>
                </div>
            </div>
        </>
    );
}
