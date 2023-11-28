import React from "react";
import NavBar from "@/Components/AdminComponents/NavBar";
import { Bar } from "react-chartjs-2";
import "../../../css/Admin/app.css";

import SideBar from "@/Components/AdminComponents/SideBar";
import Footer from "@/Components/AdminComponents/Footer";
import MainPage from "@/Components/AdminComponents/MainPage";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Children } from "react";

export default function Charts({ auth }) {
    const data1 = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Total",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "#3a416f",
            },
            {
                label: "Monthly",
                data: [19, 12, 13, 15, 3],
                backgroundColor: "#0bbee7",
            },
            {
                label: "Daily",
                data: [10, 22, 10, 35, 21],
                backgroundColor: "#cb0c9f",
            },
        ],
    };

    return (






<AuthenticatedLayout auth={auth}>
<Head title="Analytics" />


<MainPage/>
<div className="row my-4">
<div className="col-6 col-md-10 col-sm-12">
                                 <div className="card z-index-2">
                                     <div className="card-header pb-0">
                                         <h6>Sales overview</h6>
                                         <p className="text-sm">
                                             <i className="fa fa-arrow-up text-success"></i>
                                             <span className="font-weight-bold">
                                                 4% more
                                             </span>{" "}
                                             in 2021
                                         </p>
                                     </div>

                                     <div className="card-body p-3">
                                         <div className="chart">
                                             <Bar
                                                 data={data1}
                                                 options={{
                                                     scales: {
                                                         y: {
                                                             beginAtZero: true,
                                                         },
                                                     },
                                                 }}
                                             />
                            
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>


</AuthenticatedLayout>


    )}

