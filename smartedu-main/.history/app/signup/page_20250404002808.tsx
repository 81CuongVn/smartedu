'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const domain = process.env.NEXT_PUBLIC_DOMAIN;
            if (!domain) {
                throw new Error('API domain is not defined');
            }

            const response = await fetch(`${domain}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                    password,
                    role: 'USER', // Set default role to USER
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Signup successful', data);
                router.push('/login');
            } else {
                setError(data.message || 'Signup failed. Please try again.');
                console.error('Signup failed:', data);
            }
        } catch (error) {
            setError('An error occurred during signup. Please try again.');
            console.error('Signup error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800"
            data-oid="73dsx9o"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="qizqz6l">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="im_l4g3">
                    <div className="flex justify-between items-center py-4" data-oid="yh3yt:4">
                        <div className="flex items-center" data-oid="7w2-.7j">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="bn2b2dj">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="79_r7wu">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="cgghss.">
                            <button
                                onClick={() => router.push('/login')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="rsv64bi"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid=":.czuy2"
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
                data-oid="_iqizo5"
            >
                <h2
                    className="text-2xl font-bold text-center text-gray-800 mb-6"
                    data-oid="3d5vf-h"
                >
                    Create an Account
                </h2>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded mb-4" data-oid="ols0u4o">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} data-oid=".gmf1fv">
                    <div className="mb-4" data-oid="v4k0mmz">
                        <label
                            htmlFor="firstName"
                            className="block text-gray-700 mb-2"
                            data-oid="rk_d46w"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            data-oid=":gk1jgg"
                        />
                    </div>

                    <div className="mb-4" data-oid="pwttg6o">
                        <label
                            htmlFor="lastName"
                            className="block text-gray-700 mb-2"
                            data-oid="0vol2m7"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            data-oid="ylzid22"
                        />
                    </div>

                    <div className="mb-4" data-oid="8x_gl4g">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                            data-oid="dr_l8w4"
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
                            data-oid="sdff7r6"
                        />
                    </div>

                    <div className="mb-4" data-oid="h5ruhf7">
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 mb-2"
                            data-oid="zdc13_y"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            data-oid="nou-66q"
                        />
                    </div>

                    <div className="mb-4" data-oid="xgz71.v">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                            data-oid=":ncv3qf"
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
                            data-oid="xu-pyi_"
                        />
                    </div>

                    <div className="mb-6" data-oid="ewr1nms">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 mb-2"
                            data-oid="3k1j.sd"
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
                            data-oid="x6mu7e2"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition disabled:bg-blue-400"
                        data-oid="1vvmt2j"
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center" data-oid="f.uvwf_">
                    <p className="text-gray-600" data-oid="h0qzcgh">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-800"
                            data-oid="d46ndus"
                        >
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer - simplified version */}
            <footer className="mt-16 py-8 bg-gray-900 text-gray-400" data-oid="cv6-fx1">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="s6g_t1t"
                >
                    <div className="text-sm" data-oid="b5v0q5x">
                        © 2025 smartEdu. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
