import { Link, usePage } from "@inertiajs/react";
import Footer from "../AdminComponents/Footer";
import React, { useEffect, useState } from "react";

export default function NewsTable() {
    const { data } = usePage().props;

    return (
        // <div>
        //     <div className="container-fluid pt-4 px-4">
        //         <div className="row g-4">
        //             <div className="col-sm-12 col-xl-6">
        //                 <div className="bg-secondary rounded h-100 p-4">
        //                     <h6 className="mb-4">Basic Table</h6>
        //                     <table className="table">
        //                         <thead>
        //                             <tr>
        //                                 <th scope="col">#</th>
        //                                 <th scope="col">Heading</th>
        //                                 <th scope="col">Description</th>
        //                                 <th scope="col">Image</th>
        //                                 <th scope="col">Action</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {data.map((row) => (
        //                                 <tr key={row.id}>
        //                                     <th scope="row">{row.id}</th>
        //                                     <td>{row.heading}</td>
        //                                     <td>{row.description}</td>
        //                                     <td><img src={`/news/${row.image}`} alt="No image!!" /></td>
        //                                     <td>
        //                                         <button className='btn '><a href={`/api/editnews/${row.id}`}>Update</a></button>
        //                                         <button className='btn '><a href="#">Delete</a></button>
        //                                     </td>
        //                                 </tr>
        //                             ))}
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </div>

        <>
           
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="d-lg-flex">
                                    <div>
                                        <h5 className="mb-0">All News</h5>
                                    </div>
                                    <div className="ms-auto my-auto mt-lg-0 mt-4">
                                        <div className="ms-auto my-auto">
                                            <a
                                                href="./new-product.html"
                                                className="btn bg-gradient-primary btn-sm mb-0"
                                                target="_blank"
                                            >
                                                +&nbsp; Upload News
                                            </a>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-0">
                                <div className="table-responsive">
                                    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                       
                                        <div className="dataTable-container">
                                            <table
                                                className="table table-flush dataTable-table"
                                                id="products-list"
                                            >
                                                <thead className="thead-light">
                                                    <tr key={data.id}>
                                                        <th
                                                            data-sortable=""
                                                            className="dataTable-sorter"
                                                            style={{width: "61.4655%;"}}
                                                        >
                                                                Heading
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "6.56588%;"}}
                                                            className="dataTable-sorter"
                                                        >
                                                            Description
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            className="dataTable-sorter"
                                                            style={{width: "5.46237%;"}}
                                                        >
                                                             No. of Views
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "7.22798%;"}}
                                                            className="dataTable-sorter"
                                                        >
                                                            Action
                                                        </th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                {data.map((data) => (
                                                    <tr>
                                                        <td className="w-40">
                                                            <div className="d-flex">
                                                                <img
                                                                    className="w-10 ms-3"
                                                                    src={`/news/${data.image}`}
                                                                    alt="hoodie"
                                                                />
                                                                <h6 className="ms-3 my-auto">
                                                                    {data.heading}
                                                                </h6>
                                                            </div>
                                                        </td>
                                                        <td className="text-sm">
                                                            {data.description}
                                                        </td>
                                                        <td className="text-sm text-center">
                                                            {data.total_views}
                                                        </td>
                                                        <td className="text-sm">
                                                            <a
                                                                href="javascript:;"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Preview product"
                                                            >
                                                                <i
                                                                    className="fas fa-eye text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                            <Link
                                                                href={route("author.update_news")}
                                                                className="mx-3"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Edit product"
                                                            >
                                                                <i
                                                                    className="fas fa-user-edit text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </Link>
                                                            <a
                                                                href="javascript:;"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Delete product"
                                                            >
                                                                <i
                                                                    className="fas fa-trash text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                  
                                                </tbody>
                                            </table>
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
