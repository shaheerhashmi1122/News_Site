// import React from "react";
// import NavLink from "@/Components/AdminComponents/NavLink";

// import "../../../css/Admin/app.css";
// import { Head } from "@inertiajs/react";
// import SideBar from "@/Components/AdminComponents/SideBar";
// import Footer from "@/Components/AdminComponents/Footer";
// import MainPage from "@/Components/AdminComponents/MainPage";
// import Revenue from "@/Components/AdminComponents/Revenue";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// export default function Dashboard() {
    // return (
        // <div className="g-sidenav-show  bg-gray-100">



  // <AuthenticatedLayout
                
  //               header={
  //                   <h2 className="font-semibold text-xl bg-secondary heading h-10 py-2 px-16 text-light leading-tight">
  //                       Dashboard
  //                   </h2>
  //               }
  //           >
  //               <Head title="Dashboard" />

  //               <Revenue />
  //               <div className="py-3  ">
  //                   <div className=" sm:px-6 lg:px-8">
  //                       <MainPage />
  //                   </div>
  //               </div>
  //           </AuthenticatedLayout> 

      
        //     <SideBar />
        //     <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
        //         <NavLink />
        //         <div className="container-fluid py-4">
        //             <div className="row">
        //                 <MainPage />
        //             </div>
        //             <div className="row my-4">
        //                 <Revenue />
        //             </div>
        //             <Footer />
        //         </div>
        //     </main>
        // </div>
    // );
// }
// Dashboard.js
import React from 'react';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import MainPage from '../../Components/AdminComponents/MainPage';
import Revenue from '../../Components/AdminComponents/Revenue';
// import { Head } from '@inertiajs/react';
import SideBar from '@/Components/AdminComponents/SideBar';
import { Head } from '@inertiajs/react';
const Dashboard = ({ auth }) => {
  return (
    <AuthenticatedLayout auth={auth}>

           <Head title='Dashboard'/>
                    <div className="">
                        <MainPage />
                    </div>
                    <div className="">
                        <Revenue />
                    </div>
           
            
    </AuthenticatedLayout>
  );
};

export default Dashboard;
