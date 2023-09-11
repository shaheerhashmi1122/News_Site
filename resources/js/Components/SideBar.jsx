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
import DarkMode from "./DarkMode";

export default function SideBar({ darkMode, user }) {
    // ===============================darkmode============================

    return (
        <aside
            className={`${
                darkMode ? "dark-theme" : "light-theme"
            } bg-white min-h-screen side-bar border-r border-gray-100`}
        >
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
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-1 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                    <img className="setting" src={Setting} alt="" />
                                            {user.name}
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
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
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}
