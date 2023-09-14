import React, { useState } from "react";

import Dropdown from "@/Components/AdminComponents/Dropdown";
import  "../../css/Admin/app.css";

import SideBar from "@/Components/AdminComponents/SideBar";

function Authenticated({ user, header, children }) {
   
    return (
        <div
            className="min-h-screen  main-body"
        >
            <div className="flex">
          

                <SideBar  user={user.name} />
              
                <div className="flex-1 min-h-screen content">
                   
                        <nav className="bg-secondary border-b border-gray-100 ">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-16">
                                <button type="button" className="btn btn-square btn-dark m-2"><i className="fa fa-bars"></i></button><a href="#" className="sidebar-toggler flex-shrink-0">
                    
                </a>
                                    <div className="flex">
                                        
                                        <div className="shrink-0 flex  items-center">
                                        
                                        <div className="ml-3 relative">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <span className="inline-flex rounded-md">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-secondary hover:text-red-700 focus:outline-none transition ease-in-out duration-150"
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
                                                        href={route(
                                                            "profile.edit"
                                                        )}
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
                                    </div>
                                   


                                   {/* mobile menuuuuu */}
                                   
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