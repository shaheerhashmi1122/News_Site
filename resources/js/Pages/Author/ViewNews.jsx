import AuthorLayout from "@/Layouts/AuthLayout";
import React from "react";
export default function viewNews({ auth, NewsData }) {

    return (
       
        <AuthorLayout auth={auth}>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="mb-4">News Detail</h5>
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6 text-center">
                                        <img
                                            className="w-100 border-radius-lg shadow-lg mx-auto"
                                            src={`/news/${NewsData.image}`}
                                            alt="chair"
                                        />


                                        <div
                                            className="pswp"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-hidden="true"
                                        >
                                            <div className="pswp__bg"></div>

                                            <div className="pswp__scroll-wrap">
                                                <div className="pswp__container">
                                                    <div className="pswp__item"></div>
                                                    <div className="pswp__item"></div>
                                                    <div className="pswp__item"></div>
                                                </div>

                                                <div className="pswp__ui pswp__ui--hidden">
                                                  
                                                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                                        <div className="pswp__share-tooltip"></div>
                                                    </div>
                                                    <div className="pswp__caption">
                                                        <div className="pswp__caption__center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mx-auto">
                                        <h3 className="mt-lg-0 mt-4">
                                            {NewsData.heading}
                                        </h3>
                                       
                                        <br />
                                        
                                        <br />
                                        <label className="mt-4">Description</label>
                                        <ul>
                                            <li>{NewsData.description}</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <h5 className="ms-3">Detail</h5>
                                        <div className="table table-responsive">
                                            <table className="table align-items-center mb-0">
                                               <p> {NewsData.text}</p>
                                               
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthorLayout>
    );
}
