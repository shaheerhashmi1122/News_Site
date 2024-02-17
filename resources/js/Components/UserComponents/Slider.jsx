import React from "react";
import Techcard from "../../Images/technology.jpg";
import "../../../css/User/user.css";
import { usePage } from "@inertiajs/react";
import moment from "moment/moment";

export default function Slider() {
    const { latest } = usePage().props;
    // console.log(latest)
    return (
        <>
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col  mb-5">
                            <h1 className="display-4 font-weight-bolder card-header">
                              <span>Feature-</span> <span>News</span>
                            </h1>
                           
                        </div>
                    </div>
                    <div className="row">
                    
                        {latest.map((latest) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{
                                    backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')",
                                }}
                            >
                                <img
                                    className="card-img d-none"
                                    src={Techcard}
                                    alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                                    />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">
                                            Latest News
                                        </small>
                                        <h4 className="card-title mt-0">
                                            <a
                                                className="text-dark"
                                                href="https://creativemanner.com"
                                            >
                                               
                                            </a>
                                        </h4>
                                        <small>
                                            <i className="far fa-clock"></i> {moment(latest.created_at).format('MMM Do YY')}
                                        </small>
                                        <br/>
                                        <small>
                                        {moment(latest.created_at).format('dddd')}
                                        </small>
                                    </div>
                                    
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">
                                                    {latest.heading}
                                                </h6>
                                                <small>{latest.text}</small>
                                            </div>
                                        
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                        {/* Other card elements go here */}
                    </div>
                </div>
            </div>
        </>
    );
}
