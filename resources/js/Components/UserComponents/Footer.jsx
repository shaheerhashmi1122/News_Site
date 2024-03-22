import React, { useState } from "react";
import "../../../css/User/user.css";
import { Link } from "@inertiajs/inertia-react"; 

 


export default function Footer() {


  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">

    <div className="container">
    <footer className="footer-59391">
      

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
            <Link href={route("user.dashboard")} className="m-0 p-0">GlobeLink</Link>
          </div>
          <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
            <ul className="list-unstyled nav-links m-0 nav-left">
              <li><a href="#">Terms</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a >Contact</a>


              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 text-lg-right order-3 order-lg-3">
            <p className="m-0 text-light"><small>&copy; {currentYear}. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </div>
  );
}
