import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";

import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Table from "@/assests/table.png";

import Chart from "@/assests/charts.png";
import Home from "@/assests/home.png";
import Pages from "@/assests/pages.png";
import { Link } from "@inertiajs/react";
import "../../css/app.css";
import DarkMode from "@/Components/DarkMode";

function Authenticated({ user, header, children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Start with the sidebar hidden by default
  const [activeNavItem, setActiveNavItem] = useState("");






  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };










// =====================================/darkmode=====================================




const [isDarkTheme, setIsDarkTheme] = useState(false);

const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme);
};








  return (
    <div className={`min-h-screen ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="flex">
        <aside
          className={`bg-white ${isSidebarVisible ? "w-64" : "w-20"} min-h-screen side-bar border-r border-gray-100`}
          onMouseEnter={showSidebar}
          onMouseLeave={hideSidebar}
        >
          <div className="px-4 py-4">
            <div className="logo">
              <Link href="/">
                <ApplicationLogo className={`block ${isSidebarVisible ? "h-9" : "h-6"} w-auto fill-current text-gray-800`} />
              </Link>
            </div>
          </div>
          <nav className="mt-6">
            <div>
              <ul className={`menu-list${isSidebarVisible ? "" : "2"}`}>
                <li className={`li-items${isSidebarVisible ? " navli" : "2"}`}>
                  <NavLink
                    className={`heading table ${
                      activeNavItem === "dashboard" ? "active" : ""
                    }`}
                    href={route("dashboard")}
                    onClick={() => handleNavItemClick("dashboard")}
                  >
                    Dashboard
                  </NavLink>
                </li>

                                    <li className="li-items">
                                        <Link
                                            className={` table ${
                                                activeNavItem === "home"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            href="#"
                                            onClick={() =>
                                                handleNavItemClick("home")
                                            }
                                        >
                                            Home
                                            <img
                                                className="icons"
                                                src={Home}
                                                alt=""
                                                style={{paddingLeft:"3px"}}
                                            />
                                        </Link>
                                    </li>
                                    <li className="li-items">
                                        <Link
                                            className={` table ${
                                                activeNavItem === "tables"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            href={route('admin.tables')}
                                            onClick={() =>
                                                handleNavItemClick("tables")
                                            }
                                        >
                                            Tables
                                            <img
                                                className="icons"
                                                src={Table}
                                                alt=""
                                            />
                                        </Link>
                                    </li>

                <li className={`li-items${isSidebarVisible ? "" : "2"}`}>
                  <Link
                    className={`table ${
                      activeNavItem === "charts" ? "active" : ""
                    }`}
                    href="/charts"
                    onClick={() => handleNavItemClick("charts")}
                  >
                    Charts
                    <img className="icons" src={Chart} alt="" />
                  </Link>
                </li>

                <li className={`li-items${isSidebarVisible ? "" : "2"}`}>
                  <Link
                    className={`table ${
                      activeNavItem === "pages" ? "active" : ""
                    }`}
                    href="/pages"
                    onClick={() => handleNavItemClick("pages")}
                  >
                    Pages
                    <img src={Pages} alt="" className="icons" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <div className="flex-1 min-h-screen">
          <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="shrink-0 flex items-center">
   <div className="dark-mode">
   <DarkMode darkMode={isDarkTheme} toggleDarkMode={toggleTheme} />
   </div>
                    <Link href="/">
                      <ApplicationLogo
                        className={`block ${isSidebarVisible ? "h-9" : "h-6"} w-auto fill-current text-gray-800`}
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <div className="ml-3 relative">
                    <Dropdown>
                      <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                          >
                            {user.name}
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
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <button
                    onClick={() =>
                      setShowingNavigationDropdown((previousState) =>
                        !previousState
                      )
                    }
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    {/* ... Mobile menu icon ... */}
                  </button>
                </div>
              </div>
            </div>
          </nav>
          {header && (
            <header className="bg-white shadow">
              <div className="dash">{header}</div>
            </header>
          )}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Authenticated;
