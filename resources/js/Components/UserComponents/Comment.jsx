import React from "react";
import "../../../css/User/user.css";

export default function Comment() {
    return (
        <>
            <div className="comment">
                <div className="be-comment-block">
                    <h1 className="comments-title">Comments (3)</h1>
                    <div className="be-comment">
                        <div className="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt=""
                                    className="be-ava-comment"
                                />
                            </a>
                        </div>
                        <div className="be-comment-content">
                            <span className="be-comment-name">
                                <a href="blog-detail-2.html">Ravi Sah</a>
                            </span>
                            <span className="be-comment-time">
                                <i className="fa fa-clock-o"></i>
                                May 27, 2015 at 3:14am
                            </span>

                            <p className="be-comment-text">
                                Pellentesque gravida tristique ultrices. Sed
                                blandit varius mauris, vel volutpat urna
                                hendrerit id. Curabitur rutrum dolor gravida
                                turpis tristique efficitur.
                            </p>
                            <button className="comment-reply">Reply</button>
                        </div>
                    </div>
                    <div className="be-comment">
                        <div className="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt=""
                                    className="be-ava-comment"
                                />
                            </a>
                        </div>
                        <div className="be-comment-content">
                            <span className="be-comment-name">
                                <a href="blog-detail-2.html">
                                    Phoenix, the Creative Studio
                                </a>
                            </span>
                            <span className="be-comment-time">
                                <i className="fa fa-clock-o"></i>
                                May 27, 2015 at 3:14am
                            </span>
                            <p className="be-comment-text">
                                Nunc ornare sed dolor sed mattis. In scelerisque
                                dui a arcu mattis, at maximus eros commodo. Cras
                                magna nunc, cursus lobortis luctus at,
                                sollicitudin vel neque. Duis eleifend lorem non
                                ant. Proin ut ornare lectus, vel eleifend est.
                                Fusce hendrerit dui in turpis tristique blandit.
                            </p>
                            <button className="comment-reply">Reply</button>
                        </div>
                    </div>
                    <div className="be-comment">
                        <div className="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                    alt=""
                                    className="be-ava-comment"
                                />
                            </a>
                        </div>
                        <div className="be-comment-content">
                            <span className="be-comment-name">
                                <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                            </span>
                            <span className="be-comment-time">
                                <i className="fa fa-clock-o"></i>
                                May 27, 2015 at 3:14am
                            </span>
                            <p className="be-comment-text">
                                Cras magna nunc, cursus lobortis luctus at,
                                sollicitudin vel neque. Duis eleifend lorem non
                                ant
                            </p>
                            <button className="comment-reply">Reply</button>
                        </div>
                    </div>
                    <form className="form-block">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group fl_icon">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <input
                                        className="form-input"
                                        type="text"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 fl_icon">
                                <div className="form-group fl_icon">
                                    <div className="icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </div>
                                    <input
                                        className="form-input"
                                        type="text"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <textarea
                                        className="form-input"
                                        required=""
                                        placeholder="Your text"
                                    ></textarea>
                                </div>
                            </div>
                            <a className="btn btn-primary pull-right">submit</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
