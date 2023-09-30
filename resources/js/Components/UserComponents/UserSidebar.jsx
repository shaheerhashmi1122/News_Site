import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import "../../../css/User/Udash.css";

export default function UserSidebar({ show }) {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <div className="User-sidebar desktop">
        <div className="logo-details">
          <i className="bx bx-menu"></i>
          <div className="head" style={{ color: "#fff", paddingLeft: "13px" }}>
            GlobLink
          </div>
        </div>
        <ul className="nav-bar">
          <li>
            <Link href={route("user.dashboard")}>
              <i
                className={`bx bx-grid-alt ${
                  activeItem === "Home" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${activeItem === "Home" ? "active" : ""}`}
                onClick={() => handleItemClick("Home")}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.general")}>
              <i
                className={`bx bx-user ${
                  activeItem === "General" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${
                  activeItem === "General" ? "active" : ""
                }`}
                onClick={() => handleItemClick("General")}
              >
                General
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.technology")}>
              <i
                className={`bx bx-chat ${
                  activeItem === "Technology" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${
                  activeItem === "Technology" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Technology")}
              >
                Technology
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.sports")}>
              <i
                className={`bx bx-pie-chart-alt ${
                  activeItem === "Sports" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${activeItem === "Sports" ? "active" : ""}`}
                onClick={() => handleItemClick("Sports")}
              >
                Sports
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className={show ? "mob-sidebar " : "mob-sidebar mobile active"}>
        <div className="logo-details">
          <i className="bx bx-menu"></i>
          <div className="head" style={{ color: "#fff", paddingLeft: "13px" }}>
            GlobLink
          </div>
        </div>
        <ul className="nav-bar">
          <li>
            <Link href={route("user.dashboard")}>
              <i
                className={`bx bx-grid-alt ${
                  activeItem === "Home" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${activeItem === "Home" ? "active" : ""}`}
                onClick={() => handleItemClick("Home")}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.general")}>
              <i
                className={`bx bx-user ${
                  activeItem === "General" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${
                  activeItem === "General" ? "active" : ""
                }`}
                onClick={() => handleItemClick("General")}
              >
                General
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.technology")}>
              <i
                className={`bx bx-chat ${
                  activeItem === "Technology" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${
                  activeItem === "Technology" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Technology")}
              >
                Technology
              </div>
            </Link>
          </li>
          <li>
            <Link href={route("user.sports")}>
              <i
                className={`bx bx-pie-chart-alt ${
                  activeItem === "Sports" ? "active" : ""
                }`}
              ></i>
              <div
                className={`li-names ${activeItem === "Sports" ? "active" : ""}`}
                onClick={() => handleItemClick("Sports")}
              >
                Sports
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
