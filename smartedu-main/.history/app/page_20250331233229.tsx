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
            data-oid="e-2pdv3"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="ocvjdla">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fb:m1kq">
                    <div className="flex justify-between items-center py-4" data-oid="j9zbxbz">
                        <div className="flex items-center" data-oid="zn0ay8-">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="_modpyu">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="x275wnz">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="gs-ljcm">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="8g0kb_k"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="hqug6n:"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="ix34:tl"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="whkbpcz"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="tp-18s5">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="63uougk"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="iz6556o"
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
                data-oid="xqsu0ir"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s4_v851">
                    <div className="lg:flex items-center" data-oid=":hlinpf">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="h2tw0g3">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="yqbkqes"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="p.fqqzb">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="2l7317g">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="giodfm0"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="iizvaeq"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="u473nek">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="hx5cr3w">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="66531c3"
                            >
                                <div className="flex items-center mb-4" data-oid="2zt7h.n">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="h.2wgaz"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="nakug:6"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="zyuc:_k"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="jn7a.4p">
                                    <div className="font-medium" data-oid="k1vgo65">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="ysw2nx5"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="155ee1j">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="s6cf-sn"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="oq7hpun"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="fc5.lzt">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="9dguzb0"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="wjse:-5"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="eeegmtk">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="9f2ukfc"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="4lcwhct"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="i2lqv23">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="0cqz_26"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="k75th2w"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="y3iv2vp">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="vy_p.s9"
                                >
                                    <div className="text-sm text-blue-700" data-oid="ea-838t">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="_6jg_pb"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="f3ly6mg"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="we33np4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="z-axh4y">
                    <div className="text-center mb-16" data-oid="ulh3tpw">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="z3v-749">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="gb-ie83">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid=".hk9rk2">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="nrhrzmp"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="suv5pbf"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="1ommpk."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="h8mkc2t"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="n482z9q">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="-sv70cd">
                                <li className="flex items-start" data-oid="zngx387">
                                    <span className="text-blue-500 mr-2" data-oid="76wjt9n">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="vwm:uo:">
                                    <span className="text-blue-500 mr-2" data-oid="wa.e491">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="6-5y.2l">
                                    <span className="text-blue-500 mr-2" data-oid="zzo7.b8">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="wt4l--b"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="mdj7:9e"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="__-tx2z"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="am2:y1y"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="ziifxbe">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="9x:ahq4">
                                <li className="flex items-start" data-oid="c9d_y.q">
                                    <span className="text-blue-500 mr-2" data-oid=".yy.oi3">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="qwhfi9k">
                                    <span className="text-blue-500 mr-2" data-oid="a-9if2s">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="li.zhwf">
                                    <span className="text-blue-500 mr-2" data-oid="u8v4mxr">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="u65b-ox"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="006_hsv"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="t-1:_ov"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="50:zgjx"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="bajdw6o">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="ubdmoft">
                                <li className="flex items-start" data-oid="xyt.id5">
                                    <span className="text-blue-500 mr-2" data-oid="bv:l_l.">
                                        •
                                    </span>
                                    MOET-compliant score calculation
                                </li>
                                <li className="flex items-start" data-oid="4f.ad_c">
                                    <span className="text-blue-500 mr-2" data-oid="ixza7tp">
                                        •
                                    </span>
                                    Digital gradebook with error-checking
                                </li>
                                <li className="flex items-start" data-oid="v_nv69r">
                                    <span className="text-blue-500 mr-2" data-oid="cy6:snf">
                                        •
                                    </span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="ux84..z"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="lxywqhx"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="09ls03:"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="xoi7our"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="n8.1ph8">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="sij4-ib">
                                <li className="flex items-start" data-oid="i926om2">
                                    <span className="text-blue-500 mr-2" data-oid="pof4o-j">
                                        •
                                    </span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start" data-oid="s8z_gl3">
                                    <span className="text-blue-500 mr-2" data-oid="lxijwtj">
                                        •
                                    </span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start" data-oid="q.kx3qu">
                                    <span className="text-blue-500 mr-2" data-oid="3yfzxsz">
                                        •
                                    </span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="cq85h7o"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="4byfwzq"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="58ndfms"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="ud.t1di"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="kwxnjh0">
                                MOET Reporting
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="m2ny-85">
                                <li className="flex items-start" data-oid="eq:15_a">
                                    <span className="text-blue-500 mr-2" data-oid="i60rwv.">
                                        •
                                    </span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start" data-oid="6l64v.n">
                                    <span className="text-blue-500 mr-2" data-oid="s48j6:4">
                                        •
                                    </span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start" data-oid="0cbdw4.">
                                    <span className="text-blue-500 mr-2" data-oid="92o8:g.">
                                        •
                                    </span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="r8_v.o2"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid=".bn4vlm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="2orke5u"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="ksl7qa6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="pzmg.-:">
                                AI Modules
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="4b5tgzo">
                                <li className="flex items-start" data-oid="w9:8jrq">
                                    <span className="text-blue-500 mr-2" data-oid="o_49a3t">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="65zp0n5">
                                    <span className="text-blue-500 mr-2" data-oid="0rs:ru8">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="84y8e1y">
                                    <span className="text-blue-500 mr-2" data-oid=":jct-71">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="3sd59h2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fp6trf8">
                    <div className="text-center mb-16" data-oid="vsq_c:i">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="xc_1v65">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="zgbegef">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="o_w-0n8"
                    >
                        <div className="px-6 py-8" data-oid="hgnxbi7">
                            <div className="grid md:grid-cols-2 gap-8" data-oid=".q61ib:">
                                <div data-oid="577twlq">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="0dwrw5t"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="yw5zujd">
                                        <div className="flex items-start" data-oid="x8olfpa">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="t3:xt7a"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="c7xdpaz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="3v-0o0l"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="89wdhsw">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="_n_okae"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="gc2lvgx">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="5f2cn.g">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="6x-4d7l"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="upx970r"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="sp3y.:h"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="nq8ow.n">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="9c-u:8d"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="56n6nlf">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="9j4z:uf">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=":_2ppv-"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="l50u84o"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="-c7wafr"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="50o9ufd">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="drskmp7"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="rs29fjd">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="aahzmcf">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="uwe627k"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ddthjfp"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="t81qx_3"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="_ckx-_0">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="z__wg5v"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="zgy5yud">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="exvjqwj">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="5--s41e"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid=".vuf.nk">
                                        <div className="flex items-start" data-oid="zr:kfiu">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="b-d-yxw"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="du:_7kb"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="9qkqel7"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="9l8cc6:">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="4fq4.lt"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="50kc.78">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="i.cni97">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="4zw9khb"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="gqh9oq6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="548mmme"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="6dxsqp9">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ap.z_m6"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="3ene:gn">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="i4z34o4">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="oexe26s"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="_r-a6cb"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="jw3b02m"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="43t7mu8">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="cina28:"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="w:r2fgr">
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
            <section id="security" className="py-16 bg-white" data-oid="ayvg0q:">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ldg4.7o">
                    <div className="text-center mb-16" data-oid="snop.9j">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="7n9xw3d">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="jtrp9c2">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid=".h::yg_">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="27yjt:l"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="20ybv7m"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="6ygsfan"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="rm5xm5d"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="b3_wa7e">
                                <li className="flex items-start" data-oid="8rkva3l">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="qkuqnop"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="l:sgsrw"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid="w_689sw">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="_k--fr4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="jr0b.74"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="mrmjcgw">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="m8nsnwe"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="tp4tn.3"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="201ovc0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="3x3ox7z"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="0vz_2t8"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="c733nc-"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="s2q7xw4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="35beln-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="zjqiy9b"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="4-mwepw">
                                <li className="flex items-start" data-oid="733hx-h">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="a_56tz9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="f_o7.gq"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="_7fxptm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="eqx3dc8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="49x8yk0"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="f9vxxek">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="g:knykx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="6f39pjd"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="bh3f586">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ue8t581"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="f004l9s"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="-_qm:6v">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="0xu3biw">
                    <div className="lg:flex items-center justify-between" data-oid="92ex3cw">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="7a4pda3">
                            <h2 className="text-3xl font-bold mb-4" data-oid="ic.-5cn">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="yca2.qw">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="wahm-wz">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="844w35t"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="vhqsn1g"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="ash0fga">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="6xxv81u">
                                <h3 className="text-xl font-semibold mb-4" data-oid="72xxwk.">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="qmugm9u">
                                    <li className="flex items-start" data-oid="lp0va55">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="g56wdyn"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=".s76:or"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="_pwl3no">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gb8c2jp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="hls1ecf"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="jxmpkjz">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8q9phg5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="-rv7c7h"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="n5n3:1:">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="h0pyp10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="m2ri-1r"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="uyj4g-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8wikmjg">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="mbua_f0">
                        <div data-oid="ye1b6_6">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="amdew6z">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="s4-d7bu">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="fh4w7pq">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="8wvft91"
                                >
                                    <span className="sr-only" data-oid="thed_mt">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="mqcuy5n"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="tjprq-."
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="ml-ow-i"
                                >
                                    <span className="sr-only" data-oid="jdzuspk">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="9ef_nrz"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="01sc8cj"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="241a3lh">
                            <h3 className="text-white font-medium mb-4" data-oid="5v4b:v0">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="vwkb37s">
                                <li data-oid="lu_waxn">
                                    <a href="#" className="hover:text-white" data-oid="6ek-k:k">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="4c2c_wi">
                                    <a href="#" className="hover:text-white" data-oid="8y.m-8c">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid=".geh9z2">
                                    <a href="#" className="hover:text-white" data-oid="7-qdva3">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="js9:-:5">
                                    <a href="#" className="hover:text-white" data-oid="582njpx">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="p5pyno2">
                                    <a href="#" className="hover:text-white" data-oid="i_0abet">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="ivjmvna">
                            <h3 className="text-white font-medium mb-4" data-oid="8:_t9kt">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid=":oll5xr">
                                <li data-oid="6f2rphc">
                                    <a href="#" className="hover:text-white" data-oid="z-ddm27">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="hb6_wul">
                                    <a href="#" className="hover:text-white" data-oid="7u0n1ff">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="iykysf2">
                                    <a href="#" className="hover:text-white" data-oid="bi732c3">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="t9ma2qx">
                                    <a href="#" className="hover:text-white" data-oid="6m5-lgs">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="j6kg:kl">
                                    <a href="#" className="hover:text-white" data-oid="-5cs4_o">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="6-wp1-a">
                            <h3 className="text-white font-medium mb-4" data-oid="9hxsw4n">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="i_0yckf">
                                <li className="flex items-start" data-oid="ujf846r">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="a6kw0b."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="phaa5we"
                                        />
                                    </svg>
                                    <span data-oid="rmf9v2-">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="sxx6m3s">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="77-wpcd"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="wtzue8r"
                                        />
                                    </svg>
                                    <span data-oid="4kr:w5g">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="xl4wabg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="5_thnk3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="q-qpewi"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="-uae181"
                                        />
                                    </svg>
                                    <span data-oid="19ketlc">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="d-ubgku"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="90hmhja">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="10v1xxz">
                            <a href="#" className="hover:text-white" data-oid="-0g.e_a">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="kfqniem">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="o.b7az.">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
