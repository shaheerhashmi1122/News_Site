import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import MainPage from "../../Components/AdminComponents/MainPage";
import Revenue from "../../Components/AdminComponents/Revenue";
import NewsTable from '@/Components/AuthorComponents/NewsTable';


export default function AuthorDashboard({ auth }) {
    return (
      
        <>
            <AuthLayout auth={auth}>
                <Head title="Dashboard" />
                <div className="">
                </div>
                <div className="">
                    <NewsTable/>
                </div>
            </AuthLayout>
        </>
    );
}
