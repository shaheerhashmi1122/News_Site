import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link } from "@inertiajs/react";
// import "../../../css/Admin/profile.css"
// import "../../../css/Admin/app.css"

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <>
            <Head title="Profile" />
            {/* <AuthenticatedLayout > */}

            {/* <div className="container bg-dark">
    pakistan
</div> */}

            {/* <div className="py-12 bg-dark">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>  */}
            {/* </AuthenticatedLayout> */}

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">
                                edogaru@mail.com.my
                            </span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-9 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value=""
                                        placeholder="surname"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                {/* <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value=""/></div> */}
                                {/* / <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div> */}
                                {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                                {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                                {/* <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                                {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        value=""
                                    />
                                </div>
                                {/* <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value=""/></div> */}
                            </div>
                            {/* <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                </div> */}
                            <div className=" mt-3 d-flex flex-row justify-content-center">
                                <div className="text-center me-3">
                                    <Link
                                        href={route("admin.dashboard")}
                                        className="btn btn-primary home-button"
                                        type="button"
                                    >
                                        Return Home
                                    </Link>
                                </div>
                                <div className=" text-center">
                                    <button
                                        className="btn btn-primary profile-button"
                                        type="button"
                                    >
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
