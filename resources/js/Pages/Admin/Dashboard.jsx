import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import  "../../../css/Admin/app.css";
import Revenue from "@/Components/AdminComponents/Revenue";
import MainPage from "@/Components/AdminComponents/MainPage";
export default function Dashboard({ auth }) {
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
                <Head title="Dashboard" />

                <Revenue />
                <div className="py-3  ">
                    <div className=" sm:px-6 lg:px-8">
                        <MainPage />
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
