'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const [activeTimeFrame, setActiveTimeFrame] = useState('Monthly');
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    // Simulate loading state
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800 flex"
            data-oid="d0qp0z6"
        >
            {/* Left Sidebar Navigation */}
            <aside
                className="bg-white shadow-sm min-h-screen w-16 md:w-64 p-4 flex flex-col transition-all"
                data-oid="f0v0a_s"
            >
                {/* Logo */}
                <div className="flex items-center mb-8" data-oid=":c9fic:">
                    <div className="text-blue-700 font-bold text-2xl" data-oid="8s_iw6j">
                        Prody
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1" data-oid="fd0xolw">
                    <ul className="space-y-2" data-oid="p0goh4v">
                        <li data-oid="xjmuq-9">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 bg-blue-50 text-blue-700"
                                data-oid="jee7r46"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="q0n.7.1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        data-oid="gh8n0gi"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="hfxsp.:">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <li data-oid="x6io.g2">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="la013e8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=".3ptlqz"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid=".5936ww"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="en1m5k1">
                                    Projects
                                </span>
                                <span
                                    className="hidden md:inline ml-auto bg-gray-200 rounded-full px-2 py-0.5 text-xs"
                                    data-oid="pr3viv8"
                                >
                                    12
                                </span>
                            </a>
                        </li>
                        <li data-oid="m6mnd2-">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="al2mpi."
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="__6qyqm"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        data-oid="hyu:2k9"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="iu2p:a9">
                                    Finances
                                </span>
                            </a>
                        </li>
                        <li data-oid="t92dmup">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="-sx:-7w"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="p-5f.j-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        data-oid="bamj.6q"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="hozn::7">
                                    Team
                                </span>
                            </a>
                        </li>
                        <li data-oid="1gxme:n">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="j2vh89d"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":eo3gwm"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        data-oid="ja8a56i"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="cer9cqu">
                                    Calendar
                                </span>
                                <span
                                    className="hidden md:inline ml-auto bg-blue-600 text-white text-xs rounded-md px-2"
                                    data-oid="qbqefwt"
                                >
                                    New
                                </span>
                            </a>
                        </li>
                        <li data-oid="nopskp7">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="obofyzn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="j7ewvl:"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        data-oid="-xdp54d"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        data-oid=":0yjgt1"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="qidvc0b">
                                    Settings
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Search bar in sidebar */}
                <div className="hidden md:flex items-center mb-6 relative" data-oid="qz4u12a">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-oid="iz-3zj:"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute left-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="tbxc:_t"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            data-oid="x8xdfl5"
                        />
                    </svg>
                </div>

                {/* User profile */}
                <div
                    className="hidden md:block mt-auto pt-4 border-t border-gray-100"
                    data-oid="6mx2n6v"
                >
                    <div className="flex items-center mb-3" data-oid="fz:8f:k">
                        <div
                            className="h-10 w-10 rounded-full bg-blue-200 mr-3 flex items-center justify-center"
                            data-oid="ny5ptuf"
                        >
                            <span className="text-blue-700 font-medium" data-oid="io6tw9x">
                                JS
                            </span>
                        </div>
                        <div data-oid="k33qec2">
                            <div className="font-medium" data-oid="uakba56">
                                John Smith
                            </div>
                            <div className="text-sm text-gray-500" data-oid=".a3j5zw">
                                Free Plan
                            </div>
                        </div>
                    </div>
                    <div className="mb-3" data-oid="wvjejzw">
                        <div className="text-xs text-gray-500 mb-1" data-oid="twdxgp3">
                            5/10 projects used
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full" data-oid="413a56c">
                            <div
                                className="h-full bg-blue-600 rounded-full"
                                style={{ width: '50%' }}
                                data-oid="u8o.cbj"
                            ></div>
                        </div>
                    </div>
                    <button
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-all duration-200"
                        data-oid="y0.ak8v"
                    >
                        Get full access
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={`flex-1 p-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="f2jkmhq"
            >
                {/* Top navigation */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0"
                    data-oid="c72ktr1"
                >
                    <div className="flex items-center text-sm" data-oid="qgs2y2z">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-blue-700"
                            data-oid="xjt61cj"
                        >
                            Projects
                        </a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="1t3kar."
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="zkj7ft1"
                            />
                        </svg>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-blue-700"
                            data-oid="zh2q7.2"
                        >
                            Construction
                        </a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="5eh7qxn"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="1g_ijvi"
                            />
                        </svg>
                        <span className="text-gray-900 font-medium" data-oid="hfjm-kp">
                            House Spectrum Ltd
                        </span>
                    </div>

                    <div className="flex space-x-3" data-oid="hs2i5oi">
                        <button
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200"
                            data-oid="e2gnxhh"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid=".9zf1zd"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    data-oid="d1ra-80"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    data-oid="4.vg6yc"
                                />
                            </svg>
                            Manage
                        </button>
                        <button
                            className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all duration-200"
                            data-oid=":a-2.0s"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="_vxeehe"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    data-oid="7kipz8x"
                                />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>

                {/* Project header */}
                <div
                    className="bg-white p-6 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between"
                    data-oid="6uk0zl5"
                >
                    <div className="flex items-center mb-4 md:mb-0" data-oid=".v19eht">
                        <div
                            className="h-16 w-16 bg-white rounded-lg shadow-sm border border-gray-100 mr-6 flex items-center justify-center"
                            data-oid="nwepsdp"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="nzk-l.1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    data-oid=":al1ffm"
                                />
                            </svg>
                        </div>
                        <div data-oid="dtg-g_p">
                            <div className="flex items-center" data-oid="5vgnptv">
                                <h1 className="text-3xl font-bold text-gray-900" data-oid="ar41bdq">
                                    House Spectrum Ltd
                                </h1>
                                <div
                                    className="ml-3 bg-blue-100 text-blue-700 rounded-md px-2 py-1 text-sm flex items-center"
                                    data-oid="12ysz53"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="9utl1s2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            data-oid="n9h1wtd"
                                        />
                                    </svg>
                                    Certified
                                </div>
                            </div>
                            <div
                                className="flex items-center mt-2 text-gray-500 text-sm"
                                data-oid="mz_zrm-"
                            >
                                <div className="flex items-center mr-4" data-oid="on2lxd5">
                                    <div
                                        className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center"
                                        data-oid=":c1562j"
                                    >
                                        <span className="text-xs font-medium" data-oid="v-f..yk">
                                            TK
                                        </span>
                                    </div>
                                    <span data-oid="kifhszh">Tony Kim</span>
                                </div>
                                <div data-oid="apt4ewy">Edited 7 hrs ago</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2" data-oid="u3shnna">
                        <div
                            className="rounded-full px-4 py-2 text-blue-700 bg-blue-50 flex items-center"
                            data-oid="j66rh0z"
                        >
                            <span className="font-medium mr-2" data-oid="7lj7mf7">
                                Sales:
                            </span>
                            <span data-oid="jqth8u8">5.3/10</span>
                        </div>
                        <div
                            className="rounded-full px-4 py-2 text-green-700 bg-green-50 flex items-center"
                            data-oid="cz7jk5c"
                        >
                            <span className="font-medium mr-2" data-oid="0fmlam.">
                                Profit:
                            </span>
                            <span data-oid="_4ea_v4">2.4/10</span>
                        </div>
                        <div
                            className="rounded-full px-4 py-2 text-cyan-700 bg-cyan-50 flex items-center"
                            data-oid="zbv9s90"
                        >
                            <span className="font-medium mr-2" data-oid="e-z42s.">
                                Customer:
                            </span>
                            <span data-oid="1ewoy1a">7.8/10</span>
                        </div>
                    </div>
                </div>

                {/* Financial visualization */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8" data-oid="o5ttzqj">
                    <h2 className="text-xl font-semibold mb-4" data-oid="42h7lii">
                        Consolidated budget
                    </h2>

                    <div
                        className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 mb-6"
                        data-oid="caoh055"
                    >
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Weekly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Weekly')}
                            data-oid="3d7rgrv"
                        >
                            Weekly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Monthly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Monthly')}
                            data-oid="43iugg-"
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Quarterly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Quarterly')}
                            data-oid="v4s7bhc"
                        >
                            Quarterly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Yearly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Yearly')}
                            data-oid="ipd-xam"
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Chart visualization placeholder */}
                    <div className="h-64 relative mb-6" data-oid="b8o814b">
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            data-oid="64ivkss"
                        >
                            <div className="text-gray-400 text-sm text-center" data-oid="jm2:6in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto mb-2 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="uj4jc2v"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                        data-oid="cd19to-"
                                    />
                                </svg>
                                <p className="text-center" data-oid="pdvl5yn">
                                    Chart visualization would appear here
                                </p>
                                <p className="text-center" data-oid="abbgi4v">
                                    Revenue vs. Expenditures over time
                                </p>
                            </div>
                        </div>

                        {/* Sample data point popup */}
                        <div
                            className="absolute top-1/3 right-1/3 bg-white shadow-md rounded-lg p-3 border border-gray-100"
                            data-oid="8o_j5p5"
                        >
                            <div className="text-sm font-medium mb-1" data-oid="o8ww9yk">
                                June 2023
                            </div>
                            <div className="flex items-center text-sm mb-1" data-oid="2q:be9w">
                                <div
                                    className="w-3 h-3 rounded-full bg-blue-500 mr-2"
                                    data-oid="z6188ev"
                                ></div>
                                <span className="mr-2" data-oid="gzobxt9">
                                    Revenue:
                                </span>
                                <span className="font-medium" data-oid="4srk6sh">
                                    $85,200
                                </span>
                            </div>
                            <div className="flex items-center text-sm" data-oid="h:54980">
                                <div
                                    className="w-3 h-3 rounded-full bg-red-400 mr-2"
                                    data-oid="knrkwl_"
                                ></div>
                                <span className="mr-2" data-oid="8jljby6">
                                    Expenses:
                                </span>
                                <span className="font-medium" data-oid="jx1ndas">
                                    $63,400
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div
                        className="flex justify-between items-center text-sm text-gray-500"
                        data-oid="45hj3_f"
                    >
                        <div data-oid="jw:w1yg">Jan 2023</div>
                        <div data-oid="mi42x4u">Mar 2023</div>
                        <div data-oid="iky.dv_">Jun 2023</div>
                        <div data-oid=":avqudn">Sep 2023</div>
                        <div data-oid="16oy_j7">Dec 2023</div>
                    </div>
                </div>

                {/* Deals table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-oid="zpi-e80">
                    <div
                        className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"
                        data-oid="2jgo5az"
                    >
                        <div className="flex items-center" data-oid="pfqmskv">
                            <h2 className="text-xl font-semibold" data-oid="-tyl-lo">
                                All deals
                            </h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="b7ov66y"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                    data-oid="9n1fvmt"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="94s3i5u">
                            <div className="flex items-center" data-oid="9gf5zxf">
                                <span className="text-gray-500 mr-2" data-oid="6ei9y02">
                                    Sort by:
                                </span>
                                <select
                                    className="border-none bg-transparent font-medium focus:outline-none focus:ring-0"
                                    data-oid="l5xq536"
                                >
                                    <option data-oid="rjm.ibb">Latest</option>
                                    <option data-oid="lr7y15f">Oldest</option>
                                    <option data-oid="0aw1-si">Amount (high)</option>
                                    <option data-oid="n1244ah">Amount (low)</option>
                                </select>
                            </div>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition-all duration-200 flex items-center transform hover:scale-105"
                                data-oid="qsws0xg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="adyv4y5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                        data-oid="k5qhkjc"
                                    />
                                </svg>
                                Add New
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto" data-oid="xxy4ogk">
                        <table className="w-full border-collapse" data-oid="al4k31s">
                            <thead data-oid="lxlustm">
                                <tr
                                    className="bg-gray-50 text-gray-600 text-left"
                                    data-oid="d-io5.g"
                                >
                                    <th className="py-3 px-6 font-medium" data-oid="s.3dvqn">
                                        Name
                                    </th>
                                    <th className="py-3 px-6 font-medium" data-oid="ju:5vt6">
                                        Source
                                    </th>
                                    <th className="py-3 px-6 font-medium" data-oid="ffpu4sv">
                                        Budget
                                    </th>
                                    <th className="py-3 px-6 font-medium" data-oid="72pc7rh">
                                        Created
                                    </th>
                                    <th className="py-3 px-6 font-medium" data-oid="s37:60y">
                                        Status
                                    </th>
                                    <th className="py-3 px-6 font-medium" data-oid="9trmrd4"></th>
                                </tr>
                            </thead>
                            <tbody data-oid="890z.q1">
                                <tr className="border-b border-gray-100" data-oid="mtxmowp">
                                    <td className="py-4 px-6" data-oid="svh43z:">
                                        <div className="flex items-center" data-oid="4-7mwc:">
                                            <div
                                                className="h-8 w-8 rounded-full bg-indigo-100 mr-3 flex items-center justify-center"
                                                data-oid="eeg4394"
                                            >
                                                <span
                                                    className="text-xs font-medium text-indigo-600"
                                                    data-oid="7:9kvrd"
                                                >
                                                    RB
                                                </span>
                                            </div>
                                            <div data-oid="5oagrvu">
                                                <div className="font-medium" data-oid="gwr30lj">
                                                    Riverside Building
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="h7ol65c"
                                                >
                                                    Office complex
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6" data-oid=":d-1hm4">
                                        <span
                                            className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="yeo:4oz"
                                        >
                                            Website
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 font-medium" data-oid="3dimv9-">
                                        $2.4M
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="qjrxqur">
                                        12 Jun 2023
                                    </td>
                                    <td className="py-4 px-6" data-oid="tr60ugt">
                                        <span
                                            className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="n8s8efo"
                                        >
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right" data-oid="o6gb9fv">
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="o39eie."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="-z::je8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="0tqf1z2"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    className="bg-gray-50 border-b border-gray-100"
                                    data-oid="6qb0_0o"
                                >
                                    <td className="py-4 px-6" data-oid="q08kip4">
                                        <div className="flex items-center" data-oid="67pao-_">
                                            <div
                                                className="h-8 w-8 rounded-full bg-red-100 mr-3 flex items-center justify-center"
                                                data-oid="ucakvvf"
                                            >
                                                <span
                                                    className="text-xs font-medium text-red-600"
                                                    data-oid="7acl9gg"
                                                >
                                                    SC
                                                </span>
                                            </div>
                                            <div data-oid="uo-q2s8">
                                                <div className="font-medium" data-oid="i-qmyeu">
                                                    Sunnyvale Complex
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="59e0z54"
                                                >
                                                    Residential
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6" data-oid="ril:o5c">
                                        <span
                                            className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="qf3_y1b"
                                        >
                                            Referral
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 font-medium" data-oid="jmm2sus">
                                        $1.8M
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="wugwqw7">
                                        28 May 2023
                                    </td>
                                    <td className="py-4 px-6" data-oid="37tu4la">
                                        <span
                                            className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm"
                                            data-oid=".brfy8:"
                                        >
                                            Pending
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right" data-oid="tu87uy3">
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="1ga16-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="nmb1031"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="ysmjwrh"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100" data-oid="-up1_pk">
                                    <td className="py-4 px-6" data-oid="_ud1msr">
                                        <div className="flex items-center" data-oid="9h3-_in">
                                            <div
                                                className="h-8 w-8 rounded-full bg-green-100 mr-3 flex items-center justify-center"
                                                data-oid="ga97.kq"
                                            >
                                                <span
                                                    className="text-xs font-medium text-green-600"
                                                    data-oid="szzjxlf"
                                                >
                                                    GM
                                                </span>
                                            </div>
                                            <div data-oid="yi1y2j7">
                                                <div className="font-medium" data-oid="8oli:4j">
                                                    Green Meadows
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="4cd05me"
                                                >
                                                    Eco-housing
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6" data-oid="qy:0:b0">
                                        <span
                                            className="bg-orange-50 text-orange-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="-9:vd:."
                                        >
                                            Event
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 font-medium" data-oid="756bpbm">
                                        $3.2M
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="0::4p8-">
                                        03 Apr 2023
                                    </td>
                                    <td className="py-4 px-6" data-oid="_eq22g-">
                                        <span
                                            className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="4auck.v"
                                        >
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right" data-oid="giv26p0">
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="1231lb7"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="59t7:1a"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="d.x0mi9"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
