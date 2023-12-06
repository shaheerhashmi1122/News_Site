import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
// import "../../../css/Admin/app.css";

// import "../../../css/Author/Author.css";
import NavLink from "../AdminComponents/NavLink";
// import "../../../css/Admin/Sidebar.css";

export default function SideBar({ show }) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
      // Set initial active link when component mounts
      setActiveLink(window.location.pathname);
  }, []);

  const handleClick = (route) => {
      console.log("Link clicked:", route);
      setActiveLink(route);
  };


  const routes = [
    { route: "/author/dashboard", icon: "fa-home", name: "Home" },
    { route: "/author/shownews", icon: "fa-laptop", name: "News" },
    { route: "/author/uploadnews", icon: "fa-laptop", name: "UploadNews" },
    // { route: "/admin/charts", icon: "fa-chart-bar", name: "Analytics" },
  ];

  return (
    <>
      {/* <div className="sidebar" style={{ backgroundColor: "#f5f5f5" }}>
        <nav className="navbar">
          <div className="navbar-brand">
            <h3 className="text-danger mx-auto">
              <i className="fa fa-user-edit ml-8 pr-10 mb-4 "></i>GlobLink
            </h3>
          </div>
          <div className="ms-4 mb-4">
            <i className="fa fa-tachometer-alt ml-3 text-light float-left"></i>
            <div style={{ marginLeft: "100px" }}>
              <h6 className="mb-0 text-dark">Dashboard</h6>
              <div className="text-light">Author</div>
            </div>
          </div>
          <div className="navbar-nav">
            {routes.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`nav-item nav-link ${
                  activeLink === link.route ? "active" : ""
                }`}
                onClick={() => handleClick(link.route)}
              >
                <i className={`fa ${link.icon} me-2`}></i>
                <div className="names">{link.name}</div>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div
        className={
          show ? "sidebar-mobile side-mob" : "sidebar-mobile mobile active"
        }
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <nav className="navbar">
          <div className="navbar-brand">
            <h3 className="text-danger mx-auto">
              <i className="fa fa-user-edit ml-8 pr-10 mb-4 "></i>GlobLink
            </h3>
          </div>
          <div className="ms-4 mb-4">
            <i className="fa fa-tachometer-alt ml-3 text-light float-left"></i>
            <div style={{ marginLeft: "100px" }}>
              <h6 className="mb-0">Dashboard</h6>
              <div className="text-light">Author</div>
            </div>
          </div>
          <div className="navbar-nav">
            {routes.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`nav-item nav-link ${
                  activeLink === link.route ? "active" : ""
                }`}
                onClick={() => handleClick(link.route)}
              >
                <i className={`fa ${link.icon} me-2`}></i>
                <div className="names">{link.name}</div>
              </Link>
            ))}
          </div>
        </nav>
      </div> */}




<aside
                className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
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
            </aside>



    </>
  );
}
