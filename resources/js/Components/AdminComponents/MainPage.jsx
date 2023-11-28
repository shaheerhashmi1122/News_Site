import React from "react";
import "chart.js/auto";

;

export default function MainPage() {
    
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
                                            Today's Money
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            $53,000
                                            <span className="text-success text-sm font-weight-bolder">
                                                +55%
                                            </span>
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
                                            Today's Users
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            2,300
                                            <span className="text-success text-sm font-weight-bolder">
                                                +3%
                                            </span>
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
                                            New Clients
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            +3,462
                                            <span className="text-danger text-sm font-weight-bolder">
                                                -2%
                                            </span>
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
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                            Sales
                                        </p>
                                        <h5 className="font-weight-bolder mb-0">
                                            $103,430
                                            <span className="text-success text-sm font-weight-bolder">
                                                +5%
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                        <i
                                            className="fa fa-cart-plus text-lg opacity-10"
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
