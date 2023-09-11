import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import Home from "@/assests/home.png";
import Table from "@/assests/table.png";
import Charts from "@/assests/charts.png";
import Pages from "@/assests/pages.png";
import Dash from "@/assests/dash.png";
import Setting from "@/assests/setting.png";
import { Link } from "@inertiajs/react";

import "../../css/app.css";
import DarkMode from "@/Components/DarkMode";

export default function SideBar() {

        
    // ===============================darkmode============================

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };


    return (
        <aside
        className={`min-h-screen ${isDarkTheme ? "dark-theme" : "light-theme"} bg-white min-h-screen side-bar border-r border-gray-100`}>

            <nav>
                <div>
                                <ul className="side-menu ">
                        <li>
                            <Link href={route("dashboard")}>
                                <img
                                    src={Dash}
                                    alt=""
                                    style={{ height: "24px" }}
                                    />
                                <span />
                                DashBoard
                            </Link>
                        </li>
                        <li>
                            <Link href={route("dashboard")}>
                                <img
                                    src={Home}
                                    alt=""
                                    style={{ height: "24px" }}
                                    />
                                <span />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={route("admin.tables")}>
                                <img
                                    src={Table}
                                    alt=""
                                    style={{ height: "24px" }}
                                />
                                <span />
                                Tables
                            </Link>
                        </li>
                        <li>
                        <Link href={route("admin.charts")}>
                                <img
                                    src={Charts}
                                    alt=""
                                    style={{ height: "24px" }}
                                />
                                <span />
                                Charts
                            </Link>
                        </li>
                        <li>
                        <Link href={route("admin.pages")}>
                                <img
                                    src={Pages}
                                    alt=""
                                    style={{ height: "24px" }}
                                />
                                <span />
                                Pages
                            </Link>
                        </li>
                      
                        <li className="setting">
                            <Dropdown>
                                <Dropdown.Trigger>
                                  
                                    <img className="setting" src={Setting} alt="" />
                                </Dropdown.Trigger>
                                <Dropdown.Content  >
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
                        </li>
                                <li>
                                      <DarkMode  darkMode={isDarkTheme}
                                                    toggleDarkMode={toggleTheme}/>
                                    
                                    </li>      
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
