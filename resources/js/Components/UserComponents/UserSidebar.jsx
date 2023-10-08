import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react"; // Assuming you have Inertia.js installed

export default function UserSidebar() {
  const [activeLink, setActiveLink] = useState("");



  const handleClick =(link)=>{
    console.log('Link clicked:', link);
setActiveLink(link)
  }

 

  return (
    <div className="User-sidebar deskhrefp shadow-md">
      <div className="logo-details">
        <i className="bx bx-menu"></i>
        <div className="head">GlobLink</div>
      </div>
      <div className="list-items">
        <Link
          href={route("user.dashboard")}
          className={`li-names ${activeLink === "user.dashboard" ? "active-link" : ""}`}
        onClick={() => handleClick( "user.dashboard")} 
        >
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link
          href={route("user.general")}
          className={`li-names ${activeLink === "user.general" ? "active-link" : ""}`}
          onClick={() => handleClick( "user.general")} 
          // onClick={() => handleClick("user.general")} 
          >
          <i className="fas fa-globe"></i>
          <span>General</span>
        </Link>
        <Link
          href={route("user.sports")}
          className={`li-names ${activeLink === "user.sports" ? "active-link" : ""}`}
          onClick={() => handleClick( "user.sports")}
          >
          <i className="fas fa-futbol"></i>
          <span>Sports</span>
        </Link>
        <Link
        href={route("user.technology")}
        className={`li-names ${activeLink === "user.technology" ? "active-link" : ""}`}
        onClick={() => handleClick( "user.technology")}
        >
          <i className="fas fa-laptop"></i>
          <span>Technology</span>
        </Link>
      </div>
    </div>
  );
}
