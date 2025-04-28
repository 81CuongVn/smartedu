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
            data-oid="wj7sld7"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="3y27v7p">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="f:k46-p">
                    <div className="flex justify-between items-center py-4" data-oid="t14oc7p">
                        <div className="flex items-center" data-oid="bi.vvi0">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="fqa_ucw">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="3f4:..6">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="xuk03n2">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="3ag6uii"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="nr-koa0"
                            >
                                Technical
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="f7fdei2">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="z1x62yg"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="3q_iiyt"
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
                data-oid="6ba5j69"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="y:7-ip2">
                    <div className="lg:flex items-center" data-oid="xtzi6t9">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="a0ijrhz">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="9ui_0.q"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="rbnbglh">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="bei0fa7">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="nkreb2s"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="jr6j.v-"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="ast1gmq">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="ra9ri81">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="w0a:09:"
                            >
                                <div className="flex items-center mb-4" data-oid="3q62.-7">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="8zprjpl"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="f975daa"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="g_2.-.q"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="p7.iudl">
                                    <div className="font-medium" data-oid="8bo_8_n">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="zj4sqix"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="_li0zlp">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="4kg9-ho"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="luchfk0"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="l.hx:.t">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="22hmjnq"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="bgsze5_"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="fggozme">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="tx4dxei"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="9inx5bh"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="n89bvsm">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="70nhrv2"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="qj-.1m:"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="xe._dwo">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="eum79nx"
                                >
                                    <div className="text-sm text-blue-700" data-oid="l9w_22u">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="pux40_5"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="bajj-1e"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="9k81djl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".2ddzpd">
                    <div className="text-center mb-16" data-oid="sdxom8j">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="-p-oifi">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="ij1tiha">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="r.vf4wz">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="e9.wba9"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="xesx3-p"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="3puwaw-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="hexgqun"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="d2h415a">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="2gg69dz">
                                <li className="flex items-start" data-oid="v2rg5zg">
                                    <span className="text-blue-500 mr-2" data-oid="i3f9dve">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="so6ho1r">
                                    <span className="text-blue-500 mr-2" data-oid="jzqbi:x">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="e59a1v9">
                                    <span className="text-blue-500 mr-2" data-oid="dkxh..:">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="1suva36"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="t5kv12m"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=".trumg5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="ki7e2lf"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="hv1y2im">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="x5rovzf">
                                <li className="flex items-start" data-oid="d7c0wyp">
                                    <span className="text-blue-500 mr-2" data-oid="qwc.icd">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="grf3tyr">
                                    <span className="text-blue-500 mr-2" data-oid="fifeqmn">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="qauro6w">
                                    <span className="text-blue-500 mr-2" data-oid="yn8eiwl">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=".sy22x_"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="plj-.jd"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="x39hlbd"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="1_bstgi"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="yaedi9w">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="z.:to.h">
                                <li className="flex items-start" data-oid="pdaqstz">
                                    <span className="text-blue-500 mr-2" data-oid="fe:n61g">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="2t81rr6">
                                    <span className="text-blue-500 mr-2" data-oid="57slbro">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="-9eamxq">
                                    <span className="text-blue-500 mr-2" data-oid="wm3ktl1">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="p6hr_m2"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="o.i91s:"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="wznvnr:"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="v6vw5q6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="xf-.iwl">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="3k4.yu0">
                                <li className="flex items-start" data-oid="a10af8r">
                                    <span className="text-blue-500 mr-2" data-oid="s-k0ik3">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="qxcb5bf">
                                    <span className="text-blue-500 mr-2" data-oid="8s4vaaw">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="g8prfbw">
                                    <span className="text-blue-500 mr-2" data-oid="tjdf0p.">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="th5m:ox"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="3m8a523"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="s1hb4v0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="p..dl2p"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="w2xi8es">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="p5c5hje">
                                <li className="flex items-start" data-oid="--cobra">
                                    <span className="text-blue-500 mr-2" data-oid=".s45ihw">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="aullefo">
                                    <span className="text-blue-500 mr-2" data-oid="on2yues">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="i6a:n9.">
                                    <span className="text-blue-500 mr-2" data-oid="6hh14jj">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="j3zv7kp"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="v1d89l0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="z61u00e"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="1n4p17f"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="zqb94yq">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="9p9kneu">
                                <li className="flex items-start" data-oid="mf7qy:l">
                                    <span className="text-blue-500 mr-2" data-oid="grvr6lx">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="1kdvvh1">
                                    <span className="text-blue-500 mr-2" data-oid=":hg4s8q">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="k4z-dkh">
                                    <span className="text-blue-500 mr-2" data-oid="odbb-ex">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="fk-rb9j">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="y4hi7-h">
                    <div className="text-center mb-16" data-oid="wi.j_5:">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="54nj9in">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="sqf6w7r">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="td4j_f6"
                    >
                        <div className="px-6 py-8" data-oid="6jr31:j">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="6.ry.38">
                                <div data-oid="tp86l5w">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="h3sfry_"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid=".643-fg">
                                        <div className="flex items-start" data-oid="qjrmj4p">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="0wfmc35"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="9l8-m.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="41q.boz"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="2k_o.js">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="poo-j:t"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="c-3m-0t">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="-js6jga">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="kslhfnc"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="qrx:.1b"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="154p76b"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="2h0i4wi">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="5v4yk88"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="6-wqjn2">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="u3hp.-t">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="jmnw58z"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bg5:_89"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="166l7u-"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="4wd.i_j">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="sgua6v8"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="_helc67">
                                                    Mongo Database
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="bxy:1hh">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="7didiqb"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="4z579qn"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="g18s6xr"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="tzm:.ae">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="rda.7t6"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="btigq7a">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="vjg:yqt">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="zwr_f2m"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="r9lw3ty">
                                        <div className="flex items-start" data-oid="9ntyevs">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="herc:xn"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bncyzez"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="ek:sizy"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="dhzp45m">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="znmnjjt"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="z3a:20k">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="wyh0j5_">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="bzem803"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="c03i6pl"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="41:-t8h"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="dfy02s5">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ur13gv5"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="nbifsh6">
                                                    Viettel SMS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid=".pam6t-">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="qmz8cgh"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="k_1dz72"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="ho9el44"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="funq7i_">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="wmvxq1q"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="nr7oo47">
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

            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="sagg:zh">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="y6r4n7o">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="9d1ampg">
                        <div data-oid="2bl9s5.">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="96zozxi">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="zta-y94">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="bhue68g">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="xpsofzh"
                                >
                                    <span className="sr-only" data-oid="2qwcue3">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ymvxsiu"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="qrxv1dp"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="vafqx-:"
                                >
                                    <span className="sr-only" data-oid="y2bmlsw">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ckx3jqe"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="d9j:8:0"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="1xjkmk4">
                            <h3 className="text-white font-medium mb-4" data-oid="nbxed3x">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="5in_0m:">
                                <li data-oid="olsb2nj">
                                    <a href="#" className="hover:text-white" data-oid="5je7adb">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="_ulc9xq">
                                    <a href="#" className="hover:text-white" data-oid="8j8c258">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="8j0kqp8">
                                    <a href="#" className="hover:text-white" data-oid="tfpv7os">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="pkyjmq0">
                                    <a href="#" className="hover:text-white" data-oid="shp7abb">
                                        Giao tiếp  đa kênh
                                    </a>
                                </li>
                                <li data-oid="tl42suf">
                                    <a href="#" className="hover:text-white" data-oid="lgi7l.v">
                                        Báo cáo kết quả học tập
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="08212pr">
                            <h3 className="text-white font-medium mb-4" data-oid="w90ctko">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="lzdq0wf">
                                <li data-oid="e_e8yd.">
                                    <a href="#" className="hover:text-white" data-oid="varjnhq">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="j-gdkqg">
                                    <a href="#" className="hover:text-white" data-oid="bdin9z2">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="_9:dbhn">
                                    <a href="#" className="hover:text-white" data-oid="2krmvdb">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="gdrn8p0">
                                    <a href="#" className="hover:text-white" data-oid="7_x5o_x">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="qq1xxb6">
                                    <a href="#" className="hover:text-white" data-oid="g1yh5wt">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="8brh1p3">
                            <h3 className="text-white font-medium mb-4" data-oid="76oq3vg">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="8z87_5a">
                                <li className="flex items-start" data-oid="40eslz-">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="qe-l666"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="4_reg.x"
                                        />
                                    </svg>
                                    <span data-oid="guyp4s_">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="0p85f-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="_ep.5hl"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="6.p2gz6"
                                        />
                                    </svg>
                                    <span data-oid="kqklcs-">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="tjptmsf">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=":l-0-tz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="e_xussc"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="kylgnxx"
                                        />
                                    </svg>
                                    <span data-oid="jx8q1i2">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="2-taj8m"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="y1ozsbd">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="bij4kwb">
                            <a href="#" className="hover:text-white" data-oid=".0828:l">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="8h96y21">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="-i:evmp">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
