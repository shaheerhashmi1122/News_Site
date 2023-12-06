import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/AdminComponents/InputError";
import InputLabel from "@/Components/AdminComponents/InputLabel";
import PrimaryButton from "@/Components/AdminComponents/PrimaryButton";
import TextInput from "@/Components/AdminComponents/TextInput";

import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <section className="min-vh-100 mb-8">
                <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg">
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-center mx-auto">
                                <h1 className="text-white mb-2 mt-5">
                                    Welcome!
                                </h1>
                                <p className="text-lead text-white">
                                    Enter your personal details and start a
                                    journey with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                            <div className="card z-index-0">
                                <div className="card-header text-center pt-4">
                                    <h5>Register with</h5>
                                </div>
                                <div className="card-body">
                                    <form role="form text-left">
                                        <div className="mb-3">
                                            <input
                                                id="name"
                                                value={data.name}
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                aria-label="Name"
                                                aria-describedby="email-addon"
                                                onChange={(e) =>
                                                    setData("name", e.target.value)
                                                }
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData("email", e.target.value)
                                                }
                                                aria-label="Email"
                                                aria-describedby="email-addon"
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                name="password"
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="password-addon"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData("password", e.target.value)
                                                }
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                name="password_confirmation"
                                                id="password_confirmation"
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                aria-label="password_confirmation"
                                                aria-describedby="password-addon"
                                                value={data.password_confirmation}
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.password_confirmation}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                                            <label
                                                                htmlFor="defaultSelect"
                                                                className="form-label"
                                                            >
                                                                Role:
                                                            </label>
                                                            <select
                                                                id="defaultSelect"
                                                                className="form-select"
                                                                name="role"
                                                                value={data.role}
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "role",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option>
                                                                    Select
                                                                </option>
                                                                <option value={"author"}>
                                                                    Author
                                                                </option>
                                                                <option value={"user"}>
                                                                    User
                                                                </option>
                                                            </select>
                                                            <InputError message={errors.id} className="mt-2" />
                                                </div>
                                        <div className="form-check form-check-info text-left">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                checked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefault"
                                            >
                                                I agree the{" "}
                                                <a
                                                    href="javascript:;"
                                                    className="text-dark font-weight-bolder"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                        
                                        <div className="text-center">
                                            {/* Use the PrimaryButton component instead of a standard button */}
                                            <PrimaryButton
                                                type="button"
                                                onClick={submit}
                                                className="btn bg-gradient-dark w-100 my-4 mb-2"
                                            >
                                                Sign up
                                            </PrimaryButton>
                                        </div>
                                        <p className="text-sm mt-3 mb-0">
                                            Already have an account?{" "}
                                            <Link
                                                href={route("login")}
                                                className="text-dark font-weight-bolder"
                                            >
                                                Sign in
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
