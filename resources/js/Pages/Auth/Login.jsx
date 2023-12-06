import React, { useEffect, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/AdminComponents/InputError';
import Login_Image from "../../Images/login-design.jpg"


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        role: 'user', // Added role state with a default value
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), data, {
            onSuccess: (page) => {
                // Check the user's role and redirect accordingly
                if (data.role === 'author') {
                    // Redirect to the Author Dashboard
                    window.location.href = route('author.dashboard');
                } else {
                    // Redirect to the User Dashboard
                    window.location.href = route('user.dashboard');
                }
            },
        });
    };

    return (
        <>
            <Head title="Log in" />

          
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="card card-plain mt-8">
                                        <div className="card-header pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                            <p className="mb-0">To keep connected with us please login with your personal details.</p>
                                        </div>
                                        <div className="card-body">
                                            <form role="form" onSubmit={submit}>
                                                <label>Email</label>
                                                <div className="mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        aria-label="Email"
                                                        aria-describedby="email-addon"
                                                        value={data.email}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                    />
                                                    <InputError message={errors.email} className="mt-2" />
                                                </div>
                                                <label>Password</label>
                                                <div className="mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                        value={data.password}
                                                        onChange={(e) => setData('password', e.target.value)}
                                                    />
                                                    <InputError message={errors.password} className="mt-2" />
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="rememberMe"
                                                        checked={data.remember}
                                                        onChange={(e) => setData('remember', e.target.checked)}
                                                    />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <Link href={route('register')} className="text-info text-gradient font-weight-bold">Sign up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                        <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${Login_Image})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
