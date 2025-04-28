'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Here you would typically call your signup API
        console.log('Signup submitted', { fullName, email, password });
        // After successful signup, redirect to login
        router.push('/login');
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800"
            data-oid="q2p:t8f"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="mble6w8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ch.iixl">
                    <div className="flex justify-between items-center py-4" data-oid="vta6mf_">
                        <div className="flex items-center" data-oid="k.otot1">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="_t9923a">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="u1estv1">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="lrjtlt:">
                            <button
                                onClick={() => router.push('/login')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="f1b-omk"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="i7hsjwi"
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Signup Form */}
            <div
                className="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-md"
                data-oid="d-2u0mt"
            >
                <h2
                    className="text-2xl font-bold text-center text-gray-800 mb-6"
                    data-oid="q0fmeb_"
                >
                    Create an Account
                </h2>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded mb-4" data-oid="95he3os">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} data-oid="i_1z6x:">
                    <div className="mb-4" data-oid="f4b39o1">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 mb-2"
                            data-oid="xy6ea2."
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            data-oid="hsq-_1m"
                        />
                    </div>

                    <div className="mb-4" data-oid="jgk9mhc">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                            data-oid="gwqc3ro"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            data-oid="apirgxz"
                        />
                    </div>

                    <div className="mb-4" data-oid="i.t6_b6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                            data-oid="jv0n5ev"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                            data-oid="e-foz9c"
                        />
                    </div>

                    <div className="mb-6" data-oid="u86n7_8">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 mb-2"
                            data-oid="_p_nyw-"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                            data-oid="f00re9f"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                        data-oid="6u-wpo9"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center" data-oid="7:6z2za">
                    <p className="text-gray-600" data-oid="pzmlo09">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-800"
                            data-oid="yfooi-d"
                        >
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer - simplified version */}
            <footer className="mt-16 py-8 bg-gray-900 text-gray-400" data-oid="fdv5p4t">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="qn-glry"
                >
                    <div className="text-sm" data-oid="j_-h4r.">
                        © 2025 smartEdu. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
