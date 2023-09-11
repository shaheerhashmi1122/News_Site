import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
// import { BrowserRouter } from "react-router-dom";
import "../../css/app.css";
import DarkMode from "@/Components/DarkMode";
import SideBar from "@/Components/SideBar";

function Authenticated({ user, header, children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div
            className={`min-h-screen ${
                isDarkTheme ? "dark-theme" : "light-theme"
            }`}
        >
            <div className="flex">
          

                <SideBar darkMode={isDarkTheme} toggleDarkMode={toggleTheme} user={user.name} />
              
                <div className="flex-1 min-h-screen content">
                   
                        <nav className="bg-white border-b border-gray-100">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                    <div className="flex">
                                        <div className="shrink-0 flex items-center">
                                            <div className="dark-mode">
                                                <DarkMode
                                                    darkMode={isDarkTheme}
                                                    toggleDarkMode={toggleTheme}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        <button
                                            onClick={() =>
                                                setShowingNavigationDropdown(
                                                    (previousState) =>
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
