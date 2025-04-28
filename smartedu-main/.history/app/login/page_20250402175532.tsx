'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password, rememberMe });
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800"
            data-oid=".eo6s0c"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="7l5x9xn">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="uy-nh8d">
                    <div className="flex justify-between items-center py-4" data-oid="7.v_.9y">
                        <div className="flex items-center" data-oid="tjcf.71">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="vns0klx">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="-_kn5gx">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="bqk-jdm">
                            <button
                                onClick={() => router.push('/register')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="-3_e1:t"
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="tla0ell"
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-md"
                data-oid="rgc186u"
            >
                <div className="flex flex-col items-center" data-oid="9lwa8ne">
                    <div
                        className="w-16 h-16 mb-4 bg-blue-600 rounded-full flex items-center justify-center"
                        data-oid="_zndjrz"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-oid=".il9aoi"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                                data-oid="khsid49"
                            />
                        </svg>
                    </div>
                    <h2
                        className="text-2xl font-bold text-center text-gray-800 mb-2"
                        data-oid="k:94rp9"
                    >
                        Welcome Back
                    </h2>
                    <p className="text-gray-600" data-oid="7s6:.7c">
                        Sign in to access your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="15re-8u">
                    <div className="space-y-5" data-oid="lbbfw2h">
                        <div data-oid="z-4tms4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                                data-oid="ico2-jz"
                            >
                                Email address
                            </label>
                            <div className="relative" data-oid="im9m8t2">
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                    data-oid="u_vm70-"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        data-oid="mas2yeq"
                                    >
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                            data-oid="p_qrin9"
                                        />

                                        <path
                                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                            data-oid="n:6i:aa"
                                        />
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
                                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="you@example.com"
                                    data-oid="._8qs38"
                                />
                            </div>
                        </div>
                        <div data-oid=":8.q-a1">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 mb-2"
                                data-oid="36fubbx"
                            >
                                Password
                            </label>
                            <div className="relative" data-oid="o2sg2lj">
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                    data-oid=":lw8g2b"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        data-oid="edrk4zm"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                            data-oid="::a24i9"
                                        />
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
                                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                    data-oid="63tj5e1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between" data-oid="i-mgnv3">
                        <div className="flex items-center" data-oid="gf-k:x.">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                data-oid="uvwz5ya"
                            />

                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-700"
                                data-oid="ij93gm:"
                            >
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm" data-oid="2qvrbwa">
                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:text-blue-800"
                                data-oid=":vbfgol"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div data-oid="8hraj3b">
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                            data-oid="8hgw95q"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center" data-oid="51jdggo">
                    <div className="relative" data-oid="4mwd3sm">
                        <div className="absolute inset-0 flex items-center" data-oid="xw2g4wc">
                            <div
                                className="w-full border-t border-gray-200"
                                data-oid="ix_b69l"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="qlj3tsb">
                            <span className="px-2 bg-white text-gray-500" data-oid="tmfq1ps">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3" data-oid="6hst55b">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            data-oid="d1bdv_q"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                data-oid="7bhao.n"
                            >
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                    data-oid="1:_lk9c"
                                />

                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                    data-oid="igp:uf_"
                                />

                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                    data-oid="z5r328n"
                                />

                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                    data-oid="wnf4ts_"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            data-oid="l0wzqct"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                data-oid="ws7jp7h"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                                    clipRule="evenodd"
                                    data-oid="lny1voo"
                                />
                            </svg>
                        </button>
                    </div>

                    <p className="mt-6 text-gray-600" data-oid="ebeect6">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 hover:text-blue-800"
                            data-oid="fp0q845"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 py-8 bg-gray-900 text-gray-400" data-oid="5ebpqxg">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="ss63pf0"
                >
                    <div className="text-sm" data-oid="b-q5-rr">
                        © 2025 smartEdu. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
