'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800"
            data-oid="f4-w0ye"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="ai.wa39">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="_v38ih5">
                    <div className="flex justify-between items-center py-4" data-oid="lserio2">
                        <div className="flex items-center" data-oid="rcpqmde">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="dxm9jh1">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="kefy:e9">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="5xeqli9">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="xy4-.dr"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="8d2e21n"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="mzc13xp"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="vfixkv6"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="tppncgt">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="ixbkbz2"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="6urtlkd"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className={`py-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="g0zp8rt"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="72.p-.w">
                    <div className="lg:flex items-center" data-oid="m:.n-8o">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="rokl06d">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="0rmdjin"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="bv:u_cs">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="ymp3ho1">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="2:4a.8c"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="ihn5lpn"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="yov.flp">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="wbidw1s">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="-wszu_0"
                            >
                                <div className="flex items-center mb-4" data-oid="y0drn48">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="ytd_nrz"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="s5lbokl"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="d6altbi"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid=".seftlu">
                                    <div className="font-medium" data-oid="v7_t3sf">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid=":-6c1v9"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="5ct60tk">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="8.o.6j_"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="0issx33"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid=".3hpl54">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid=".mpl_3e"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="of-g6.s"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="58clnq2">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="rq89g8q"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="dfcih5o"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="maj41or">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="dm:kxvf"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="hatwyv-"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="tx5xt5k">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="e297c_t"
                                >
                                    <div className="text-sm text-blue-700" data-oid="ij5dmtb">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="80s07fj"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="v07h.ip"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="pdkh57b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="crsa0-n">
                    <div className="text-center mb-16" data-oid="zv4pt4_">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="y5awxkx">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="6w_gnnh">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="9a7gkgh">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="y401tpp"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="kn7l552"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="knsxgjy"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="f2bgvb4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="n10q28b">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="chhynlq">
                                <li className="flex items-start" data-oid=":uzn7e7">
                                    <span className="text-blue-500 mr-2" data-oid="-8pj:95">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="-ymoulf">
                                    <span className="text-blue-500 mr-2" data-oid="6qgdcp2">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="uhv.yz9">
                                    <span className="text-blue-500 mr-2" data-oid="4:kl.9b">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="xezk_ib"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="axeq.1m"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="yor1tpn"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="8d7uole"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="akbpto8">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="ewof55_">
                                <li className="flex items-start" data-oid="4r77p67">
                                    <span className="text-blue-500 mr-2" data-oid="fx9jm35">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="zfe54i-">
                                    <span className="text-blue-500 mr-2" data-oid="z4ksd1g">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="k.p7lfm">
                                    <span className="text-blue-500 mr-2" data-oid="i83s5-6">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="p0:3hze"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="cv:1y1k"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="eq6pt74"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="z_s553z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="x_37zt9">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="-0lli0q">
                                <li className="flex items-start" data-oid="4d90kpu">
                                    <span className="text-blue-500 mr-2" data-oid="ao-mvbv">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="-:yxztx">
                                    <span className="text-blue-500 mr-2" data-oid="jkuso4l">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="txfmue2">
                                    <span className="text-blue-500 mr-2" data-oid="dzt2mpe">
                                        •
                                    </span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=":4700ht"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="98yrvdz"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="tkuxd-b"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="vbpnohe"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="b08yxyv">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="ndzd4nr">
                                <li className="flex items-start" data-oid="krual7j">
                                    <span className="text-blue-500 mr-2" data-oid="xq.7dee">
                                        •
                                    </span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start" data-oid="awwb0_u">
                                    <span className="text-blue-500 mr-2" data-oid="p03r-6b">
                                        •
                                    </span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start" data-oid="2al0s3v">
                                    <span className="text-blue-500 mr-2" data-oid="ne:40l7">
                                        •
                                    </span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="3jaughp"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="pb_ts31"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="vq825p2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="atpcpw9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="k1mh-81">
                                MOET Reporting
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="09skoo9">
                                <li className="flex items-start" data-oid="1azwd34">
                                    <span className="text-blue-500 mr-2" data-oid="7tb3bz-">
                                        •
                                    </span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start" data-oid="3:8inro">
                                    <span className="text-blue-500 mr-2" data-oid="h.yzky.">
                                        •
                                    </span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start" data-oid="eehvr2c">
                                    <span className="text-blue-500 mr-2" data-oid="6eeytz_">
                                        •
                                    </span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="qh2i9n3"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="zna46px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="q9dw-qt"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="o1wy-rx"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="s5uac2c">
                                AI Modules
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="z.cu.k9">
                                <li className="flex items-start" data-oid="x7q74.a">
                                    <span className="text-blue-500 mr-2" data-oid="4zt4r-v">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="d4iy7n4">
                                    <span className="text-blue-500 mr-2" data-oid="ch54-mt">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="1nr4jgd">
                                    <span className="text-blue-500 mr-2" data-oid="8bx3rvm">
                                        •
                                    </span>
                                    Dropout risk prediction analytics
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section id="technical" className="py-16 bg-gray-50" data-oid="s0b2v0z">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xf_09nz">
                    <div className="text-center mb-16" data-oid="df5gjpi">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="kn6hs.h">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="nczke4p">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="qcg360k"
                    >
                        <div className="px-6 py-8" data-oid="cge.2ku">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="8glh4cb">
                                <div data-oid="hb:fcg1">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="sfs8:1t"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="4rpj9:q">
                                        <div className="flex items-start" data-oid="3w4e0:p">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="2ssh_2v"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="o:onq59"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="f99nd51"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="l7n332i">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="5-s0osq"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="vviqgvt">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="ksq-4w:">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="kjgbww0"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="i7o6wuq"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="k22rcdk"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="kvoow3.">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="comu5h6"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="c1ma.zx">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="y2r-lgu">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="0il:_x4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=":4wkhcg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="pt-0wo4"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="k0d61n.">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="p1hf6i1"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="2unt9uq">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="znkbo1u">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="3.fej-o"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bymzhq5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="gt5oxim"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="cx3m9_-">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="5g56_0k"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="ec_dn_g">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="o5.odll">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="uj54x--"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="7-ccxif">
                                        <div className="flex items-start" data-oid="a0xanyc">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="i71d1a5"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="0rryhla"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="yyvwx28"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="ogobcjr">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="u7s1nze"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="yx3sdnw">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="-tlcc_k">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="kou3hrd"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="2zdyqfd"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="te97s3u"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="q9p:ofw">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="1e9:hdu"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="802bpao">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="mr2una7">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="1nhd0gu"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="glc:u4s"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="s3lswml"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="srjq_l6">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="4sml8k6"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="b8_52ie">
                                                    Education Sector Database (CSDL Ngành GD)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section id="security" className="py-16 bg-white" data-oid="mkjzf5e">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a60rlke">
                    <div className="text-center mb-16" data-oid="cxwxpnp">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="mt_f24i">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="2ytqu:2">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="-ns:uih">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="j9q1jy0"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="5exm82j"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ey0o2t1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="i7f4clg"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="mct58sv">
                                <li className="flex items-start" data-oid="zo:uozx">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-p7xx9h"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="nra71sq"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid=":9rfs0b">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="l0zm.m4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ao.h0nz"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="iky5enn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="2a4a23d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="93z8c6e"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid=".eojzhn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="l87nrxg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="l4mylcm"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="i9pg2ul"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid=":0l6bfe"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="xyt-p9d"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="rzq5:a."
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="565jjj6">
                                <li className="flex items-start" data-oid=".cuk:pg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="oa_l_v_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="c205jw9"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="-1hwz4q">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="6xu8hwi"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="c3_n-l5"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="-0605r_">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="n-leu6t"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="u13csvg"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="yzm9g64">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="vg1nshw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="gxbiuct"
                                        />
                                    </svg>
                                    99.9% MOET compliance rate
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment & CTA */}
            <section className="py-16 bg-blue-700 text-white" data-oid="i.rxxt-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3_ya32c">
                    <div className="lg:flex items-center justify-between" data-oid="rhv.c.t">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="n7o:fv2">
                            <h2 className="text-3xl font-bold mb-4" data-oid="u2c0am:">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="qllxd0.">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="ye5auh2">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="rqvj4so"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="j-ol.cg"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="u31tyaq">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid=".oh.::i">
                                <h3 className="text-xl font-semibold mb-4" data-oid="8rl2avs">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="z59jptd">
                                    <li className="flex items-start" data-oid="e23xu2:">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fbx-efi"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="-o8mr4x"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="1i0x29a">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="i_d50lp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="6l7zepe"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="q8n8ln0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2:6rncf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="utfcc7b"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="2jdfhmr">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2fs7m5."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="a8ksato"
                                            />
                                        </svg>
                                        Cloud-based SaaS with On-premise Option
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="_zaetyr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nc.amzs">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="-o1yco3">
                        <div data-oid="4l6qhh:">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="srq77:_">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="qgxwzs4">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="22r1ynp">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="6a8q3ni"
                                >
                                    <span className="sr-only" data-oid="8ux1e8z">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="xigivsp"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="xbpm1rk"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid=":q8-08g"
                                >
                                    <span className="sr-only" data-oid="qkdln:-">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="eq0j-68"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid=".-yx5.l"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="bk73gop">
                            <h3 className="text-white font-medium mb-4" data-oid="db4_jq8">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="._1h11x">
                                <li data-oid="yjqvcr8">
                                    <a href="#" className="hover:text-white" data-oid="-rybm-f">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="l5mu2zw">
                                    <a href="#" className="hover:text-white" data-oid="ewd04d6">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="2:1xvof">
                                    <a href="#" className="hover:text-white" data-oid="57:sx6f">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="3-_1wlb">
                                    <a href="#" className="hover:text-white" data-oid="c-fvatd">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="gs9311u">
                                    <a href="#" className="hover:text-white" data-oid="rtxmf_f">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="cv7fm26">
                            <h3 className="text-white font-medium mb-4" data-oid="q81k-64">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="2u:va.p">
                                <li data-oid="3t-g.jj">
                                    <a href="#" className="hover:text-white" data-oid="7iv.:lj">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="bcej380">
                                    <a href="#" className="hover:text-white" data-oid="hldrnnk">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="trrk914">
                                    <a href="#" className="hover:text-white" data-oid=".9.tdf:">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="878sw2d">
                                    <a href="#" className="hover:text-white" data-oid="3jp_fm:">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="zwaezbo">
                                    <a href="#" className="hover:text-white" data-oid="taok7oz">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="wt25wns">
                            <h3 className="text-white font-medium mb-4" data-oid="x4y8g_y">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="nn-v0c0">
                                <li className="flex items-start" data-oid="c4l4uyy">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="y52dqdo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="4uzou96"
                                        />
                                    </svg>
                                    <span data-oid="x-7.lf_">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="j1uy5ck">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="96t0lqg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="w2c6a:1"
                                        />
                                    </svg>
                                    <span data-oid="scertv4">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="7rzgv0d">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="e0r60al"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="_7m7ua-"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="k835mvn"
                                        />
                                    </svg>
                                    <span data-oid="au09qfb">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="qji3w4l"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="cua3q-v">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="vgvckzg">
                            <a href="#" className="hover:text-white" data-oid="zq6mqbs">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="g3do.91">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="frp3kzd">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
