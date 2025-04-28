'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { login, user, error } = useAuth();
    const router = useRouter();

    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const success = await login(email, password);
            if (success) {
                router.push('/dashboard');
            } else {
                setErrorMessage(error || 'Login failed. Please check your credentials.');
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-blue-50 flex items-center justify-center px-4"
            data-oid="5jowlk8"
        >
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8" data-oid="2-i1sgn">
                <div className="text-center mb-8" data-oid="k2wqqyq">
                    <h1 className="text-3xl font-bold text-blue-700" data-oid="gahs85:">
                        smartEdu
                    </h1>
                    <p className="text-gray-600 mt-2" data-oid="6kveal6">
                        Sign in to access your dashboard
                    </p>
                </div>

                {errorMessage && (
                    <div
                        className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md"
                        data-oid=".ntyf_f"
                    >
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" data-oid="o-n41pe">
                    <div data-oid="ue999rp">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="ws0rx75"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your@email.com"
                            required
                            data-oid="ggl0pz8"
                        />
                    </div>

                    <div data-oid="34b9fl-">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="0qk0zom"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                            data-oid="iu903-x"
                        />
                    </div>

                    <div data-oid="gn.4dhk">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-md text-white font-medium 
                ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} 
                transition-colors duration-200`}
                            data-oid="3sbcgcz"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
