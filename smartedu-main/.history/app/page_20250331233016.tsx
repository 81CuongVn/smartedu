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
            data-oid="nx88ktx"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="bew6mno">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8ha_jgk">
                    <div className="flex justify-between items-center py-4" data-oid="nc1_t-s">
                        <div className="flex items-center" data-oid="t6:r-3w">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="ss5ry5n">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="dr-pq:g">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="yz8m804">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="dv_z1sx"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="p07wq4z"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="yjomjt1"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid=".x151vf"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="z26p4cc">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="2-1g3ck"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="n4hzdsd"
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
                data-oid="8cgo-z1"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pxr3c6a">
                    <div className="lg:flex items-center" data-oid=":8z:r08">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="lo.5y_d">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="rorr7m0"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="4es17vt">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="b:j.v6_">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="iw7ur0d"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="nbhlssb"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="sp742sj">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid=":qjk96v">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="5egpzcq"
                            >
                                <div className="flex items-center mb-4" data-oid="by6eagv">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="y19hk79"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="ckp4wdj"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="nluvgwf"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="chrt92o">
                                    <div className="font-medium" data-oid="1skiu5t">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid=".ah_l70"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="n6n:1aw">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="ayqoe4x"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="5ua6li3"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="up.eley">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="08tap-7"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="mn.de47"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="5z:ycs0">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="4it7fwk"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="1ewcfqx"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="absnm1a">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="bdbyu19"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid=".0nq6-3"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="knak0c1">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="o0thejr"
                                >
                                    <div className="text-sm text-blue-700" data-oid="c1t_5xe">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="pqu7g:_"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="bydi2u9"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="0lbwne2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="o2zk7w6">
                    <div className="text-center mb-16" data-oid="ablfsfm">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="i:9iffy">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="xtf_s-t">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="ribizwr">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="scj1l-o"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="xivdt_h"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8nnw64t"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="f1u2dhi"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="0yua65y">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="6mbb4-h">
                                <li className="flex items-start" data-oid="ny1803.">
                                    <span className="text-blue-500 mr-2" data-oid="w_g78bz">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="2bu8fjc">
                                    <span className="text-blue-500 mr-2" data-oid="da70bq9">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="6uz0w59">
                                    <span className="text-blue-500 mr-2" data-oid="cnyyw5:">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="fzsr43t"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="q2v34_q"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="b3z_cie"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="_is.vqt"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="annt_4m">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="332z42m">
                                <li className="flex items-start" data-oid="r3e7wfh">
                                    <span className="text-blue-500 mr-2" data-oid="3x:skyf">
                                        •
                                    </span>
                                    QR code classroom check-ins
                                </li>
                                <li className="flex items-start" data-oid="5qsg1y:">
                                    <span className="text-blue-500 mr-2" data-oid="cf03-yj">
                                        •
                                    </span>
                                    Facial recognition for exam supervision
                                </li>
                                <li className="flex items-start" data-oid="epd4wfh">
                                    <span className="text-blue-500 mr-2" data-oid="cvm-kzk">
                                        •
                                    </span>
                                    Absence pattern detection with SMS alerts
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="9s_zcyn"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="4f3mpib"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="k.7b1nf"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="qx3w:l0"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="9_0da._">
                                Grading System
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="2:f91:m">
                                <li className="flex items-start" data-oid="m2qfl-y">
                                    <span className="text-blue-500 mr-2" data-oid="w:ao3zg">
                                        •
                                    </span>
                                    MOET-compliant score calculation
                                </li>
                                <li className="flex items-start" data-oid="g61kk96">
                                    <span className="text-blue-500 mr-2" data-oid="qfzr.iu">
                                        •
                                    </span>
                                    Digital gradebook with error-checking
                                </li>
                                <li className="flex items-start" data-oid=":tq7z2f">
                                    <span className="text-blue-500 mr-2" data-oid="2znuywq">
                                        •
                                    </span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="hazkm97"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="v3::msd"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8fdp92."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="9z6wuh3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="fp2qtpk">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="j_5l2pt">
                                <li className="flex items-start" data-oid="5ixcsm:">
                                    <span className="text-blue-500 mr-2" data-oid="_o:2o.g">
                                        •
                                    </span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start" data-oid="ubcg3gn">
                                    <span className="text-blue-500 mr-2" data-oid="-1u_fvl">
                                        •
                                    </span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start" data-oid="i5dh9n-">
                                    <span className="text-blue-500 mr-2" data-oid="93zgfow">
                                        •
                                    </span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="hiwmw36"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="s3mof1-"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="vzy3f.f"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="yrhugob"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="r9b0l5s">
                                MOET Reporting
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="5ylkzv9">
                                <li className="flex items-start" data-oid="57e6zd4">
                                    <span className="text-blue-500 mr-2" data-oid="yyb_tvq">
                                        •
                                    </span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start" data-oid="jp_zpte">
                                    <span className="text-blue-500 mr-2" data-oid="6:zie85">
                                        •
                                    </span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start" data-oid="sipyons">
                                    <span className="text-blue-500 mr-2" data-oid=".86vhre">
                                        •
                                    </span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="v4x8.nz"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="j3:dlvq"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="_3gng-b"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="07b3ox4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="mhz8kep">
                                AI Modules
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="i4eocm-">
                                <li className="flex items-start" data-oid="8m2spey">
                                    <span className="text-blue-500 mr-2" data-oid="syp:tvt">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="tka-1bw">
                                    <span className="text-blue-500 mr-2" data-oid=".-fy9sp">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="qowbxa2">
                                    <span className="text-blue-500 mr-2" data-oid="hgcme3v">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="p_08stw">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pih3nzd">
                    <div className="text-center mb-16" data-oid="w5qflpp">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="tetuzud">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="aimb-4s">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="krjz3mb"
                    >
                        <div className="px-6 py-8" data-oid="w38v:hf">
                            <div className="grid md:grid-cols-2 gap-8" data-oid=":vjb158">
                                <div data-oid="vl9ad:n">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="83xazww"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="4.9xuzk">
                                        <div className="flex items-start" data-oid=".vrut:_">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="7_yjk8i"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=".19glga"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="qyxlp_s"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="rrz4pqq">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ohcduq-"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="cx0j:dc">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="7.xck0c">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=".g_m1_d"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="e::4tzo"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="7q5kwla"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="_m9.22w">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ov-9cdz"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="-baaj5q">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="t2k:2c8">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="_yvufs."
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="hrr7:tk"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="r4z9cl9"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="pyfx440">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="94_93wm"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid=".3q1uqb">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="h4pf1xt">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="w05sngx"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="jnfb9-s"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="egfn36:"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="s9obwv.">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="lubvk8q"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="t5w8a21">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="rz_97cu">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="8d6hcb3"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="rw548r-">
                                        <div className="flex items-start" data-oid="h1umu:s">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="72nyj67"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="4djcg6:"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="w4fvt:k"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="0i9lwlw">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="otxeojo"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="y2s5z2w">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="gs778_-">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="mo1af3q"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="swdio::"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="jtc9n05"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="4dkg:h9">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="s8eo74h"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="j571dd9">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="6hw8znv">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="_pm9q9r"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="l:o9z4h"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="7s:h6zq"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="u5:adma">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid=".v4go9w"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="ds9x6wr">
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
            <section id="security" className="py-16 bg-white" data-oid="9f-wmy_">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9x-dc0b">
                    <div className="text-center mb-16" data-oid="j.5435k">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="4ny2:9l">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="qlr84kp">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="lp3ayg1">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="q9c-i-p"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid=":lrpe_d"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8yaglgn"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="kdxhyaj"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="sluk.-:">
                                <li className="flex items-start" data-oid="az8yg-e">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="i:q5:dx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="way08ms"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid="lrc24e_">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="4xx2cfs"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="3ptmu8:"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="g33m::0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-8r3xzw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="me89k2_"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="dm6nk6t">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="b_lxe6p"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="gid820n"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="r:h76:v"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="hevjk2."
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="kg9rbgq"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="6b2skf4"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="q3ykv5v">
                                <li className="flex items-start" data-oid="uxv2t9_">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="mhzf35-"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="4ww0wm2"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="_v7gkpa">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="mfv8nt1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ghqigff"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="ab_pvt8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="nj5d.7l"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="d8mfm55"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="vvxelgu">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="tnyj5ei"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid=".jyognk"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="ku96:9s">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6j-evzp">
                    <div className="lg:flex items-center justify-between" data-oid="rqtr4ar">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="hnww_f_">
                            <h2 className="text-3xl font-bold mb-4" data-oid="4q_-fev">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="r2ay:lk">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="_zlygkv">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="pn5v75v"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="lng4.7g"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="_2om2_3">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="17-h7m4">
                                <h3 className="text-xl font-semibold mb-4" data-oid="59gvxuz">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="lff_8_-">
                                    <li className="flex items-start" data-oid="8z6pxxd">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1w_x2ce"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="2gs670i"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="hvrksa2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="6i.8x-0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="kgavr.i"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="c1a4ss.">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="kznxtzv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="jywid4-"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="91yw.me">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ppgh8xm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="nnevnxh"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="9aj29wd">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="wxb-jzm">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="xd6p3xg">
                        <div data-oid="2fxd6ag">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="s8fj2be">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="za-5hcb">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="vweb8cy">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="z_0ha.l"
                                >
                                    <span className="sr-only" data-oid="ebh9nae">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="gwft_gr"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="-y01pvr"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="v9.fdgn"
                                >
                                    <span className="sr-only" data-oid="8in0le8">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="e43x:o0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="trw25-l"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="xpt9:pg">
                            <h3 className="text-white font-medium mb-4" data-oid=":cza8ux">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="1pg4bi-">
                                <li data-oid="jfs9o8q">
                                    <a href="#" className="hover:text-white" data-oid="zt34zvq">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="iwe07nk">
                                    <a href="#" className="hover:text-white" data-oid="un.:ka:">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="be4px07">
                                    <a href="#" className="hover:text-white" data-oid="vggnl-c">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="vi_cvoj">
                                    <a href="#" className="hover:text-white" data-oid="dd4k-37">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="7d2z7_j">
                                    <a href="#" className="hover:text-white" data-oid="3vlxkek">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="gg012ml">
                            <h3 className="text-white font-medium mb-4" data-oid="_s7fh7-">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="m2jfo28">
                                <li data-oid="t::e5d6">
                                    <a href="#" className="hover:text-white" data-oid="6fzqcpo">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="6.f2z9p">
                                    <a href="#" className="hover:text-white" data-oid="2xxr7oj">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="min-xsn">
                                    <a href="#" className="hover:text-white" data-oid="6d4rkvb">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="erovjt4">
                                    <a href="#" className="hover:text-white" data-oid="nun39zt">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="77or9qz">
                                    <a href="#" className="hover:text-white" data-oid=":qtmm6m">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="l79i1mn">
                            <h3 className="text-white font-medium mb-4" data-oid="vh2uuwp">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="ixfv75a">
                                <li className="flex items-start" data-oid="7l.u4dv">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="it58vu_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="-valwpg"
                                        />
                                    </svg>
                                    <span data-oid="g_3e9__">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="0.rtl1g">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="oknthk9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="s61kgjo"
                                        />
                                    </svg>
                                    <span data-oid="9bbyak-">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="fv6xqa3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="z0q3es1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid=".9wrfm."
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="gsbd.06"
                                        />
                                    </svg>
                                    <span data-oid="4w1cir5">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="aucgc9r"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="iw4ryx.">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="k7x-:oz">
                            <a href="#" className="hover:text-white" data-oid=":r8_ohe">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid=".z_fz.u">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="h.ul1z.">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
