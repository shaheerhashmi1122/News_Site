import { Link } from "@inertiajs/react";
import Footer from "../AdminComponents/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios

export default function NewsTable() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    // Fetch data when the component mounts
    //     axios.get('http://127.0.0.1:8000/api/newsdata')
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

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
           
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <div class="d-lg-flex">
                                    <div>
                                        <h5 class="mb-0">All Products</h5>
                                        <p class="text-sm mb-0">
                                            A lightweight, extendable,
                                            dependency-free javascript HTML
                                            table plugin.
                                        </p>
                                    </div>
                                    <div class="ms-auto my-auto mt-lg-0 mt-4">
                                        <div class="ms-auto my-auto">
                                            <a
                                                href="./new-product.html"
                                                class="btn bg-gradient-primary btn-sm mb-0"
                                                target="_blank"
                                            >
                                                +&nbsp; New Product
                                            </a>
                                            <button
                                                type="button"
                                                class="btn btn-outline-primary mx-1 btn-sm mb-0"
                                                data-bs-toggle="modal"
                                                data-bs-target="#import"
                                            >
                                                Import
                                            </button>
                                            <div
                                                class="modal fade"
                                                id="import"
                                                tabindex="-1"
                                                aria-hidden="true"
                                            >
                                                <div class="modal-dialog mt-lg-10">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5
                                                                class="modal-title"
                                                                id="ModalLabel"
                                                            >
                                                                Import CSV
                                                            </h5>
                                                            <i
                                                                class="fas fa-upload ms-3"
                                                                aria-hidden="true"
                                                            ></i>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p>
                                                                You can browse
                                                                your computer
                                                                for a file.
                                                            </p>
                                                            <input
                                                                type="text"
                                                                placeholder="Browse file..."
                                                                class="form-control mb-3"
                                                                onfocus="focused(this)"
                                                                onfocusout="defocused(this)"
                                                            />
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="importCheck"
                                                                    checked=""
                                                                />
                                                                <label
                                                                    class="custom-control-label"
                                                                    for="importCheck"
                                                                >
                                                                    I accept the
                                                                    terms and
                                                                    conditions
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button
                                                                type="button"
                                                                class="btn bg-gradient-secondary btn-sm"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button
                                                                type="button"
                                                                class="btn bg-gradient-primary btn-sm"
                                                            >
                                                                Upload
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="btn btn-outline-primary btn-sm export mb-0 mt-sm-0 mt-1"
                                                data-type="csv"
                                                type="button"
                                                name="button"
                                            >
                                                Export
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body px-0 pb-0">
                                <div class="table-responsive">
                                    <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                       
                                        <div class="dataTable-container">
                                            <table
                                                class="table table-flush dataTable-table"
                                                id="products-list"
                                            >
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "61.4655%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Product
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "6.56588%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Category
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "5.07614%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Price
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "6.62105%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                SKU
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "5.46237%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Quantity
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "7.66939%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Status
                                                            </a>
                                                        </th>
                                                        <th
                                                            data-sortable=""
                                                            style={{width: "7.22798%;"}}
                                                        >
                                                            <a
                                                                href="#"
                                                                class="dataTable-sorter"
                                                            >
                                                                Action
                                                            </a>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex">
                                                                <div class="form-check my-auto">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        id="customCheck1"
                                                                        checked=""
                                                                    />
                                                                </div>
                                                                <img
                                                                    class="w-10 ms-3"
                                                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg"
                                                                    alt="hoodie"
                                                                />
                                                                <h6 class="ms-3 my-auto">
                                                                    BKLGO Full
                                                                    Zip Hoodie
                                                                </h6>
                                                            </div>
                                                        </td>
                                                        <td class="text-sm">
                                                            Clothing
                                                        </td>
                                                        <td class="text-sm">
                                                            $1,321
                                                        </td>
                                                        <td class="text-sm">
                                                            243598234
                                                        </td>
                                                        <td class="text-sm">
                                                            0
                                                        </td>
                                                        <td>
                                                            <span class="badge badge-danger badge-sm">
                                                                Out of Stock
                                                            </span>
                                                        </td>
                                                        <td class="text-sm">
                                                            <a
                                                                href="javascript:;"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Preview product"
                                                            >
                                                                <i
                                                                    class="fas fa-eye text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                            <Link
                                                                href={route("author.update_news")}
                                                                class="mx-3"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Edit product"
                                                            >
                                                                <i
                                                                    class="fas fa-user-edit text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </Link>
                                                            <a
                                                                href="javascript:;"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Delete product"
                                                            >
                                                                <i
                                                                    class="fas fa-trash text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                  
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
