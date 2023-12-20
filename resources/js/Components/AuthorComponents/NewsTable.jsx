import { Link, usePage } from "@inertiajs/react";
import Footer from "../AdminComponents/Footer";
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

export default function NewsTable() {
    const { data } = usePage().props;

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDelete = () => {
        // Perform the deletion logic here
        alert(`Deleting author with ID: ${authorId}`);
        // Close the confirmation modal
        setShowConfirmation(false);
    };


    return (
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
                                            href={route("author.upload_news")}
                                            className="btn bg-gradient-primary btn-sm mb-0"
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
                                                <tr>
                                                    <th
                                                        data-sortable=""
                                                        className="dataTable-sorter"
                                                        style={{ width: "61.4655%;" }}
                                                    >
                                                        Heading
                                                    </th>
                                                    <th
                                                        data-sortable=""
                                                        style={{ width: "6.56588%;" }}
                                                        className="dataTable-sorter"
                                                    >
                                                        Description
                                                    </th>
                                                    <th
                                                        data-sortable=""
                                                        className="dataTable-sorter"
                                                        style={{ width: "5.46237%;" }}
                                                    >
                                                        No. of Views
                                                    </th>
                                                    <th
                                                        data-sortable=""
                                                        style={{ width: "7.22798%;" }}
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
                                                            {data.description.slice(0,40)}
                                                        </td>
                                                        <td className="text-sm text-center">
                                                            {data.total_views}
                                                        </td>
                                                        <td className="text-sm">
                                                            <a
                                                                href={route("author.viewNews", data.id)}
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Preview product"
                                                            >
                                                                <i
                                                                    className="fas fa-eye text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                            <Link
                                                                href={route("author.update_news", data.id)}
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
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Delete product"
                                                                onClick={() => setShowConfirmation(true)}
                                                            >
                                                                <i
                                                                    className="fas fa-trash text-secondary"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </a>
                                                            <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Confirm Message</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    Are you sure you want to delete this News?
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                                                                        Cancel
                                                                    </Button>
                                                                    <Button variant="danger" onClick={handleDelete} href={route("author.delete", data.id)}>
                                                                        Delete
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
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
