import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/User/Slider.css";
import pico from "../../../js/Images/pico.png";

export default function Slider() {
    useEffect(() => {
        const slideCarousel = document.getElementById("slideCarousel");
        const myCarousel = new window.bootstrap.Carousel(slideCarousel, {
            interval: 4000,
        });
    }, []);

    //     const imgStyle={
    // width:"40%",
    // height:"100%",
    // margin:"10px",
    // padding:"10px",
    // marginLeft:"auto",
    // float:"left"
    //     }

    return (
        <>
            <div className="slider-head">
                <h4>Breaking News</h4>
            </div>
            <div className="slider">
                <div
                    id="slideCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                    25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                        25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                        25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>
                                
                                {/* More slides go here */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                        25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>{" "}
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                        25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>{" "}
                                <div className="col-sm-3 slide-news">
                                    <a className="thumbnail">
                                        <img src={pico} alt="" />
                                        25 Dec, 23
                                    </a>
                                    <div className="slide-lines">
                                        Develop the nurture business
                                    </div>
                                </div>
                                
                                {/* More slides go here */}
                            </div>
                        </div>
                        {/* Additional carousel items */}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#slideCarousel"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#slideCarousel"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </>
    );
}
