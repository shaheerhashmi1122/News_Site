import React from "react";
import Home from "@/assests/home.png";
import Table from "@/assests/table.png";
import Charts from "@/assests/charts.png";
import Pages from "@/assests/pages.png";
import Dash from "@/assests/dash.png";

import "../../css/app.css";

export default function SideBar() {
    return (
        <>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <img src={Dash} alt="" style={{height:"24px",}} />
                        <span />
                        DashBoard
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Home} alt="" style={{height:"24px",}} />
                        <span />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Table} alt="" style={{height:"24px",}} />
                        <span  />
                        Tables
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Charts} alt="" style={{height:"24px",}} />
                        <span />
                        Charts
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Pages} alt=""  style={{height:"24px",}}/>
                        <span />
                        Pages
                    </a>
                </li>
              
            </ul>
        </>
    );
}
