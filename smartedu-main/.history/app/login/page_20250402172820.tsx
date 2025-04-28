=======
'use client';
import { useState } from 'react';
import Link from 'next/link';
=======

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password, rememberMe });
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200"
            data-oid="_4k24qx"
        >
            <div
                className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                data-oid="thaihf4"
            >
                <div className="flex flex-col items-center" data-oid="dec4iqz">
                    <div className="w-16 h-16 mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1
                        className="text-3xl font-bold text-gray-900 dark:text-white"
                        data-oid="9ajr:2p"
                    >
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400" data-oid="i1637lc">
                        Sign in to access your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="jvt.2il">
                    <div className="space-y-5" data-oid="l.irvqk">
                        <div data-oid="wvurtl0">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                data-oid=".buxdmu"
                            >
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                                    placeholder="you@example.com"
                                    data-oid="stjv2mi"
                                />
                            </div>
                        </div>
                        <div data-oid="7:1vg3s">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                data-oid="m00bghs"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 mt-1 block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                                    placeholder="••••••••"
                                    data-oid="phcyln2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between" data-oid="qo_dy68">
                        <div className="flex items-center" data-oid="kw6iuy6">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                data-oid="qjel:3j"
                            />

                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                                data-oid="_ebqh6j"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm" data-oid="5qdcvem">
                            <Link
                                href="/forgot-password"
                                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors duration-200"
                                data-oid="u0md4n4"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div data-oid="p8xk7_y">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:translate-y-[-1px]"
                            data-oid="z7d.kog"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center" data-oid="ni5tv4i">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                        </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    
                    <p className="mt-6 text-sm text-gray-600 dark:text-gray-400" data-oid="d2_7eln">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors duration-200"
                            data-oid="jesza7j"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
