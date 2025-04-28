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
            data-oid="7v5r.g_"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="5qhn8qp">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="h:5_ezi">
                    <div className="flex justify-between items-center py-4" data-oid="qn4452_">
                        <div className="flex items-center" data-oid="c0e53_b">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="2ex0p02">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="9w6jjg8">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="lhisn5y">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="83fvoq:"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid=".uavoxk"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="hk:hgq1"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="gbl-mgj"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="wcx2.p_">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="ay33jol"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="0irrxbf"
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
                data-oid="rvt_r68"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pd_0q2e">
                    <div className="lg:flex items-center" data-oid="_ylpasx">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="ja14y-:">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="h2e4xuq"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="s53gdbz">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="l-dh:lt">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid=":nzifdv"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="w3y9f40"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="r-hhmuu">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="a.mk.2y">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="t7z1iw_"
                            >
                                <div className="flex items-center mb-4" data-oid="kb3wwx.">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="v:3mhln"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="v57v9.k"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="u25yle7"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="8j46jdm">
                                    <div className="font-medium" data-oid="ybouo:m">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="9kt0ws7"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid=":q1khpe">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid=".95kvt1"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="ser9vq8"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="y7vfv8w">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="uj7s31u"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="lby2hb7"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="zs5pxs7">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="4.:1vz9"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="kfh1erq"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="32fjh7j">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="7n27yco"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="ww:1q3i"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="d.s5cf5">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid=":-qyf.o"
                                >
                                    <div className="text-sm text-blue-700" data-oid="ezuw4_6">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="va:yb36"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="mtnfd_1"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="d5ubr52">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".trz2p9">
                    <div className="text-center mb-16" data-oid="6xe9jt7">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="zjr13da">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid=".n1v:c8">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="--t182r">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=":ejbgw7"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ut3gmzw"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="iro6::q"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="9yvcyww"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="ue8ipkw">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="h_7w-0y">
                                <li className="flex items-start" data-oid="oo:.j7-">
                                    <span className="text-blue-500 mr-2" data-oid="-hhobzy">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="gcw6cnd">
                                    <span className="text-blue-500 mr-2" data-oid="w7s_:6u">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="nl49v0n">
                                    <span className="text-blue-500 mr-2" data-oid="lahj.un">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="nift807"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="n31of_i"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="iicvywj"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="ndkgrws"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="l1h6alo">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="hs4xl.p">
                                <li className="flex items-start" data-oid="6s-ngdy">
                                    <span className="text-blue-500 mr-2" data-oid="mb54.px">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="i0_da9l">
                                    <span className="text-blue-500 mr-2" data-oid="jktr1o8">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="jrr0qgf">
                                    <span className="text-blue-500 mr-2" data-oid="6nzk:9s">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="7i0cvrc"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="fhsh8t2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="u7peva5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="0fwdwm7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="rk50_36">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="kb3u6bp">
                                <li className="flex items-start" data-oid="0:24vw4">
                                    <span className="text-blue-500 mr-2" data-oid="k7m2wy_">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="fak8x8c">
                                    <span className="text-blue-500 mr-2" data-oid="5snw7f4">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="xb_.02y">
                                    <span className="text-blue-500 mr-2" data-oid="25vi:1w">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="yda.yuc"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ypeke.i"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="eabd-3v"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid=".e4x6wv"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="xw1xm2o">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="3fw64ff">
                                <li className="flex items-start" data-oid="_hd:ak1">
                                    <span className="text-blue-500 mr-2" data-oid="kn6nz2r">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="7t_uq.r">
                                    <span className="text-blue-500 mr-2" data-oid="j3m_sr1">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="4cv4gqo">
                                    <span className="text-blue-500 mr-2" data-oid="nmoa3_u">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="l6iciih"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="7:9uvc0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="9dvnzgk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid=":91xf8q"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid=".0i-rkv">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="3tkots_">
                                <li className="flex items-start" data-oid="22s1scg">
                                    <span className="text-blue-500 mr-2" data-oid="n16kz_r">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="ke7_oxc">
                                    <span className="text-blue-500 mr-2" data-oid="aa74a.i">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="4unymbv">
                                    <span className="text-blue-500 mr-2" data-oid="y67wil:">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="xluip84"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="7gqat.h"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="mrpr1n8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid=".59_b:o"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="vr21a6s">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="muoul4u">
                                <li className="flex items-start" data-oid="6cg_3vv">
                                    <span className="text-blue-500 mr-2" data-oid="ix5:lnh">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="7ze2g1x">
                                    <span className="text-blue-500 mr-2" data-oid="xe78ydn">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="ry1r72j">
                                    <span className="text-blue-500 mr-2" data-oid="l0u0o3i">
                                        •
                                    </span>
                                    Dự đoán nguy cơ bỏ học
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section id="technical" className="py-16 bg-gray-50" data-oid="7lbjrmx">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nszv9l-">
                    <div className="text-center mb-16" data-oid="qzka-66">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="7c-de:0">
                            Thông số kỹ thuật
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="d2yo.1m">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="6zu93ix"
                    >
                        <div className="px-6 py-8" data-oid="z91_lw_">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="45j3oj3">
                                <div data-oid="o_z-xob">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="swyhup8"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="d26d:c3">
                                        <div className="flex items-start" data-oid="0t2i7-9">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="vfphe.z"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="-mc2ch6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="v8nyymq"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="9yh.6zg">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="l17oh8o"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="4i2nx0y">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="yb53bhr">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="rfwg9tq"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="_nmhar8"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="90ss_.f"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="0zqv:tc">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="zco4yaf"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="h74xm-0">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="gzx_j8i">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="15b:002"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="j1su-9c"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="4w1-q-b"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="zboxiwk">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ltj9_vc"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="yt092au">
                                                    Mongodb
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="h:jrzsa">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="kv7j870"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="_knsufx"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="x4lmicv"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="o1dyjis">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="uq_yx9k"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="dfuc0b.">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="nzv05ch">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="ndk4w6j"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="0f6ti8u">
                                        <div className="flex items-start" data-oid=".1-5i-:">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="karlsz2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="yy6q5jl"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="zxiraqm"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="v.t2w:_">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="n4b1luq"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid=".4r6z0d">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="9-4h29e">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="2vk4m-w"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bkznjmw"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="xhg:h2i"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="1vzo9d.">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="iacl1nw"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="jso9pho">
                                                    Vietnam sms
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid=":7ztk9r">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="n:d_cgr"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="7-89h31"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="24movjf"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="lzui9-8">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="_1zo9q4"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="6j:xc7i">
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

            {/* Deployment & CTA */}

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="nwxebzy">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3.w9urh">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="qult56g">
                        <div data-oid="9gytt58">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="clp4vi.">
                                smartEdu
                            </div>
                            <p className="mb-4" data-oid="ptyu1qq">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="2yxqhva">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="qiido0a"
                                >
                                    <span className="sr-only" data-oid="l2_fh2v">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="02h-pnm"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="_eiyspz"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="dbx:wy8"
                                >
                                    <span className="sr-only" data-oid="l8g4vcu">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="v49q0ne"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="3pilkcp"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="1.2qxs4">
                            <h3 className="text-white font-medium mb-4" data-oid="fvid4yu">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="4.1u_oy">
                                <li data-oid="d5jahmf">
                                    <a href="#" className="hover:text-white" data-oid="b64ygqf">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="nt5ewzc">
                                    <a href="#" className="hover:text-white" data-oid=".h.6gm1">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="l-6v1-y">
                                    <a href="#" className="hover:text-white" data-oid="ib0rop7">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="jbj4qh7">
                                    <a href="#" className="hover:text-white" data-oid="fi.wy9:">
                                        Giao tiếp đa kênh
                                    </a>
                                </li>
                                <li data-oid="tuehqot">
                                    <a href="#" className="hover:text-white" data-oid="-uifg80">
                                        Báo cáo kết quả
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid=".2cdeaf">
                            <h3 className="text-white font-medium mb-4" data-oid="0r.cia_">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="gp6zx59">
                                <li data-oid="6lr4f40">
                                    <a href="#" className="hover:text-white" data-oid="ih6_bq9">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="g5kudku">
                                    <a href="#" className="hover:text-white" data-oid="t82vepw">
                                        API Reference
                                    </a>
                                </li>

                                <li data-oid="i1is642">
                                    <a href="#" className="hover:text-white" data-oid="o8gz2sp">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="_0-j-t7">
                            <h3 className="text-white font-medium mb-4" data-oid="jl2at5h">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="2fr_v5u">
                                <li className="flex items-start" data-oid="75v-g5h">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="sgpnp6:"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="61omnva"
                                        />
                                    </svg>
                                    <span data-oid="ep0ro7a">contact@smartedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="fffaswy">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ywrp9:b"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="p8ckc2f"
                                        />
                                    </svg>
                                    <span data-oid="fol4t6c">+84 962 299 745</span>
                                </li>
                                <li className="flex items-start" data-oid="jzou.23">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="900hiku"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="vz.bf:x"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="4p91o_t"
                                        />
                                    </svg>
                                    <span data-oid="i2v_am9">Phu Hoa, Gia Lai, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="gzhci5z"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="ldnqq2w">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="xojr9jc">
                            <a href="#" className="hover:text-white" data-oid=".p0e2_:">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="tctp8l6">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="rdj9cud">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
