import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import AuthorSidebar from "../AuthorComponents/AuthorSidebar";

export default function NavBar({ user }) {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };
    return (
        <>
            <nav
                className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                id="navbarBlur"
                navbar-scroll="true"
            >
                <div className="container-fluid py-1 px-3">
                    <div
                        className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-between "
                        id="navbar"
                    >
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm">
                                    <Link
                                        className="opacity-5 text-dark"
                                        href="javascript:;"
                                    >
                                        Pages
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-sm text-dark active"
                                    aria-current="page"
                                >
                                    Dashboard
                                </li>
                            </ol>
                            <h6 className="font-weight-bolder mb-0">
                                Dashboard
                            </h6>
                        </nav>
                        <ul
                            className="navbar-nav  
          justify-content-end"
                        >
                            <li className="nav-item d-flex align-items-center">
                                {/* <Link
                                    href="javascript:;"
                                    className="nav-link text-body font-weight-bold px-0"
                                > */}
                                <i className="fa fa-user me-sm-1"></i>
                                <span className="d-sm-inline d-none">
                                    {user.name}
                                </span>
                                {/*</Link> */}
                            </li>
                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <Link
                                    onClick={() =>
                                        setShowMobileSidebar(!showMobileSidebar)
                                    }
                                    className="nav-link text-body p-0"
                                    id="iconNavbarSidenav"
                                >
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item dropdown pe-2 px-3 d-flex align-items-center">
                                <Link
                                    href="javascript:;"
                                    className="nav-link text-body p-0"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-cog cursor-pointer"></i>
                                </Link>
                                <ul
                                    className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li className="mb-2">
                                        <Link
                                            className="dropdown-item border-radius-md"
                                            href={route(
                                                "author.profile",
                                                user.id
                                            )}
                                        >
                                            <div className="d-flex py-1">
                                                <div className="my-auto">
                                                    <i className="avatar avatar-sm bg-gradient-dark   me-3  fa fa-user"></i>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1">
                                                        <span className="font-weight-bold">
                                                            Profile
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link
                                            className="dropdown-item border-radius-md"
                                            href={route("logout")}
                                            method="post"
                                        >
                                            <div className="d-flex py-1">
                                                <div className="my-auto">
                                                    <i className="avatar avatar-sm bg-gradient-dark   me-3  fa fa-power-off"></i>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1">
                                                        <span className="font-weight-bold">
                                                            LogOut
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showMobileSidebar && (
                <AuthorSidebar
                    show={showMobileSidebar}
                    onClose={toggleMobileSidebar}
                />
            )}
        </>
    );
}
