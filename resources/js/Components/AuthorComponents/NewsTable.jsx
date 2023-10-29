
import Footer from '../AdminComponents/Footer';
import React, { useEffect, useState } from "react";
import axios from 'axios'; // Don't forget to import axios

export default function NewsTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        axios.get('http://127.0.0.1:8000/api/newsdata')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []); // empty dependency array

    return (
        <div>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Basic Table</h6>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <th scope="row">{row.id}</th>
                                            <td>{row.heading}</td>
                                            <td>{row.description}</td>
                                            <td><img src={`/news/${row.image}`} alt="No image!!" /></td>
                                            <td>
                                                <button className='btn btn-primary'>Update</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
