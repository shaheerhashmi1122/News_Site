import React from "react";
import "../../../css/User/user.css";
import { Link } from "@inertiajs/react";
export default function Category() {
    return (
        <>
            <div className="category">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="single category">
                            <h3 className="side-title">Category</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/user/business">Business </Link>
                                </li>
                                <li>
                                    <Link href="/user/technology">
                                        Technology{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/user/travel">Travel </Link>
                                </li>
                                <li>
                                    <Link href="/user/entertainment">
                                        Entertainment{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/user/sports">Sports </Link>
                                </li>
                                <li>
                                    <Link href="/user/general">General </Link>
                                </li>
                                {/* <li><a href="" title="">IOS <span className="pull-right">13</span></a></li> */}
                                {/* <li><a href="" title="">Windows <span className="pull-right">13</span></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
