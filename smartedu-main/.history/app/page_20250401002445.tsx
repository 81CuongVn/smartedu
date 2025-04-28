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
            data-oid="tg7s8s9"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="g2h3o2m">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-rbqr7u">
                    <div className="flex justify-between items-center py-4" data-oid=":xnflel">
                        <div className="flex items-center" data-oid="t_bpkyl">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="rg-t7ah">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="moi7w:l">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid=".41b2w.">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="uln:f-6"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="-95uzjx"
                            >
                                Technical
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="2x5kvg9">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="uq_27kb"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="7wi4.t:"
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
                data-oid="6y_9thy"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="wl3chmc">
                    <div className="lg:flex items-center" data-oid="9z1.:ao">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="nlztsxq">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="ileo86m"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="wtydy-s">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="m45cb6t">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="o9s2gr8"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="_xw6z8m"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="cf8:2z8">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="o4mv:f1">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="hnqnuh6"
                            >
                                <div className="flex items-center mb-4" data-oid="d:_bdk8">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="puou49r"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="l8f0w0f"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="k1t4:r9"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="pkkg:m2">
                                    <div className="font-medium" data-oid="n.mukb8">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="s8xqu.c"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="8vj4ow1">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="gmje6or"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="ymqrtbk"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="tz5icsl">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="il7ws7k"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="cp8qulp"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="viv_un8">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="838kzty"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="sx4ycip"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ik4njv4">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="-wmw4tg"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="44z7dfj"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="g_zlrlv">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="-pjry_-"
                                >
                                    <div className="text-sm text-blue-700" data-oid="_q949e.">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="i0don2w"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="l:bkdc2"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="aijxwwg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="669q_jd">
                    <div className="text-center mb-16" data-oid="-xbjw_-">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="6dhpngf">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="yl8i91r">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="guy-n1s">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="l3keoqs"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="zpe:r8c"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="_4m.qv2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid=":i_oltj"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="e0xy:2s">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="tp5o_er">
                                <li className="flex items-start" data-oid="3j9.2zb">
                                    <span className="text-blue-500 mr-2" data-oid="ifxu.75">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="lxks522">
                                    <span className="text-blue-500 mr-2" data-oid="edb:sl6">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="3spdzd1">
                                    <span className="text-blue-500 mr-2" data-oid="4gjdpz8">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="xo5vie4"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="g3bui59"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="y-6sg08"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="k0vg.cu"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="rss90i.">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="74yp3-t">
                                <li className="flex items-start" data-oid="b_5e0-4">
                                    <span className="text-blue-500 mr-2" data-oid="eubtd6h">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid=":7294es">
                                    <span className="text-blue-500 mr-2" data-oid="-lwn762">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="-6scs_f">
                                    <span className="text-blue-500 mr-2" data-oid="40tq78.">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=".hcdspj"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="exgohzu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="u77ydi1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="gjh9mzy"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="jiwxr79">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="b3-4kd0">
                                <li className="flex items-start" data-oid="rua8qvg">
                                    <span className="text-blue-500 mr-2" data-oid="20ohqpq">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="z7xclmq">
                                    <span className="text-blue-500 mr-2" data-oid="5ot7sn9">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="u2yo9cm">
                                    <span className="text-blue-500 mr-2" data-oid="vgn4pb7">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="bn:5.hm"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="to:wv_9"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ifc2rmd"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="uct569b"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="-sl29ge">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="cp771n_">
                                <li className="flex items-start" data-oid="gdk0:je">
                                    <span className="text-blue-500 mr-2" data-oid="yvs7rad">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="zpxljak">
                                    <span className="text-blue-500 mr-2" data-oid="onjdpp_">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="7no39sy">
                                    <span className="text-blue-500 mr-2" data-oid="uo5ybp8">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="bqlgj55"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="rmcryzw"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="m5i3r6f"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="gxvwqcp"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="tn0sq49">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="2pptbg5">
                                <li className="flex items-start" data-oid="sx4hxcb">
                                    <span className="text-blue-500 mr-2" data-oid="2bpt2up">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="35z-r8f">
                                    <span className="text-blue-500 mr-2" data-oid="z1-ldi7">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="4r6fwqs">
                                    <span className="text-blue-500 mr-2" data-oid="4i29f74">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="8gj973i"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="r-.mym9"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="k1voqcp"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="4g9_-7h"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="ipjwk9u">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="h9-viko">
                                <li className="flex items-start" data-oid="-kv1ptg">
                                    <span className="text-blue-500 mr-2" data-oid="lezpwu9">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="-unt.gp">
                                    <span className="text-blue-500 mr-2" data-oid="_3ahm6.">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="rvlb5qp">
                                    <span className="text-blue-500 mr-2" data-oid="eb7o8ty">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="9dqgo81">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9pdurfs">
                    <div className="text-center mb-16" data-oid="phra8mk">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="pxqgko-">
                            Thông số kỹ thuật
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="nbdxs5:">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="of-j28k"
                    >
                        <div className="px-6 py-8" data-oid="4_u_t_a">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="afk95tu">
                                <div data-oid="pobpcwh">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="qf4ive3"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid=".0gio:h">
                                        <div className="flex items-start" data-oid="lcy81ih">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="u14_gjd"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="xy4d008"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="a2b4.h1"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="y.tq14c">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ec6sixo"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="c6gix_s">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="vqe_hvg">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="p95jl:d"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="4i5:b3b"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="gln90qk"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="bjhe7ic">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="hx9ilkt"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="4f3fv.z">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="kxuz0fb">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="so32.va"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="liq2z42"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="ngncyht"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="y8hc4_p">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="2vwo.so"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="dcipu7r">
                                                    Mongo Database
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="hfuhrct">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="yhuyf5m"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="q_d0zv5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="syxrmgr"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="000.cie">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="qhersep"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="prttoeo">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="t1iyd:f">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="d6f4jp0"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="zcm-pim">
                                        <div className="flex items-start" data-oid="oxu8pvr">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="039xidi"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=".x3-u9n"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="u_c.a7w"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="yy.wmhk">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="b-11k98"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="xnap6wr">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="evvbkdw">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="qmtz-4r"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="w8h0mwq"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="asj5fv-"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="tf9.pft">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="tm.jnwj"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="gu-498y">
                                                    Viettel SMS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="f8lroyx">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=":::cb4k"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="1alm076"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="7n1h5wz"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="87mlbb9">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="iwfrjch"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="9831snp">
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

            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="a8-cq5t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a2317a4">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="x9fh4km">
                        <div data-oid="0qs2qr_">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="to-x_k8">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="x2ab-xn">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="vkdxu_i">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="h96:tez"
                                >
                                    <span className="sr-only" data-oid="b4kbgwf">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="bwabu0q"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="89z73sb"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="zeiqw73"
                                >
                                    <span className="sr-only" data-oid="x-85dk0">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="g1qf3zt"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="9prxq73"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="6htjk2p">
                            <h3 className="text-white font-medium mb-4" data-oid="u23bbvo">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="t3we-1c">
                                <li data-oid="myeiy6x">
                                    <a href="#" className="hover:text-white" data-oid="d6:k6mo">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="z:mk2kx">
                                    <a href="#" className="hover:text-white" data-oid="4eko2v1">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="imadqc_">
                                    <a href="#" className="hover:text-white" data-oid="rvpop-8">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="g463jsm">
                                    <a href="#" className="hover:text-white" data-oid="9yf39_n">
                                        Giao tiếp  đa kênh
                                    </a>
                                </li>
                                <li data-oid="e55egr_">
                                    <a href="#" className="hover:text-white" data-oid="o-4tbc0">
                                        Báo cáo kết quả học tập
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="m88.f6j">
                            <h3 className="text-white font-medium mb-4" data-oid="vvad5uf">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="2m4azzh">
                                <li data-oid="tva94z8">
                                    <a href="#" className="hover:text-white" data-oid="x1..9zn">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="d-164nz">
                                    <a href="#" className="hover:text-white" data-oid="frf8i::">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="03h8lpl">
                                    <a href="#" className="hover:text-white" data-oid="wddz3v4">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="cw-znz5">
                                    <a href="#" className="hover:text-white" data-oid="qbmtjug">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="::hv4i8">
                                    <a href="#" className="hover:text-white" data-oid="x4vzg:4">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="0a5ag0l">
                            <h3 className="text-white font-medium mb-4" data-oid="uq4bx.s">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="6r89kwa">
                                <li className="flex items-start" data-oid="jann2d0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="3aopgs7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="olsw-tt"
                                        />
                                    </svg>
                                    <span data-oid="j-49so2">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="q36r_ck">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="dl_t4th"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="m8ow4st"
                                        />
                                    </svg>
                                    <span data-oid="7dxn3k7">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="7qdglf0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="y__ls7k"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="pf6af-i"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="_4qjp4m"
                                        />
                                    </svg>
                                    <span data-oid="qj8:mni">Phu Hoa Town, GiaLai, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="vlh8t4x"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="8gltwc7">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="1f0v7kh">
                            <a href="#" className="hover:text-white" data-oid="1qrs1o3">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="u79v7d9">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="g.5vzuf">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
