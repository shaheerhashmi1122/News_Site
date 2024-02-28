import React from "react";
import NavBar from "@/Components/AdminComponents/NavBar";
import { Bar } from "react-chartjs-2";
import "../../../css/Admin/app.css";

import SideBar from "@/Components/AdminComponents/SideBar";
import Footer from "@/Components/AdminComponents/Footer";
import MainPage from "@/Components/AdminComponents/MainPage";
import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Children } from "react";

export default function Charts({ auth }) {
    const{ usermonth, postmonth } = usePage().props;
    
    const formattedUserMonth = Object.keys(usermonth).map(month => ({
        month: month,
        total: usermonth[month]
    }));
    const formattedPostMonth = Object.keys(postmonth).map(month => ({
        month: month,
        total: postmonth[month]
    }));

    const data1 = {
        labels: ["January", "February", "March", "April", "May","June","July","August","September","Octuber","November","December"],
        datasets: [
            {
                label: "Users",
                data: formattedUserMonth.map(monthData => monthData.total),
                backgroundColor: "#3a416f",
            },
            {
                label: "News Data",
                data: formattedPostMonth.map(monthData => monthData.total),
                backgroundColor: "#0bbee7",
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
                                         <h6>Analytics</h6>
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

