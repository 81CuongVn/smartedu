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
            data-oid="7ytv-t3"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="0qcl1a8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7j_rcl5">
                    <div className="flex justify-between items-center py-4" data-oid="_:y4.ls">
                        <div className="flex items-center" data-oid="hq.d4y-">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="ra_f771">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="lmtlr21">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="sdyk_6u">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="e573j.k"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="l0z1baq"
                            >
                                Technical
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="ts9oiqd">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="nk9z:eq"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="w6072f1"
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
                data-oid="6e0.s68"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e5niv62">
                    <div className="lg:flex items-center" data-oid="ji-niiq">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="-cegy_h">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="qzv0tso"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="n:f9cwf">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="m.kko_1">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="t9o54kj"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="z5.3i7b"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="pki7945">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="gt4k0::">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="6pfbh_n"
                            >
                                <div className="flex items-center mb-4" data-oid="jsqm1en">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="bh.dyq9"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="f-:wtjw"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid=".-7rkg_"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="slz3g4e">
                                    <div className="font-medium" data-oid="-4z:_m-">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="l1ims2a"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="lia0uj1">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="mqm8pit"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="-zdi9kr"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="r20c-bt">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="-vo4_mc"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid=".ou_en1"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="03.kypy">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="i.hep6m"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="0fpi9ht"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="cdxgmeq">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="7gx_ycx"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="ov0:b.3"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="7ud991d">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="p6ilcpy"
                                >
                                    <div className="text-sm text-blue-700" data-oid="stm4dnc">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="xq57-9i"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="edxc-bs"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="hvm032k">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="bgnztbb">
                    <div className="text-center mb-16" data-oid="fuz7xay">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="akb0lep">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="p1om6ay">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="dq9te57">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="1aa.:vr"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid=":3bu04a"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="kew-1xl"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="m-ak418"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="xgurres">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="mjwbfky">
                                <li className="flex items-start" data-oid="_:d.vmg">
                                    <span className="text-blue-500 mr-2" data-oid="f_w21s0">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="ooph9x_">
                                    <span className="text-blue-500 mr-2" data-oid="uwlx07e">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="h3zxk-2">
                                    <span className="text-blue-500 mr-2" data-oid="32uwbyz">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="_qsk3ao"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ct-.hlp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="y7bb7ma"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="8m4p8f:"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="gqtovma">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="iwksa4a">
                                <li className="flex items-start" data-oid="i_pqlz3">
                                    <span className="text-blue-500 mr-2" data-oid=".blmi06">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="ryhmv7g">
                                    <span className="text-blue-500 mr-2" data-oid="o7h365l">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="6lxc8au">
                                    <span className="text-blue-500 mr-2" data-oid=":yym6-8">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="rriz.i6"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="kyq9:qm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="-91hogq"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="rldebal"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid=".5f2a.q">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="9h6mn.x">
                                <li className="flex items-start" data-oid=".-pc-lb">
                                    <span className="text-blue-500 mr-2" data-oid="ndhi8d2">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="hdlc1d8">
                                    <span className="text-blue-500 mr-2" data-oid="qsi3g38">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="zogv.r9">
                                    <span className="text-blue-500 mr-2" data-oid="-cqn:lo">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="sot9u4w"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="01pkzde"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="dznyis_"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="vayviqq"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="as7ack1">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="qp5bn3f">
                                <li className="flex items-start" data-oid="smrsa-y">
                                    <span className="text-blue-500 mr-2" data-oid="j8ucvzg">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="px03..v">
                                    <span className="text-blue-500 mr-2" data-oid="ps.f6qx">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="s6o5kjk">
                                    <span className="text-blue-500 mr-2" data-oid="2ehj14z">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="2a-e6za"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="mp3gm6_"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="phg-94-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="h.9n2vx"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="jqu:j.0">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="yx116fa">
                                <li className="flex items-start" data-oid="48mk-0j">
                                    <span className="text-blue-500 mr-2" data-oid="npk63:f">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="ntq5pb7">
                                    <span className="text-blue-500 mr-2" data-oid="oulx9s1">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="5dnplot">
                                    <span className="text-blue-500 mr-2" data-oid="yxbma:p">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="jrq_bz3"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="nh8tmia"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="k4-_n:7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="vl_uc1r"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid=":4.bs9h">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="iqh1gav">
                                <li className="flex items-start" data-oid="6vro6h0">
                                    <span className="text-blue-500 mr-2" data-oid=".v3qh6g">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="4s8ijli">
                                    <span className="text-blue-500 mr-2" data-oid="357a4_9">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="gm1ltl8">
                                    <span className="text-blue-500 mr-2" data-oid="e9kah:w">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid=":.64zu3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="lkng4h8">
                    <div className="text-center mb-16" data-oid="-7wa.80">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="v3i9ll6">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="os8v30m">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="n88q-sr"
                    >
                        <div className="px-6 py-8" data-oid="5auw4co">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="gx:1xi3">
                                <div data-oid="vri4n-q">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="_s7vhc7"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="tikgaa9">
                                        <div className="flex items-start" data-oid="ot8tx55">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="c7u9a8h"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ih3h:zy"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="lyw:cuy"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="gvqmzg2">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="y59p8ii"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="7ycu0id">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="_wklf4m">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="w:egzr5"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="yc:euzy"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="hw6zp2e"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="zgnwp56">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="vxr-fnz"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="95kbdv3">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="vgb.uqe">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="o2pku9w"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="xduxnjf"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="2_yc2eb"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid=".5yomqy">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="k.9wn2i"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="gma:ym_">
                                                    Mongo Database
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="bg2iudc">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="gn0l0by"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="7uxm_0x"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="0d0c93z"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="-wwk01v">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="tzyojsa"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="0cp1dky">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="2z4mo5r">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="zmzf069"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="ja0agge">
                                        <div className="flex items-start" data-oid="bxne-xv">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="mr:ro21"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="8ydh1h:"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="zeyrx0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="qr9llo9">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="rkyt_rs"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="h7gilp3">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="lqt7c51">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="jf1990:"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="3tz70du"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="i:um815"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="qe3n4u8">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="tq89ki2"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="d:_1xxe">
                                                    Viettel SMS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="bh4pj7-">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="0ju1zi2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="m2747sp"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="jz0uttg"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="6i4wo.-">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="6j3nyun"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="9qgz2fn">
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

            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="00myx-p">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="x3u1.us">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="j.n0zgp">
                        <div data-oid="52vqn_n">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="xtzyq9z">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="c04ipuc">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="ck_rplk">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="tgo8ia7"
                                >
                                    <span className="sr-only" data-oid="x:smvy_">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="w:5i5jt"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="vqby1h-"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid=".y1y4io"
                                >
                                    <span className="sr-only" data-oid="-v4xp1i">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="y5dhrbq"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="sspvox_"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="_3p6out">
                            <h3 className="text-white font-medium mb-4" data-oid="_hr2yt3">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="30h6fcu">
                                <li data-oid="vwo74jf">
                                    <a href="#" className="hover:text-white" data-oid="qn4ai4m">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="cehlh5b">
                                    <a href="#" className="hover:text-white" data-oid="18zrxmi">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="c6lahhh">
                                    <a href="#" className="hover:text-white" data-oid="2vb:uct">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="itxbjgw">
                                    <a href="#" className="hover:text-white" data-oid="uz5jtlz">
                                        Giao tiếp  đa kênh
                                    </a>
                                </li>
                                <li data-oid="xf2p38o">
                                    <a href="#" className="hover:text-white" data-oid="q7:q_sg">
                                        Báo cáo kết quả học tập
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="-z48xkc">
                            <h3 className="text-white font-medium mb-4" data-oid="feekozh">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="6zjw05s">
                                <li data-oid="x1cw8mp">
                                    <a href="#" className="hover:text-white" data-oid="f2rwmxw">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="j5iop6s">
                                    <a href="#" className="hover:text-white" data-oid="_eas1yh">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="4apn3l7">
                                    <a href="#" className="hover:text-white" data-oid="hp69xpf">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="h_2g8at">
                                    <a href="#" className="hover:text-white" data-oid="jh39jtt">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="f-vf098">
                                    <a href="#" className="hover:text-white" data-oid="pzjiyz-">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="g69sqal">
                            <h3 className="text-white font-medium mb-4" data-oid="v9uqh::">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="5vyz.ky">
                                <li className="flex items-start" data-oid="r_s2rnm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ntq5id9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="62ks7:a"
                                        />
                                    </svg>
                                    <span data-oid="z.2aes6">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="jxdvb6w">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="tdido.m"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="c8m1mpw"
                                        />
                                    </svg>
                                    <span data-oid="_7c.g_i">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="j:4..e4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="s6craov"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="osbhgp1"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="4:._bh0"
                                        />
                                    </svg>
                                    <span data-oid="uz2-c55">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid=".xbne99"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="fo8wsq8">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="q2br-kv">
                            <a href="#" className="hover:text-white" data-oid="57tza2v">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="0lqe73f">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="mg0csb8">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
