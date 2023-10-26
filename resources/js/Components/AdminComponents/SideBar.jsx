import React,{useState} from "react";
import { Link } from "@inertiajs/react";

import "../../../css/Admin/app.css";
import "../../../css/Admin/Sidebar.css";

export default function SideBar({show}) {
 

  const [activeLink, setActiveLink] = useState('');

    const handleClick = (route) => {
        console.log("Link clicked:", route);
        setActiveLink(route);
    };

  const routes = [
    { route: "/admin/dashboard", icon: "fa-home", name: "Home" },
    { route: "/admin/tables", icon: "fa-laptop", name: "Tables" },
    { route: "/admin/charts", icon: "fa-chart-bar", name: "Analytics" },
  ];
  
    return (
    <>
        <div className= "sidebar">
            <nav className="navbar">
                <div
                
                    className="navbar-brand "
                >
                    <h3 className=" text-danger   mx-auto">
                        <i className="fa fa-user-edit ml-8 pr-10  mb-4 "></i>GlobLink
                    </h3>
                </div>
                <div className=" ms-4 mb-4">
                   <i className="fa fa-tachometer-alt ml-3 text-light  float-left" ></i>
                    <div style={{marginLeft:"100px"}}>
                        <h6 className=" mb-0">Dashboard</h6>
                        <div className="text-light" >Admin</div>
                    </div>
                </div>
                <div className="navbar-nav ">
        {routes.map((link, index) => (
          <Link
            key={index}
            href={link.route} // Assuming you're using React linkr, set the 'to' prop to your link
            className={`nav-item nav-link ${ activeLink === link.route ? ' active' : ''}`}
            onClick={() => handleClick(link.route)}
            >
            <i className={`fa ${link.icon} me-2`}></i>
            <div className="names">{link.name}</div>
          </Link>
        ))}
      </div>
            </nav>
        </div>



<div className= {show ? "sidebar-mobile side-mob   " : "sidebar-mobile mobile active "}>
            <nav className="navbar">
                <div
                
                    className="navbar-brand "
                >
                    <h3 className=" text-danger   mx-auto">
                        <i className="fa fa-user-edit ml-8 pr-10  mb-4 "></i>GlobLink
                    </h3>
                </div>
                <div className=" ms-4 mb-4">
                   <i className="fa fa-tachometer-alt ml-3 text-light  float-left" ></i>
                    <div style={{marginLeft:"100px"}}>
                        <h6 className=" mb-0">Dashboard</h6>
                        <div className="text-light" >Admin</div>
                    </div>
                </div>
                <div className="navbar-nav ">
        {routes.map((link, index) => (
          <Link
            key={index}
            href={link.route} // Assuming you're using React linkr, set the 'to' prop to your link
            className={`nav-item nav-link ${ activeLink === link.route ? ' active' : ''}`}
            onClick={() => handleClick(link.route)}
          >
            <i className={`fa ${link.icon} me-2`}></i>
            <div className="names">{link.name}</div>
          </Link>
        ))}
      </div>
            </nav>
        </div>


            </>
    );
}
