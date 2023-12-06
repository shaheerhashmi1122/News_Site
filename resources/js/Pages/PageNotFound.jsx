import React from "react";
import ErrorImg from ".././Images/error-404.png"
import "../../css/Admin/admin.css"
import { Link } from "@inertiajs/react";
export default function PageNotFound() {
    return (
        <>
            <main className="main-content mt-0 ps">
                <section className="my-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 my-auto">
                                <h1 className="display-1 text-bolder text-gradient text-danger">
                                    Error 404
                                </h1>
                                <h2>Erm. Page not found</h2>
                                <p className="lead">
                                    We suggest you to go to the homepage while
                                    we solve this issue.
                                </p>
                                <Link href={route("login")}>

                                <button
                                    type="button"
                                    className="btn bg-gradient-dark mt-4"
                                    >
                                    Go to Homepage
                                </button>
                                    </Link>
                            </div>
                            <div className="col-lg-6 my-auto position-relative">
                                <img
                                    className="w-100 position-relative"
                                    src={ErrorImg}
                                    alt="404-error"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ps__rail-x" style={{left:" 0px;", bottom: "0px;"}}>
                    <div
                        className="ps__thumb-x"
                        tabindex="0"
                        style={{ left: "0px;", width: "0px;" }}
                    ></div>
                </div>
                <div className="ps__rail-y" style={{ top: "0px;", right: "0px;" }}>
                    <div
                        className="ps__thumb-y"
                        tabindex="0"
                        style={{ top: " 0px;", height: "0px;" }}
                    ></div>
                </div>
            </main>
        </>
    );
}
