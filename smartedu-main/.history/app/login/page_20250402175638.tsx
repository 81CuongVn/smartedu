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
            data-oid="or_dd27"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="8mkcs-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="v7rd2vw">
                    <div className="flex justify-between items-center py-4" data-oid=".hdsrks">
                        <div className="flex items-center" data-oid="6dogv6_">
                            <div className="text-blue-700 font-bold text-2xl" data-oid=":pl_3sw">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="h0s6tss">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <div className="flex space-x-4" data-oid="67ydxlh">
                            <button
                                onClick={() => router.push('/signup')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="q491o:b"
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="9d1y786"
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-md"
                data-oid="-h:x9yf"
            >
                <div className="flex flex-col items-center" data-oid="qlwgxhp">
                    <div
                        className="w-16 h-16 mb-4 bg-blue-600 rounded-full flex items-center justify-center"
                        data-oid="r7bo-au"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-oid="ye7_mbu"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                                data-oid="ak_06wp"
                            />
                        </svg>
                    </div>
                    <h2
                        className="text-2xl font-bold text-center text-gray-800 mb-2"
                        data-oid="0ejjim0"
                    >
                        Welcome Back
                    </h2>
                    <p className="text-gray-600" data-oid="t8e7bko">
                        Sign in to access your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="ty20iid">
                    <div className="space-y-5" data-oid="ab6u3-p">
                        <div data-oid="ixhrj86">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                                data-oid="h4.0sdu"
                            >
                                Email address
                            </label>
                            <div className="relative" data-oid=".:bduee">
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                    data-oid="rfl.4n9"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        data-oid="us2lu:s"
                                    >
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                            data-oid="buw9yqq"
                                        />

                                        <path
                                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                            data-oid="s5f.pgo"
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
                                    data-oid="s9y9hus"
                                />
                            </div>
                        </div>
                        <div data-oid="3x.1bu5">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 mb-2"
                                data-oid="ipyxyo_"
                            >
                                Password
                            </label>
                            <div className="relative" data-oid="ysesanb">
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                    data-oid="q3fyz-5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        data-oid="oxjvt8w"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                            data-oid="7qp107w"
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
                                    data-oid="35bhpby"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between" data-oid="09m6bln">
                        <div className="flex items-center" data-oid="0kx7l-c">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                data-oid="iqs76lv"
                            />

                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-700"
                                data-oid="qmafps_"
                            >
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm" data-oid="_em8nza">
                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:text-blue-800"
                                data-oid="qdx3u_c"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div data-oid="-j7n0g3">
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                            data-oid=":oyb4nx"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center" data-oid="pehu2f:">
                    <div className="relative" data-oid="ayso2rh">
                        <div className="absolute inset-0 flex items-center" data-oid="s744r.v">
                            <div
                                className="w-full border-t border-gray-200"
                                data-oid="c844n_5"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="mks4gq9">
                            <span className="px-2 bg-white text-gray-500" data-oid=".n0kbx2">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3" data-oid=":16b99u">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            data-oid="hxrx.w:"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                data-oid="dazcyzl"
                            >
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                    data-oid="wzji1-g"
                                />

                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                    data-oid="v4ygxif"
                                />

                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                    data-oid="60-o35_"
                                />

                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                    data-oid="_vlygru"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            data-oid="e69zvta"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                data-oid="5k8a4ap"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                                    clipRule="evenodd"
                                    data-oid="kg1nmcw"
                                />
                            </svg>
                        </button>
                    </div>

                    <p className="mt-6 text-gray-600" data-oid="3z4ptq8">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 hover:text-blue-800"
                            data-oid="td:lcx5"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
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
