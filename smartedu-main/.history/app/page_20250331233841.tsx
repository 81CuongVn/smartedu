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
            data-oid="z7.3qdp"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="j51qhyi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fke7tq_">
                    <div className="flex justify-between items-center py-4" data-oid="uvgcmdv">
                        <div className="flex items-center" data-oid="kkz_giq">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="4opxovk">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="p3.nutx">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="::i7a7x">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="htm8gry"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="gvqftd_"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="920es1k"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid=".jcnu80"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="6xz_4k2">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="4do0jm3"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="7rd8x-r"
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
                data-oid="cgcopr1"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="d9dyzng">
                    <div className="lg:flex items-center" data-oid="_2:az2.">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="fbzefnu">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="-w_2m7c"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="no8:5sb">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="25y11c-">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="-wj03mf"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="_unr..l"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="q5ggx2y">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="0ez92br">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid=":2x49da"
                            >
                                <div className="flex items-center mb-4" data-oid="tpblh.a">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="dc8h.3l"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid=".x5s9p8"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="n21kqiy"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="mmpcyzg">
                                    <div className="font-medium" data-oid="a7epfw1">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="1-sqsr:"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="bil80wi">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="sy5ok11"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="vvtewog"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="b2v_cwv">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="e1jxv4:"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="zdw20uk"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="w-3q-xx">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="lnl98c8"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="2e6huo0"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="1c4:uyc">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="ram_mt3"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="h70:ovu"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid=":w_-69p">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="-zk:ntw"
                                >
                                    <div className="text-sm text-blue-700" data-oid="1hak7h_">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="2pili9."
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="gemuxm_"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="fzrf5ek">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="zq5ev_v">
                    <div className="text-center mb-16" data-oid="ngao-:7">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="8rw4uw1">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="vl7o7c9">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="09-mssk">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="1vf810p"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="qku_yo9"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="o020btt"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="iry3z7w"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="sz0t75_">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="2.zybp2">
                                <li className="flex items-start" data-oid="7.mb7l8">
                                    <span className="text-blue-500 mr-2" data-oid="7eaxlx_">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="xiid4yn">
                                    <span className="text-blue-500 mr-2" data-oid="mgig97m">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="x1x5.sv">
                                    <span className="text-blue-500 mr-2" data-oid="2n.x6qd">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="ownp:r6"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="zb81rhu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="gxe-2e2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="1ghs:ci"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="kyby6i6">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="m9ui9fn">
                                <li className="flex items-start" data-oid="1s09j9l">
                                    <span className="text-blue-500 mr-2" data-oid="qi4plea">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid=".spowpy">
                                    <span className="text-blue-500 mr-2" data-oid="avpx:m4">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="s:1xfu:">
                                    <span className="text-blue-500 mr-2" data-oid=".a8j_fk">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="pbvkmcv"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="vhema4w"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="lr3hvu4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="m-m0:zd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="nvlpjai">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="d8m3rjg">
                                <li className="flex items-start" data-oid="fzihji3">
                                    <span className="text-blue-500 mr-2" data-oid=".qwsvih">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="3i26du0">
                                    <span className="text-blue-500 mr-2" data-oid="zj9d9f-">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="hvxz2z9">
                                    <span className="text-blue-500 mr-2" data-oid="4fda2ka">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="w44rn23"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="-xiamn7"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="j2twg:9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="8k5z.xk"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="-ja7yjo">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid=".ka2jh1">
                                <li className="flex items-start" data-oid="uzdotsq">
                                    <span className="text-blue-500 mr-2" data-oid="yqo4z9k">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="9rj1s.q">
                                    <span className="text-blue-500 mr-2" data-oid="j9-s1nx">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="8a83cjj">
                                    <span className="text-blue-500 mr-2" data-oid="-a57vri">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="k7a3ap9"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="cww8o5n"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=".q:c.4b"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="f841eyq"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="siwqimi">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="v_pn6xi">
                                <li className="flex items-start" data-oid="-ae99n5">
                                    <span className="text-blue-500 mr-2" data-oid="gx2ddhy">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="ouerig6">
                                    <span className="text-blue-500 mr-2" data-oid="ajdt-ls">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="449y5gg">
                                    <span className="text-blue-500 mr-2" data-oid="._:db0-">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="ps6vhpv"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="b726z.m"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="k4qfvk-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="l0qmc9q"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="2nzanu4">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid=":0c.2j9">
                                <li className="flex items-start" data-oid="t4t_xow">
                                    <span className="text-blue-500 mr-2" data-oid="ottokb-">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="gf6n6fq">
                                    <span className="text-blue-500 mr-2" data-oid="6id4-k:">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="2i5s6wq">
                                    <span className="text-blue-500 mr-2" data-oid="r2w7ljm">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="e38j.ph">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="igw5p3_">
                    <div className="text-center mb-16" data-oid="dgrhqhf">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="k34rfdr">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="qhm5nx5">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="85jebz2"
                    >
                        <div className="px-6 py-8" data-oid="zw43w8k">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="oi0ot9a">
                                <div data-oid="yk1kspy">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="d8j_mvp"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="pqzaamd">
                                        <div className="flex items-start" data-oid="a8ms7-t">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="7mizj0m"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="r8p5emz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="x5a2cq."
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="_:u.boe">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="n9.dr6i"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="rnfs_wh">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="i5s687z">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="4n-69ml"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="iuszx5w"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="6nbxh2:"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="80it1h1">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="yf:0xrt"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="-tfke2h">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="f1_uqgk">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="-3ayue9"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="hk346_c"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="e-nkhx7"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="7b_jk9z">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="ivs9gu_"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="_lz_z1d">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="8o_4:v0">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="qzodx5v"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="_9v80um"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="7soc.03"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="zn3j:8h">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="b:qwcae"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="axgi6ra">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="v2bsb2a">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="sco8os3"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="511ddth">
                                        <div className="flex items-start" data-oid="83hgh6b">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="lz.mtlt"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="n9mp0n0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="g-e01xt"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid=":4vkj6x">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="jum-t13"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="1j4s1-6">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="e0kogzp">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="b5u06-b"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=":p8b-u0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="xr4jyyr"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="tueet5g">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="c2:2zu1"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="vl8blj0">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="slgeq9d">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="gyhr9.v"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="-1vrf-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="b58k.oc"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="u6a9j6k">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="f0bqul2"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="x_dcqw3">
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
            <section id="security" className="py-16 bg-white" data-oid="nu.az8w">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xz:5ei-">
                    <div className="text-center mb-16" data-oid="1uxig9y">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="6o.e4e3">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="s5m-hir">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="3gxqs6r">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="vrpewdo"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="n.q833c"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ul615r_"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="mxpqken"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="uhb.utu">
                                <li className="flex items-start" data-oid="i4h4_fi">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="r6i2xd7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="kvnykan"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid="tu.5ngn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="04uthhe"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="f-loh5p"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="-4ebkuz">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="wkkgxrx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="x9yz.hy"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="hw9db-:">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="rg4-o_1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="wxw_sug"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="90f8hjq"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="vsu_27b"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=".uhj9jz"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="5ge.fdg"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="urr_:81">
                                <li className="flex items-start" data-oid="7vuw7q8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="802x7u0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="4s1d-x0"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="117tco.">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="7ji_fxz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="96:ylt5"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="w15auht">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="5zbi4de"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="gmsepwo"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="hq61wap">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="eh_von8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="4.pyw6r"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="wa3xmhv">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":lrcy:j">
                    <div className="lg:flex items-center justify-between" data-oid="f7i8oll">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid=".6wxhh_">
                            <h2 className="text-3xl font-bold mb-4" data-oid="39zbakx">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid=":spc7u:">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="pqk1v-u">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid=".ufkf.b"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="bh.jafz"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="m.k36b8">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="sge42dp">
                                <h3 className="text-xl font-semibold mb-4" data-oid="gu.8l_4">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="et2z_7p">
                                    <li className="flex items-start" data-oid="_r7rt0i">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="eqr_i2a"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qbwt9o-"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="x_rp:hy">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="haffi13"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="kycsu2y"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="31tq5p_">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="d1fycdd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="1f2lhr7"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="xz:7:rj">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="g9q4377"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="7mryg5m"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="wuzmwhs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="t_wa9yd">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="gf-ffj7">
                        <div data-oid="7z61kiu">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="m-crv67">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="5rei:lu">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="5_-ku8t">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid=".pl-2ks"
                                >
                                    <span className="sr-only" data-oid="xw4y7gu">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="zuuoewf"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="13ia4y7"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="v58_i7q"
                                >
                                    <span className="sr-only" data-oid="j79a6r7">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid=":epq547"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="t326qk9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="mu6jt:n">
                            <h3 className="text-white font-medium mb-4" data-oid="-2k-leu">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="m6-nssw">
                                <li data-oid="4chinv0">
                                    <a href="#" className="hover:text-white" data-oid="x612qp5">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="-h7i029">
                                    <a href="#" className="hover:text-white" data-oid="tu.9_i:">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="u6vcmsm">
                                    <a href="#" className="hover:text-white" data-oid="j7ptr5y">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="f282gox">
                                    <a href="#" className="hover:text-white" data-oid="5x8fnx5">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="u1v-r10">
                                    <a href="#" className="hover:text-white" data-oid=".uo0a6l">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="50zjl05">
                            <h3 className="text-white font-medium mb-4" data-oid=":5u:qsf">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="sg73j0k">
                                <li data-oid="jddtl0u">
                                    <a href="#" className="hover:text-white" data-oid="4..-cn1">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="4am1u14">
                                    <a href="#" className="hover:text-white" data-oid="axnf8i6">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="zs.:99o">
                                    <a href="#" className="hover:text-white" data-oid="8.wwye2">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="eo6204a">
                                    <a href="#" className="hover:text-white" data-oid="odqey40">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="5nobfhv">
                                    <a href="#" className="hover:text-white" data-oid="0m5jcx2">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid=":ojovz.">
                            <h3 className="text-white font-medium mb-4" data-oid="kfwk90z">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="gxzjlms">
                                <li className="flex items-start" data-oid="hpwyz:8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="u3dzuxe"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="ilph74s"
                                        />
                                    </svg>
                                    <span data-oid="n21x8pz">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="iec3r3q">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="zbnas98"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="-ds:-i:"
                                        />
                                    </svg>
                                    <span data-oid="zxa7w9e">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="h8bxykl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="wr_:m:."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="sat3f9c"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="_aw-pfs"
                                        />
                                    </svg>
                                    <span data-oid="i.hc5:4">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="w6ny90c"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="93an9dv">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="tosofac">
                            <a href="#" className="hover:text-white" data-oid="97bpvfs">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="v_i.umt">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="ofmg502">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
