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
            data-oid="4rxwt5k"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="3lpsm09">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="r59y6it">
                    <div className="flex justify-between items-center py-4" data-oid="56rqp34">
                        <div className="flex items-center" data-oid="itbz4v7">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="g4mf9le">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="fhg5o0v">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="p_6kbeu">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="b1xmg14"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="_38twd_"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="6_ku3sr"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="v:n.7yx"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="38_c9k0">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="-ybtedz"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="gfzlm5r"
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
                data-oid=".x_8h8p"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="bl9lg_o">
                    <div className="lg:flex items-center" data-oid="op2tu2-">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="ymdsd.o">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="xrfsvia"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="4i8ryfv">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="_-xoauk">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="d44wfu3"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="ngfwp2v"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="8fpgek5">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="k3f09-a">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="evaeot2"
                            >
                                <div className="flex items-center mb-4" data-oid="l5yvnhg">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="7h:rsft"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="4p1azkq"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid=".lm3r_b"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="bu1256-">
                                    <div className="font-medium" data-oid="d12rkmv">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="9g:chbd"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="8zm38ga">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="mksknj7"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="w2klmdo"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ytau5do">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="pie8kc3"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="o:u0he:"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="-du4y_w">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="x3r4zyp"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="8-m7.t."
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="0p8av:.">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="wplfg67"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="3tylnp-"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="cy73ioq">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="yea--ig"
                                >
                                    <div className="text-sm text-blue-700" data-oid="1rpdujp">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="2m_-y7s"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="w5-qh5b"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="ac567ks">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":_f1bh5">
                    <div className="text-center mb-16" data-oid="igbzaj6">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="4yawq2v">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="eaaahwb">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="i51_qek">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="zlhluau"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="bmp786:"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="n_nz1gn"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="-r67n7t"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="0.cuw3o">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="xtc4156">
                                <li className="flex items-start" data-oid="tkfxbu6">
                                    <span className="text-blue-500 mr-2" data-oid="ya_yxhk">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="cysk31w">
                                    <span className="text-blue-500 mr-2" data-oid="b_xz4dx">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="j2fwv-c">
                                    <span className="text-blue-500 mr-2" data-oid="j8hpbi2">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="-mn1ihd"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="4iqbp4_"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="kr7h_xq"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="-1m7843"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid=":7po7a7">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="4.fnpor">
                                <li className="flex items-start" data-oid="7y-vbfb">
                                    <span className="text-blue-500 mr-2" data-oid="hkw9scn">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="9als9k_">
                                    <span className="text-blue-500 mr-2" data-oid="zuzu.uu">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="7s:f:5w">
                                    <span className="text-blue-500 mr-2" data-oid="dgqmcc1">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="5u.6_px"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="0.o3hcs"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="cm5gftd"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid=".51nb-s"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="0g83hzw">
                                Grading System
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="ag_n:2a">
                                <li className="flex items-start" data-oid="ohfcaj0">
                                    <span className="text-blue-500 mr-2" data-oid="_9q1hjr">
                                        •
                                    </span>
                                    MOET-compliant score calculation
                                </li>
                                <li className="flex items-start" data-oid="m3a2ypl">
                                    <span className="text-blue-500 mr-2" data-oid="b_k5wes">
                                        •
                                    </span>
                                    Digital gradebook with error-checking
                                </li>
                                <li className="flex items-start" data-oid="dqlvk5:">
                                    <span className="text-blue-500 mr-2" data-oid="bs0o84m">
                                        •
                                    </span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="zl6_q.0"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="9t3jpo1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="6e_d7ov"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="blw-:6m"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="mcoyw2j">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="h_-9oz5">
                                <li className="flex items-start" data-oid="h6zus84">
                                    <span className="text-blue-500 mr-2" data-oid="z6xszel">
                                        •
                                    </span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start" data-oid="w4ohcnn">
                                    <span className="text-blue-500 mr-2" data-oid="1s4akhe">
                                        •
                                    </span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start" data-oid="8bugez:">
                                    <span className="text-blue-500 mr-2" data-oid="4noxqg9">
                                        •
                                    </span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="okk43ab"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="cudkajd"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="-18a1x5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="ldcl:e9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="6oj6y8g">
                                MOET Reporting
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="th8zgce">
                                <li className="flex items-start" data-oid="dsa2xue">
                                    <span className="text-blue-500 mr-2" data-oid="3bnvz55">
                                        •
                                    </span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start" data-oid="mbpcwj4">
                                    <span className="text-blue-500 mr-2" data-oid="69putz8">
                                        •
                                    </span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start" data-oid="n8ijrw6">
                                    <span className="text-blue-500 mr-2" data-oid="yv-17ox">
                                        •
                                    </span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="ocz4o:j"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="9k2.mgf"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="v.04-0m"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="u.43yo1"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="big9v-b">
                                AI Modules
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="on5fom-">
                                <li className="flex items-start" data-oid="l9pw:ug">
                                    <span className="text-blue-500 mr-2" data-oid="8qpvug:">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="1tk8df5">
                                    <span className="text-blue-500 mr-2" data-oid=":hv22p_">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="ve7nlhf">
                                    <span className="text-blue-500 mr-2" data-oid="8tawkbk">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="7j8:e:2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s7vqdb:">
                    <div className="text-center mb-16" data-oid="7mv1u:g">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="kuzgu98">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="4mp5fpd">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="_25vl1w"
                    >
                        <div className="px-6 py-8" data-oid="7iocnl-">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="2:r-jsl">
                                <div data-oid="yj4ob1n">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="l1gvln:"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="3cor40m">
                                        <div className="flex items-start" data-oid="_ujbpqf">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="np3b7-_"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="8roci-8"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="sp.l1eb"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="_g-i7xe">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ec9f1v1"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="1_h06cq">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="vvydz_p">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="mpfxrat"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="v02ktiz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="pym3xg2"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="6ots5at">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="8a0i:m7"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="xxph7c:">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="206y-jz">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="1:msko4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="wxo4l0a"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="lfip1ud"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="ud1.4.j">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="a0unwy0"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="2q5lghg">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid=":6t.qck">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="e5no6xk"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="6f3ol7c"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="tlkha2r"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="naua:yy">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="eucv83f"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="xidq4dh">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid=":7-evp4">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="9roe71c"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="04_mfuv">
                                        <div className="flex items-start" data-oid="lxp752b">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="9k86rl7"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="xc-oamn"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="0f41kfu"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="7cjdsfz">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="vbjgj4m"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="85mxn2p">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="r1jh0oh">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="n9b_ko-"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="kx3duel"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="2sd.2k4"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="yogljaq">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="tgcn5im"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="iwtb6v:">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="pn5ax05">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="t.voicc"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="knh8:a5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="tm3ct5y"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="cbzinc_">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="-nntowo"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="y89e_hl">
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
            <section id="security" className="py-16 bg-white" data-oid="9wjfw0g">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="r_kaf5-">
                    <div className="text-center mb-16" data-oid="k09-z_l">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="pezm7tn">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="n6o5.sr">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="ff87xhr">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="fbzh2.p"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="3z01j0j"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="_kk7opl"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="wh-dy15"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="kz72usl">
                                <li className="flex items-start" data-oid="gt:uupk">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="xg:11ef"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="-xvf8dh"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid="cje8me.">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="87dz-m7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="zuivb.p"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="xcrglxp">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ofb4pqy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="hj-vg-l"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="twimzi_">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="t84zu2o"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="4nrxlci"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="81jlw08"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="vd8dfy6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="2guu.td"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="_rk.ldk"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="djsv8iw">
                                <li className="flex items-start" data-oid="kq8.-e8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="1oky8-t"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid=":pwv6d1"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="pcesoq7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-ay_3ze"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="q0nlh25"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="ty_kawe">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="27rjo8k"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="_k:5yn5"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="9ynyret">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="n10-4s0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="cl.-qef"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="onx-p_5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ibuqvs-">
                    <div className="lg:flex items-center justify-between" data-oid="1u7mtih">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="p0x6jbf">
                            <h2 className="text-3xl font-bold mb-4" data-oid="u258br5">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="cjo:f1u">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid=":-356g:">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="c8g1b5a"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="5mwds6r"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="7nngmkr">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="x1itd8h">
                                <h3 className="text-xl font-semibold mb-4" data-oid="oh6_dh_">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="_yjir16">
                                    <li className="flex items-start" data-oid="zsee3ys">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".swagh:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="iijkjei"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="8t2ta8e">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5cklv1t"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ya6-ri6"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="ib9ld_.">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="r4qi5s3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ftz:rsy"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="4n-7v27">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="qtgfidg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ev1p86z"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="st6qi8-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="59m1lgx">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="lrervkg">
                        <div data-oid="ev921as">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="56a:y5i">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="16_3yr7">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="y.d_wh3">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="o8z-_d:"
                                >
                                    <span className="sr-only" data-oid="mlnx107">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="hu939_v"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="vwkszg8"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="_18q35w"
                                >
                                    <span className="sr-only" data-oid=".muzy19">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="y993x7o"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="f2vae_m"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="3.0jmhq">
                            <h3 className="text-white font-medium mb-4" data-oid="6qsxi0l">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="y_027-0">
                                <li data-oid="ow00i35">
                                    <a href="#" className="hover:text-white" data-oid="9s-z-0u">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="-xyq2jr">
                                    <a href="#" className="hover:text-white" data-oid="_jyyy73">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="u6v.3q1">
                                    <a href="#" className="hover:text-white" data-oid="_:.:i3i">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="s2deixa">
                                    <a href="#" className="hover:text-white" data-oid="r_d2ui0">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="ww3wxjz">
                                    <a href="#" className="hover:text-white" data-oid="nl.ryg_">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid=".fuq:ti">
                            <h3 className="text-white font-medium mb-4" data-oid="ikag-9i">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="fl5y8ay">
                                <li data-oid=".9eumwy">
                                    <a href="#" className="hover:text-white" data-oid="eo7v4xq">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="e9m_yfm">
                                    <a href="#" className="hover:text-white" data-oid="82mi8x1">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="wlqrlp8">
                                    <a href="#" className="hover:text-white" data-oid="qqmjy_k">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="2wlh6fz">
                                    <a href="#" className="hover:text-white" data-oid="au-eq::">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="53yb5-x">
                                    <a href="#" className="hover:text-white" data-oid="w2w8odx">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="cd7bm99">
                            <h3 className="text-white font-medium mb-4" data-oid=".fz6p6m">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="3zjy-ug">
                                <li className="flex items-start" data-oid="oxr3smm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="375t8cr"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="ajgtnyu"
                                        />
                                    </svg>
                                    <span data-oid="30scw.n">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="kwejf-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="1_89_ci"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="_oy9..0"
                                        />
                                    </svg>
                                    <span data-oid="ytfd.vt">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="0lkqfkl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="0pyub:f"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid=":okgrgz"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="keo:yz."
                                        />
                                    </svg>
                                    <span data-oid="2j6amx5">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="q-dfv9f"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="eal.v37">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="343_lg0">
                            <a href="#" className="hover:text-white" data-oid="xgl8_nk">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="qrq-2.4">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="udo5jpv">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
