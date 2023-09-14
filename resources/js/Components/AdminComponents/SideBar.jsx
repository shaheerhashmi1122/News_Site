import React from "react";
import { Link } from "@inertiajs/react";

import "../../../css/Admin/app.css";
import "../../../css/Admin/Sidebar.css";

export default function SideBar() {


    return (
    
        <div className="sidebar ">
            <nav className="navbar">
                <Link
                    href={route("admin.dashboard")}
                    className="navbar-brand mx-4 mb-3"
                >
                    <h3 className="text-primary">
                        <i className="fa fa-user-edit me-2"></i>News Site
                    </h3>
                </Link>
                <div className=" admin ms-4 mb-4">
                    <div className="position-relative">
                    <i className="fa fa-tachometer-alt me-2"></i>
                       
                    </div>
                    <div className="admin-head ">
                        <h6 className="mb-0">Dashboard</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link
                        href={route("admin.dashboard")}
                        className="nav-item nav-link active"
                    >
                        <i className="fa fa-tachometer-alt me-2"></i><div className="names">Home</div>
                    </Link>
                    <div className="nav-item dropdown">
                        <Link
                            href={route("admin.tables")}
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            <i className="fa fa-laptop me-2"></i><div className="names">Tables</div>
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link href="button.html" className="dropdown-item">
                                Author
                            </Link>
                            <Link
                                href="typography.html"
                                className="dropdown-item"
                            >
                                User
                            </Link>
                        </div>
                    </div>

                    <Link
                        href={route("admin.charts")}
                        className="nav-item nav-link"
                    >
                        <i className="fa fa-chart-bar me-2"></i><div className="names">Analytics</div>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
