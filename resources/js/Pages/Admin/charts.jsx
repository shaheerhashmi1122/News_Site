// import Dropdown from "@/Components/AdminComponents/Dropdown";
// import SideBar from '@/Components/AdminComponents/SideBar'
import React from 'react'
import { Head } from "@inertiajs/react";

import "../../../css/Admin/Charts.css"
import MainPage from "@/Components/AdminComponents/MainPage";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function charts({auth}) {
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
        <Head title="Analytics" />

       
        <div className="py-3  ">
            <div className=" sm:px-6 lg:px-8">
                <MainPage />
            </div>
        </div>
    </AuthenticatedLayout>
</>

  )
}
