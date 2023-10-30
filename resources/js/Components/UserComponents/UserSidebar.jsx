import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { useLanguage } from '../../../js/Components/UserComponents/LanguageContext';

import Dropdown from "../../Components/AdminComponents/Dropdown";
const LanguageChanger = () => {
    const { currentLanguage, changeLanguage } = useLanguage();
  
    const handleLanguageChange = (newLanguage) => {
      changeLanguage(newLanguage);
    };
  
    return (
      <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>French</button>
      </div>
    )
  }

  export default function UserSidebar({ show, onClose }, user) {
    const { currentLanguage } = useLanguage();

    // Define language-specific content for menu items
    const content = {
        en: {
            Home: "Home",
            General: "General",
            Sports: "Sports",
            Technology: "Technology",
        },
        fr: {
            Home: "Accueil",
            General: "Général",
            Sports: "Sports",
            Technology: "Technologie",
        },
    };

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
                            <span>{content[currentLanguage].sidebar[link.name]}</span>
                        </Link>
                    ))}
                </div>
            </div>

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
                            <span className="sp-name">
                                {content[currentLanguage][link.name]}
                            </span>
                        </Link>
                    ))}

                    <Dropdown>
                        <div className="drop-down2">
                            <Dropdown.Trigger>
                                <i className="bx bx-cog"></i>
                                <span style={{ color: "#fff", fontSize: "14px" }}>
                                    Setting {user.name}
                                </span>
                            </Dropdown.Trigger>
                        </div>

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
                    </Dropdown>
                </div>
            </div>
        </>
    );
}





