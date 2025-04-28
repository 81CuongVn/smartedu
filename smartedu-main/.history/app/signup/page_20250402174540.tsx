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
            data-oid="qw0mtfn"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="j2l2ggw">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="zvdxr_j">
                    <div className="flex justify-between items-center py-4" data-oid="p6.3-wf">
                        <div className="flex items-center" data-oid="sokvutx">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="k2zzqmp">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="wkzn2sc">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="yjtx4sw">
                            <button
                                onClick={() => router.push('/login')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="hnkng8v"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="bj3a2td"
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
                data-oid="vw22-nu"
            >
                <h2
                    className="text-2xl font-bold text-center text-gray-800 mb-6"
                    data-oid="mvd_.ze"
                >
                    Create an Account
                </h2>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded mb-4" data-oid="x6rvbjy">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} data-oid="x5.xxox">
                    <div className="mb-4" data-oid="4ulfalv">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 mb-2"
                            data-oid="nv2-j.a"
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
                            data-oid="p7.itf2"
                        />
                    </div>

                    <div className="mb-4" data-oid="06cnwss">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                            data-oid=":3ti.4z"
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
                            data-oid="qgtxy5-"
                        />
                    </div>

                    <div className="mb-4" data-oid="ijy3mgd">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                            data-oid="x.fnyls"
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
                            data-oid="x9-wex1"
                        />
                    </div>

                    <div className="mb-6" data-oid="7.of.8t">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 mb-2"
                            data-oid="-crtpos"
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
                            data-oid=":69q:zi"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                        data-oid="x9a.jnk"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center" data-oid=":xp9_7w">
                    <p className="text-gray-600" data-oid="vc_g25k">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-800"
                            data-oid="wg-_5wb"
                        >
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer - simplified version */}
            <footer className="mt-16 py-8 bg-gray-900 text-gray-400" data-oid="6j61aor">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="2lauwjq"
                >
                    <div className="text-sm" data-oid="w9xx77i">
                        © 2025 smartEdu. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
