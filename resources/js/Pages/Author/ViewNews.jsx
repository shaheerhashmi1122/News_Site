import AuthorLayout from "@/Layouts/AuthLayout";
import React from "react";
export default function viewNews({ auth, NewsData }) {

    return (
       
        <AuthorLayout auth={auth}>
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-4">News Detail</h5>
                                <div class="row">
                                    <div class="col-xl-5 col-lg-6 text-center">
                                        <img
                                            class="w-100 border-radius-lg shadow-lg mx-auto"
                                            src={`/news/${NewsData.image}`}
                                            alt="chair"
                                        />


                                        <div
                                            class="pswp"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-hidden="true"
                                        >
                                            <div class="pswp__bg"></div>

                                            <div class="pswp__scroll-wrap">
                                                <div class="pswp__container">
                                                    <div class="pswp__item"></div>
                                                    <div class="pswp__item"></div>
                                                    <div class="pswp__item"></div>
                                                </div>

                                                <div class="pswp__ui pswp__ui--hidden">
                                                  
                                                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                                        <div class="pswp__share-tooltip"></div>
                                                    </div>
                                                    <div class="pswp__caption">
                                                        <div class="pswp__caption__center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 mx-auto">
                                        <h3 class="mt-lg-0 mt-4">
                                            {NewsData.heading}
                                        </h3>
                                        <div class="rating">
                                            <i
                                                class="fas fa-star"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                class="fas fa-star"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                class="fas fa-star"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                class="fas fa-star"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                class="fas fa-star-half-alt"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                        <br />
                                        
                                        <br />
                                        <label class="mt-4">Description</label>
                                        <ul>
                                            <li>{NewsData.description}</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-12">
                                        <h5 class="ms-3">Detail</h5>
                                        <div class="table table-responsive">
                                            <table class="table align-items-center mb-0">
                                               <p> {NewsData.text}</p>
                                                {/* <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex px-2 py-1">
                                                                <div></div>
                                                                <div class="d-flex flex-column justify-content-center">
                                                                    <h6 class="mb-0 text-sm">
                                                                    
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    
                                                    </tr>
                                                </tbody> */}
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
