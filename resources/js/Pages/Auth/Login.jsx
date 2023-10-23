import React, { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/AdminComponents/InputError';
import InputLabel from '@/Components/AdminComponents/InputLabel';
import PrimaryButton from '@/Components/AdminComponents/PrimaryButton';
import TextInput from '@/Components/AdminComponents/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

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
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="role" value="Role" />
                    <div className="mt-2">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={data.role === 'user'}
                                onChange={() => setData('role', 'user')}
                                className="mr-2"
                            />
                            User
                        </label>
                        <label className="ml-4">
                            <input
                                type="radio"
                                name="role"
                                value="author"
                                checked={data.role === 'author'}
                                onChange={() => setData('role', 'author')}
                                className="mr-2"
                            />
                            Author
                        </label>
                    </div>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
