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
            data-oid="92u-stn"
        >
            {/* Left Sidebar Navigation */}
            <aside
                className="bg-white shadow-sm min-h-screen w-16 md:w-64 p-4 flex flex-col transition-all"
                data-oid="rp88j8q"
            >
                {/* Logo */}
                <div className="flex items-center mb-8" data-oid="9g-4fr4">
                    <div className="text-blue-700 font-bold text-2xl" data-oid=":pl_3sw">
                        smartEdu
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1" data-oid="1r2j2hk">
                    <ul className="space-y-2" data-oid="283jzho" key="olk-3rH6">
                        <li data-oid="8m-4k3t">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 bg-blue-50 text-blue-700"
                                data-oid="-v2xt-t"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="t1h1f9w"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        data-oid="5526uh:"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="riz8o2a">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <li data-oid="6be9_zd">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="tviltg3"
                                key="olk-Eb_5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="p8.dtxl"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="irkx:2j"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid=":qetl:l">
                                    Điểm danh
                                </span>
                                <span
                                    className="hidden md:inline ml-auto bg-gray-200 rounded-full px-2 py-0.5 text-xs"
                                    data-oid="j-y2e9e"
                                >
                                    12
                                </span>
                            </a>
                        </li>

                        <li data-oid="ke_z3vj">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="l_tc6.d"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ten-ck0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        data-oid="6symkk2"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="1ce3xko">
                                    Team
                                </span>
                            </a>
                        </li>
                        <li data-oid="u-g1ne-">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="e_lpu2g"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="aco6-4t"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        data-oid="iwnhvk4"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="gs6xmz8">
                                    Calendar
                                </span>
                                <span
                                    className="hidden md:inline ml-auto bg-blue-600 text-white text-xs rounded-md px-2"
                                    data-oid="peq.vyb"
                                >
                                    New
                                </span>
                            </a>
                        </li>
                        <li data-oid="_sbqabe">
                            <a
                                href="#"
                                className="flex items-center space-x-3 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                                data-oid="s8kp0xu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="67nueuj"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        data-oid="jjkys-w"
                                    />

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        data-oid="s:05po3"
                                    />
                                </svg>
                                <span className="hidden md:inline" data-oid="p.qi-7k">
                                    Settings
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Search bar in sidebar */}
                <div className="hidden md:flex items-center mb-6 relative" data-oid="4r5554_">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-oid="ic5xbix"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute left-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="abtp0c5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            data-oid="47i.kgm"
                        />
                    </svg>
                </div>

                {/* User profile */}
                <div
                    className="hidden md:block mt-auto pt-4 border-t border-gray-100"
                    data-oid="0om0sl2"
                >
                    <div className="flex items-center mb-3" data-oid="tip.vjq" key="olk-URd6">
                        <div
                            className="h-10 w-10 rounded-full bg-blue-200 mr-3 flex items-center justify-center"
                            data-oid="muy37g1"
                        >
                            <span className="text-blue-700 font-medium" data-oid="tu7qzei">
                                JS
                            </span>
                        </div>
                        <div data-oid="ivq_uo5">
                            <div className="font-medium" data-oid="1dq8k_r">
                                John Smith
                            </div>
                            <div className="text-sm text-gray-500" data-oid="ysa2t7s">
                                Free Plan
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-all duration-200"
                        data-oid="3w.3zoe"
                        key="olk-OBX8"
                    >
                        Đăng xuất
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={`flex-1 p-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="zfrjsh:"
            >
                {/* Top navigation */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0"
                    data-oid="9.n39ss"
                >
                    <div data-oid="4pe47e." key="olk-KqWY">
                        <div
                            className="flex items-center text-sm"
                            data-oid=".bnzvb7"
                            key="olk-_Emf"
                        >
                            <a
                                href="#"
                                className="text-gray-500 hover:text-blue-700"
                                data-oid="8s_0hhk"
                                key="olk-bjx_"
                            >
                                Trường
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mx-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="4uq:gk1"
                                key="olk-IWXX"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                    data-oid="z9_g5:0"
                                />
                            </svg>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-blue-700"
                                data-oid="-f6s1nh"
                                key="olk-6cTp"
                            >
                                Lớp
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-3" data-oid="5l.a2bu" key="olk-egxz">
                        <button
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200"
                            data-oid="ed_4.fm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="w8fq44x"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    data-oid="-e0vnor"
                                />

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    data-oid="y1uvopk"
                                />
                            </svg>
                            Manage
                        </button>
                        <button
                            className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all duration-200"
                            data-oid="1s0hlbh"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="3p-iu7y"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    data-oid="l_1jbsl"
                                />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>

                {/* Project header */}
                <div
                    className="bg-white p-6 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between"
                    data-oid="1ax_ax1"
                >
                    <div className="flex items-center mb-4 md:mb-0" data-oid="sr3u2z8">
                        <div
                            className="h-16 w-16 bg-white rounded-lg shadow-sm border border-gray-100 mr-6 flex items-center justify-center"
                            data-oid="c1fub_3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="0mjoh9."
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    data-oid="33otcm3"
                                />
                            </svg>
                        </div>
                        <div data-oid="zwnr35n">
                            <div className="flex items-center" data-oid="j694uq0">
                                <h1 className="text-3xl font-bold text-gray-900" data-oid="lgyk:c2">
                                    Class Name
                                </h1>
                                <div
                                    className="ml-3 bg-blue-100 text-blue-700 rounded-md px-2 py-1 text-sm flex items-center"
                                    data-oid="wu807rw"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="re:se_o"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            data-oid="q-b0u1x"
                                        />
                                    </svg>
                                    Certified
                                </div>
                            </div>
                            <div
                                className="flex items-center mt-2 text-gray-500 text-sm"
                                data-oid="khwt3hz"
                            >
                                <div className="flex items-center mr-4" data-oid="p-:t.p_">
                                    <div
                                        className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center"
                                        data-oid="9pjy.bc"
                                    >
                                        <span className="text-xs font-medium" data-oid="ei3jvm5">
                                            TK
                                        </span>
                                    </div>
                                    <span data-oid="wu8nror">Tony Kim</span>
                                </div>
                                <div data-oid="85o-afp">Edited 7 hrs ago</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2" data-oid="iown_g1">
                        <div
                            className="rounded-full px-4 py-2 text-cyan-700 bg-cyan-50 flex items-center"
                            data-oid="85eaiv2"
                            key="olk-QUWb"
                        >
                            <span className="font-medium mr-2" data-oid="y24swmz">
                                GPA
                            </span>
                            <span data-oid="i0pthv8">7.8/10</span>
                        </div>
                    </div>
                </div>

                {/* Financial visualization */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8" data-oid="sq0mrdv">
                    <h2 className="text-xl font-semibold mb-4" data-oid="zf6anko">
                        Thống kê kết quả học tập
                    </h2>

                    <div
                        className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 mb-6"
                        data-oid="k:0xqpg"
                    >
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Weekly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Weekly')}
                            data-oid=":ysqrmm"
                        >
                            Weekly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Monthly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Monthly')}
                            data-oid="nfs0ukh"
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Quarterly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Quarterly')}
                            data-oid="25umrvz"
                        >
                            Quarterly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTimeFrame === 'Yearly' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'} transition-all duration-200`}
                            onClick={() => setActiveTimeFrame('Yearly')}
                            data-oid="g5n.rr:"
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Chart visualization placeholder */}
                    <div className="h-64 relative mb-6" data-oid=":-mg3ul">
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            data-oid="o1:gvrl"
                        >
                            <div className="text-gray-400 text-sm text-center" data-oid="e49lq16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto mb-2 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="1s4uapb"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                        data-oid="f0radbq"
                                    />
                                </svg>
                                <p className="text-center" data-oid="qdx.y0a">
                                    Chart visualization would appear here
                                </p>
                                <p className="text-center" data-oid="z6iej_w">
                                    Revenue vs. Expenditures over time
                                </p>
                            </div>
                        </div>

                        {/* Sample data point popup */}
                        <div
                            className="absolute top-1/3 right-1/3 bg-white shadow-md rounded-lg p-3 border border-gray-100"
                            data-oid="kf_71x9"
                        >
                            <div className="text-sm font-medium mb-1" data-oid="1sx_j02">
                                June 2023
                            </div>
                            <div className="flex items-center text-sm mb-1" data-oid="9zyt8kq">
                                <div
                                    className="w-3 h-3 rounded-full bg-blue-500 mr-2"
                                    data-oid="omg.q8m"
                                ></div>
                                <span className="mr-2" data-oid="0.tklk9">
                                    Revenue:
                                </span>
                                <span className="font-medium" data-oid="1xq:07n">
                                    $85,200
                                </span>
                            </div>
                            <div className="flex items-center text-sm" data-oid="2y1rsh8">
                                <div
                                    className="w-3 h-3 rounded-full bg-red-400 mr-2"
                                    data-oid="_cj:mmr"
                                ></div>
                                <span className="mr-2" data-oid="5u.n800">
                                    Expenses:
                                </span>
                                <span className="font-medium" data-oid="d7h-eio">
                                    $63,400
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div
                        className="flex justify-between items-center text-sm text-gray-500"
                        data-oid="oqnw-bt"
                    >
                        <div data-oid="e3zegcd">Jan 2023</div>
                        <div data-oid="1lz27nh">Mar 2023</div>
                        <div data-oid="4qfy_lj">Jun 2023</div>
                        <div data-oid="y3-__bi">Sep 2023</div>
                        <div data-oid="e8.j8bw">Dec 2023</div>
                    </div>
                </div>

                {/* Deals table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-oid="nve7a0z">
                    <div
                        className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"
                        data-oid="92e04k6"
                    >
                        <div className="flex items-center" data-oid="chqk-vq">
                            <h2 className="text-xl font-semibold" data-oid="9z_8jdq">
                                Tất cả giáo viên
                            </h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="5s7yn_r"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                    data-oid="idox0xp"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="1r0e67f">
                            <div className="flex items-center" data-oid=".9e9wie">
                                <span className="text-gray-500 mr-2" data-oid="k7zdxbz">
                                    Sort by:
                                </span>
                                <select
                                    className="border-none bg-transparent font-medium focus:outline-none focus:ring-0"
                                    data-oid="8u:1rzd"
                                >
                                    <option data-oid="oogk6gk">Latest</option>
                                    <option data-oid="mfzi532">Oldest</option>
                                    <option data-oid="b7522y:">Amount (high)</option>
                                    <option data-oid="0v8k9x6">Amount (low)</option>
                                </select>
                            </div>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition-all duration-200 flex items-center transform hover:scale-105"
                                data-oid="qnlixzv"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="c318kt1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                        data-oid="hb-uhq-"
                                    />
                                </svg>
                                Add New
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto" data-oid="9_3v516">
                        <table className="w-full border-collapse" data-oid="z5.ae56">
                            <thead data-oid="e8tr0hk">
                                <tr
                                    className="bg-gray-50 text-gray-600 text-left"
                                    data-oid="5u.utl1"
                                >
                                    <th
                                        className="py-3 px-6 font-medium"
                                        data-oid="zi5x74m"
                                        key="olk-zUzY"
                                    >
                                        Tên
                                    </th>

                                    <th
                                        className="py-3 px-6 font-medium"
                                        data-oid="ssfihlq"
                                        key="olk-9kc_"
                                    >
                                        Môn học
                                    </th>
                                    <th
                                        className="py-3 px-6 font-medium"
                                        data-oid="_8b_x.:"
                                        key="olk-UWIN"
                                    >
                                        Số điện thoại
                                    </th>
                                    <th
                                        className="py-3 px-6 font-medium"
                                        data-oid="9bgpqc5"
                                        key="olk-4CEM"
                                    >
                                        Trạng thái 
                                    </th>
                                    <th
                                        className="py-3 px-6 font-medium"
                                        data-oid="yy8eekd"
                                        key="olk-nR32"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody data-oid="9no27ye">
                                <tr
                                    className="border-b border-gray-100"
                                    data-oid="a12tks9"
                                    key="olk-q0aA"
                                >
                                    <td className="py-4 px-6" data-oid="q0u:3g6">
                                        <div className="flex items-center" data-oid="20q28t8">
                                            <div
                                                className="h-8 w-8 rounded-full bg-indigo-100 mr-3 flex items-center justify-center"
                                                data-oid="_8tfbva"
                                            >
                                                <span
                                                    className="text-xs font-medium text-indigo-600"
                                                    data-oid="43bfvrl"
                                                >
                                                    RB
                                                </span>
                                            </div>
                                            <div data-oid="o1oq_56">
                                                <div className="font-medium" data-oid="n0pi4it">
                                                    Nguyen  Van A
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid=":7ue02x"
                                                >
                                                    Teacher
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="py-4 px-6 font-medium" data-oid="ug7-:.q">
                                        Tiếng anh
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="k2tdcup">
                                        0339187015
                                    </td>
                                    <td className="py-4 px-6" data-oid="wei6xg8">
                                        <span
                                            className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="2eom7:v"
                                        >
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right" data-oid="jj7kow2">
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="a:pxh-w"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="p82658i"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="l7ajgz2"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    className="bg-gray-50 border-b border-gray-100"
                                    data-oid="1:ad298"
                                    key="olk-49Po"
                                >
                                    <td className="py-4 px-6" data-oid="ljmz59c" key="olk-9ydo">
                                        <div className="flex items-center" data-oid="3axuwmv">
                                            <div
                                                className="h-8 w-8 rounded-full bg-red-100 mr-3 flex items-center justify-center"
                                                data-oid="yw9s51c"
                                            >
                                                <span
                                                    className="text-xs font-medium text-red-600"
                                                    data-oid=":_v.82n"
                                                >
                                                    SC
                                                </span>
                                            </div>
                                            <div data-oid="cp9olb9">
                                                <div className="font-medium" data-oid="9a7kwxl">
                                                    Nguyen Van B
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid=".lgmv6d"
                                                >
                                                    Teacher
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td
                                        className="py-4 px-6 font-medium"
                                        data-oid="ui2yyf3"
                                        key="olk-A0lY"
                                    >
                                        Toán
                                    </td>
                                    <td
                                        className="py-4 px-6 text-gray-500"
                                        data-oid="ua6k.1n"
                                        key="olk-yFzj"
                                    >
                                        0962299324
                                    </td>
                                    <td className="py-4 px-6" data-oid="ao22s-:" key="olk-W_2i">
                                        <span
                                            className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="4thm0nd"
                                        >
                                            Pending
                                        </span>
                                    </td>
                                    <td
                                        className="py-4 px-6 text-right"
                                        data-oid="yetmmwk"
                                        key="olk-XaWF"
                                    >
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="6:p4rxo"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="svy01af"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="03:vptw"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b border-gray-100"
                                    data-oid="-519-p6"
                                    key="olk-7_ON"
                                >
                                    <td className="py-4 px-6" data-oid="bc_nbpl" key="olk-xslO">
                                        <div className="flex items-center" data-oid="vtp3.9_">
                                            <div
                                                className="h-8 w-8 rounded-full bg-green-100 mr-3 flex items-center justify-center"
                                                data-oid="f5l14u_"
                                            >
                                                <span
                                                    className="text-xs font-medium text-green-600"
                                                    data-oid="-i86_d9"
                                                >
                                                    GM
                                                </span>
                                            </div>
                                            <div data-oid="l32.ipm">
                                                <div className="font-medium" data-oid="8j_k7yx">
                                                    Nguyen Van C
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="0vf0fik"
                                                >
                                                    Teacher
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td
                                        className="py-4 px-6"
                                        data-oid="bjffxnf"
                                        key="olk--I7t"
                                    ></td>
                                    <td
                                        className="py-4 px-6 font-medium"
                                        data-oid="j0lyv12"
                                        key="olk-BKDG"
                                    >
                                        Ngữ văn
                                    </td>
                                    <td
                                        className="py-4 px-6 text-gray-500"
                                        data-oid="v6hpekl"
                                        key="olk-6niV"
                                    >
                                        0938417245
                                    </td>
                                    <td className="py-4 px-6" data-oid="a1jd-:n" key="olk-IBXH">
                                        <span
                                            className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm"
                                            data-oid="3ao5d30"
                                        >
                                            Active
                                        </span>
                                    </td>
                                    <td
                                        className="py-4 px-6 text-right"
                                        data-oid="wexuwwc"
                                        key="olk-gD2c"
                                    >
                                        <button
                                            className="text-gray-500 hover:text-blue-700"
                                            data-oid="o2xt7d8"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="80.ijs-"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                    data-oid="2fsdv:2"
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
