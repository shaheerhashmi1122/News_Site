import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
// import InputError from '@/Components/AdminComponents/InputError';
// import InputLabel from '@/Components/AdminComponents/InputLabel';
// import PrimaryButton from '@/Components/AdminComponents/PrimaryButton';
// import TextInput from '@/Components/AdminComponents/TextInput';
import { Head, Link, useForm } from "@inertiajs/react";
import MainPage from "../../Components/AdminComponents/MainPage";
import Revenue from "../../Components/AdminComponents/Revenue";

// import AuthorSidebar from '@/Components/AuthorComponents/AuthorSidebar';
// import UploadNews from '@/Components/AuthorComponents/UploadNews';
// import Footer from '@/Components/AdminComponents/Footer';

export default function AuthorDashboard({ auth }) {
    return (
        //         <>

        //         <AuthLayout
        //          user={auth.user}
        //          header={
        //              <h2 className="font-semibold text-xl bg-secondary heading h-10 py-2 px-16 text-light leading-tight">
        //                  Dashboard
        //              </h2>
        //          }>
        //             <Head title="Add News" />

        // <UploadNews/>

        // <Footer/>
        //         </AuthLayout >
        //                         </>
        <>
            <AuthLayout auth={auth}>
                <Head title="Dashboard" />
                <div className="">
                    <MainPage />
                </div>
                <div className="">
                    <Revenue />
                </div>
            </AuthLayout>
        </>
    );
}
