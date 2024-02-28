import React from "react";
import "chart.js/auto";
import { usePage } from "@inertiajs/react";

;

export default function MainPage() {
    const { props } = usePage();
    const { posts, user, newuser, newpost } = props;

    // console.log(props)
    
    return (
        <>
            <div className="row mt-3">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                            Total Posts
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            {posts}       
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                        <i
                                            className="fa fa-coins text-lg opacity-10"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                            Total Users
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            {user} 
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                        <i
                                            className="fa fa-user text-lg opacity-10"
                                            aria-hidden="true"
                                        ></i>
                                        {/* <i
                        className="fa-solid fa-earth-americas text-lg opacity-10"
                        aria-hidden="true"
                      ></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                            New Users this month
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            {newuser}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                        <i
                                            className="fa fa-user text-lg opacity-10"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                            New posts this Month
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            {newpost}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                        <i
                                            className="fa fa-newspaper text-lg opacity-10"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
}
