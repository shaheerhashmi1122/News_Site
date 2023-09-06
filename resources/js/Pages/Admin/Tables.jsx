import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Tables from "@/Pages/Admin/Tables";
import Table from "@/assests/table.png";
import Chart from "@/assests/charts.png";
import Home from "@/assests/home.png";
import Pages from "@/assests/pages.png";
import { Link, usePage } from "@inertiajs/react"; // Import `usePage` from Inertia
import '../../../css/app.css';

export default function Authenticated({ user, header, children }) {
    const [activeNavItem, setActiveNavItem] = useState("");
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    const page = usePage(); // Get the current Inertia page

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="bg-white w-64 min-h-screen side-bar border-r border-gray-100">
                <div className="px-4 py-4">
                    <div className="logo">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>
                </div>
                <nav className="mt-6">
                    <div>
                        <ul className="menu-list">
                            <li className="li-items navli">
                                <NavLink
                                    className={`heading table ${
                                        activeNavItem === "dashboard"
                                            ? "active"
                                            : ""
                                    }`}
                                    href={route("dashboard")}
                                    onClick={() =>
                                        handleNavItemClick("dashboard")
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>

                            <li className="li-items">
                                {/* Use `href` to navigate to Tables.jsx */}
                                <Link
                                    className={`heading table ${
                                        activeNavItem === "tables" ? "active" : ""
                                    }`}
                                    href={route('tables')}
                                    onClick={() =>
                                        handleNavItemClick("tables")
                                    }
                                >
                                    Tables
                                    <img className="icons" src={Table} alt="" />
                                </Link>
                            </li>

                            {/* Add other menu items here */}
                        </ul>
                    </div>
                </nav>
            </aside>
            {/* Main content */}
            <div className="flex-1 min-h-screen">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
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
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
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
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
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
    );
}
