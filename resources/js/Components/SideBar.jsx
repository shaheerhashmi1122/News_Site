import React from "react";
import Home from "@/assests/home.png";
import Table from "@/assests/table.png";
import Charts from "@/assests/charts.png";
import Pages from "@/assests/pages.png";
import Dash from "@/assests/dash.png";
import { Link } from "@inertiajs/react";

import "../../css/app.css";

export default function SideBar() {
    return (
    
            <aside className=" min-h-screen border-r w-10 border-gray-100">
            
            
          
                <nav className="mt-6">
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
                            <Link to="/">
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
                            <Link to="/">
                                <img
                                    src={Pages}
                                    alt=""
                                    style={{ height: "24px" }}
                                />
                                <span />
                                Pages
                            </Link>
                        </li>
                    </ul>
                   </div>
                </nav>
            </aside>
        
    );
}

