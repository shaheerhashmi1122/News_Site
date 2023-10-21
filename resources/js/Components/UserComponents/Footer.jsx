import React from "react";
import "../../../css/User/Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaSquareInstagram} from "react-icons/fa6";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-07">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading">
                            <a href="#" className="logo">
                                GlobLink.com
                            </a>
                        </h2>
                        <p className="menu">
                            <a href="#">Home</a>
                            <a href="#">Agent</a>
                            <a href="#">About</a>
                            <a href="#">Listing</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </p>
                        <ul className="ftco-footer-social p-0">
                            <li className="ftco-animate">
                                <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Twitter"
                                >
                              <FaSquareXTwitter/>
                                    
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Facebook"
                                >
                                    
                                        <BiLogoFacebook />
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Instagram"
                                >
                               <  FaSquareInstagram  /> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright &copy; {currentYear} All rights reserved | This template is made with{" "}
                            <i className="ion-ios-heart" aria-hidden="true"></i>{" "}
                            by{" "}
                            <a href="#" target="_blank">
                                GlobeLink
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
