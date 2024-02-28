import { Head, Link, useForm, usePage } from "@inertiajs/react";
// import "../../../css/Admin/profile.css"
// import "../../../css/Admin/app.css"

export default function Edit() {
    const{profile} = usePage().props;
    // console.log(profile);
    // return;
    const { data, setData, post, processing, errors } = useForm({
        name: profile.name || "",
        email: profile.email || "",
        password: profile.password || "",
      });

      const submit = (e) => {
        e.preventDefault();
    
        post(route("author.editprofile",profile.id), data);
      };

    return (
        <>
            <Head title="Profile" />

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">{profile.name}</span>
                            <span className="text-black-50">
                                {profile.email}
                            </span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-9 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <form onSubmit={submit}>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="name"
                                        defaultValue={profile.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        defaultValue={profile.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        defaultValue={profile.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="new password"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="confirm password"
                                    />
                                </div>
                            </div>
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
                                        type="submit"
                                    >
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
