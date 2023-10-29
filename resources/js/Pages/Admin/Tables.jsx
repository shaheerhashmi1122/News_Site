
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import React, {useEffect, useState} from "react";
import "../../../css/Admin/Charts.css";
import { Head } from "@inertiajs/react";

import axios from "axios"
import "../../../css/Admin/app.css";

export default function Tables({ auth }) {
    // fetching api fotr tables

const [data, setData] = useState([])
useEffect(() => {
    axios.get('http://127.0.01:8000/api/tableData').then((response) => {
      setData(response.data);
    });
  }, []); // empty dependency array
  







    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl bg-secondary heading h-10 py-2 px-16 text-light leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Tables" />

                <div className="py-3  ">
                    <div className=" sm:px-6 lg:px-8"></div>
                </div>

                <div className="px-3 py-3">
                    <div className="container-fluid pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-xl-6">
                                <div className="bg-secondary rounded h-100 p-4">
                                    <h6 className="mb-4">Data Table</h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            data.map(row=>{
                                                return(
                                                    <tr key={row.id}>
                                                        <th scope="row">{row.id}</th>
                                                        <td>{row.name}</td>
                                                        <td>{row.email}</td>
                                                        <td>{row.role}</td>
                                                        </tr>
                                                );
                                            })
                                          }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
