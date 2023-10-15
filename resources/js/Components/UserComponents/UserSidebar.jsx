
import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react"; 
import Dropdown from "../AdminComponents/Dropdown";


export default function UserSidebar({show, onClose},user) {
  const [closeMenu, setCloseMenu] = useState(false)
  
 const [activeLink, setActiveLink] = useState("");

 const handleClick =(route)=>{
    console.log('Link clicked:', route);
    setActiveLink(route)
 }

 const links = [
    { name: 'Home', route: '/user/dashboard', icon: 'bx bx-grid-alt' },
    { name: 'General', route: '/user/general', icon: 'bx bx-user' },
    { name: 'Sports', route: '/user/sports', icon: 'bx bx-football' },
    { name: 'Techonology', route: '/user/technology', icon: 'bx bx-laptop' },
 ];

 return (
    <>
      <Head title="Home"/>

      <div className="User-sidebar desktop shadow-md">
        <div className="logo-details">
          <i className="bx bx-menu" ></i>
          <div className="head">GlobLink</div>
        </div>
        <div className="list-items">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className={`li-names ${activeLink === link.route ? 'active-link' : ''}`}
              onClick={() => handleClick(link.route)}
            >
              <i className={link.icon}></i>
              <span >{link.name}</span>
            </Link>
          ))}
        </div>
      </div>




{/* ================mobile view toogle sidebar======================================= */}


<div  className={show ? "mob-sidebar " : "mob-sidebar mobile active"}>

<button className= "close-menu" onClick={onClose}>
  <i className="bx bx-x "
  ></i>
</button>

        <div className="logo-details">
          <i className="bx bx-menu" style={{paddingTop:"20px"}}></i>
          <div className="head">GlobLink</div>
        </div>
        <div className="list-items">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className={`li-names ${activeLink === link.route ? 'active-link' : ''}`}
              onClick={() => handleClick(link.route)}
            >
              <i className={link.icon}></i>
              <span className="sp-name">{link.name}</span>





              
            </Link>

           
            
            
          ))}
          <div className="drop-down2">
                   
                   <Dropdown>
                       <Dropdown.Trigger>
                             <i className="bx bx-cog"></i>
                           <span className="rounded-md text-light sets">
                             Setting
                              
                           </span>
                       </Dropdown.Trigger>
                    <div className="drop-content">
                    <Dropdown.Content >
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
                    </div>
                   </Dropdown>
               </div>
        </div>
      </div>



    </>
 );
}