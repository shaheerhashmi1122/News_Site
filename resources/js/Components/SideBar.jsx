import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import Home from "@/assests/home.png";
import Table from "@/assests/table.png";
import Charts from "@/assests/charts.png";
import Dash from "@/assests/dashboard.png";
import Setting from "@/assests/setting.png";

// import Dropdown from "@/Components/Dropdown";
// import DarkMode from "@/Components/DarkMode";
// import Pages from "@/assests/pages.png";
import "../../css/app.css";
import "../../css/Sidebar.css";

export default function SideBar(user) {
    return (
      <div>

        <aside className="sidebar">
            <nav className="navbar">
                <Link to="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary">
                        <i className="fa fa-user-edit me-2"></i>News Site
                    </h3>
                </Link>

                <div className="admin align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img
                            className="rounded-circle"
                            src={Dash}
                            alt=""
                            style={{
                                width: "24px",
                                height: "24px",
                                color: "#EB1616",
                            }}
                        />
                    </div>
                    <div className="admin-head">
                        <h6 className="mb-0">DashBoard</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link
                        href={route("dashboard")}
                        className="nav-item nav-link active"
                    >
                        <img
                            src={Home}
                            alt=""
                            style={{ height: "24px", width: "24px" }}
                        />
                        <span></span>
                        <div className="names">Home</div>
                    </Link>
                    <div className="nav-item dropdown">
                        <Link
                            href={route("admin.tables")}
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src={Table}
                                alt=""
                                style={{ height: "24px", width: "24px" }}
                            />

                            <span></span>
                            <div className="names">Tables</div>
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="button.html" className="dropdown-item">
                                Buttons
                            </Link>
                            <Link
                                to="typography.html"
                                className="dropdown-item"
                            >
                                Typography
                            </Link>
                            <Link to="element.html" className="dropdown-item">
                                Other Elements
                            </Link>
                        </div>
                    </div>
                    <Link
                        href={route("admin.charts")}
                        className="nav-item nav-link"
                    >
                        <img
                            src={Charts}
                            alt=""
                            style={{ height: "24px", width: "24px" }}
                        />
                        <span></span>
                        <div className="names">Charts</div>
                    </Link>
                  
                </div>
            </nav>
        </aside>
      </div>

    );
}
