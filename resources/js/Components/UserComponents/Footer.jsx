import React, { useState } from "react";
import "../../../css/User/Footer.css";
import { Link } from "@inertiajs/inertia-react"; // Correct import statement
// import ContactUs from "./ContactUs";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"; // Correct import statement
import { FaTwitterSquare, FaInstagram } from "react-icons/fa"; // Correct import statement
import ImportExportIcon from "@mui/icons-material/ImportExport"; // Correct import statement


export default function Footer() {

// ============ pop up contat page   // 
// const [seen, setSeen] = useState(false)   ;
// function togglePop () {
//   setSeen(!seen);

// };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-59391">
      <div className="border-bottom pb-5 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <form action="#" className="subscribe mb-4 mb-lg-0">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button><span className="icon-keyboard_backspace"></span></button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 text-lg-center">
              <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled nav-links social nav-right text-lg-right">
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-pinterest"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
            <Link href={route("user.dashboard")} className="m-0 p-0">GlobLink</Link>
          </div>
          <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
            <ul className="list-unstyled nav-links m-0 nav-left">
              <li><a href="#">Terms</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a >Contact</a>
{/* {seen ? <ContactUs toggle={togglePop} /> : null} */}
{/* onClick={togglePop} */}

              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 text-lg-right order-3 order-lg-3">
            <p className="m-0 text-light"><small>&copy; {currentYear}. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
