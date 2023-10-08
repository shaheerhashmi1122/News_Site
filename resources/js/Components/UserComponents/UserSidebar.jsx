import React, { useState } from "react";
import { InertiaLink as NavLink, usePage } from "@inertiajs/react";
import "../../../css/User/Udash.css";

export default function UserSidebar() {
  const [activeRoute, setActiveRoute] = useState("user.dashboard");

  const handleClick = (route) => {
    setActiveRoute(route);
  };

  const navigation = [
    { name: "Home", route: "user.dashboard", icon: "fas fa-home" },
    { name: "General", route: "user.general", icon: "fas fa-globe" },
    { name: "Sports", route: "user.sports", icon: "fas fa-futbol" },
    { name: "Technology", route: "user.technology", icon: "fas fa-laptop" },
  ];

  return (
    <div className="User-sidebar desktop">
      <div className="logo-details">
        <i className="bx bx-menu"></i>
        <div className="head">GlobLink</div>
      </div>
      <div className="list-items">
        {navigation.map((item, index) => (
          <NavLink
            key={index}
            href={route(item.route, [], { preserveScroll: true })}
            className={`li-names ${
              activeRoute === item.route ? "active-link" : ""
            }`}
            onClick={() => handleClick(item.route)}
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
