import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { useLanguage } from '../../../js/Components/UserComponents/LanguageContext';

import Dropdown from "../../Components/AdminComponents/Dropdown";

export default function UserSidebar() {
    return (
       
      
          <div className="User-sidebar ">
            <div className="logo-details">
                
           
                {/* <i className='bx bx-menu' id="btn" ></i> */}
                <div className="header"style={{color:"#fff"}}>News Site</div>
            </div>
            <ul className="nav-bar">
            
              <li>
                <Link href="#">
                  <i className='bx bx-grid-alt'></i>
                 
                                                      <div className="li-names">Home</div>
                  
                 
                </Link>
                 <span className="tooltip">Home</span>
              </li>
              <li>
               <Link href="#">
                 <i className='bx bx-user' ></i>
                
                                                      <div className="li-names">General</div>
               </Link>
               <span className="tooltip">General</span>
             </li>
             <li>
               <Link href="#">
                 <i className='bx bx-chat' ></i>
                
                                                      <div className="li-names">Technology
                                                      </div>
               </Link>
               <span className="tooltip">Technologys</span>
             </li>
             <li>
               <Link href="#">
                 <i className='bx bx-pie-chart-alt-2' ></i>
                
                                                      <div className="li-names">Sports</div>
               </Link>
               <span className="tooltip">Sports</span>
             </li>
             {/* <li>
               <Link href="#">
                 <i className='bx bx-folder' ></i>
                 <span className="links_name">File Manager</span>
               </Link>
               <span className="tooltip">Files</span>
             </li>
             <li>
               <Link href="#">
                 <i className='bx bx-cart-alt' ></i>
                 <span className="links_name">Order</span>
               </Link>
               <span className="tooltip">Order</span>
             </li>
             <li>
               <Link href="#">
                 <i className='bx bx-heart' ></i>
                 <span className="links_name">Saved</span>
               </Link>
               <span className="tooltip">Saved</span>
             </li>
             <li>
               <Link href="#">
                 <i className='bx bx-cog' ></i>
                 <span className="links_name">Setting</span>
               </Link>
               <span className="tooltip">Setting</span>
             </li>
             <li className="profile">
                 <div className="profile-details">
                   <img src="profile.jpg" alt="profileImg"/>
                   <div className="name_job">
                     <div className="name">Prem Shahi</div>
                     <div className="job">Web designer</div>
                   </div>
                 </div>
                 <i className='bx bx-log-out' id="log_out" ></i>
             </li> */}
            </ul>
            </div>
        </>
    );
}





