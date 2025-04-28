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
            data-oid="izk:3x_"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="tnna6sp">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="4sbh1vk">
                    <div className="flex justify-between items-center py-4" data-oid="l5w44ew">
                        <div className="flex items-center" data-oid="a:x0..s">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="e36dy:z">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid=":us72px">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="t.k-ptc">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="lg9pb5-"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="h_batei"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="v09p.7c"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="xkfccxt"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid=":g8csy0">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="n.rn52t"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="vcop.pn"
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
                data-oid="vpx-n1l"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pn3-h._">
                    <div className="lg:flex items-center" data-oid="rxj4oja">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="fuycpwi">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="-cakx86"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid=":hkgst8">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="ws4quu6">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="e9evt6p"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="ory1kpn"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="tnps8zk">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="rh9pdqs">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="6j553cy"
                            >
                                <div className="flex items-center mb-4" data-oid="2:c9qgx">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="vqv4rid"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="-wdm9m7"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="1utywsh"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="f0kzywu">
                                    <div className="font-medium" data-oid="3imn5c7">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="oud1.s7"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="fekxjx0">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="9ik6nz."
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="w45kkzy"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="1gkm.49">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="05_s8bh"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="_0l7n9u"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ggzyitw">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="lejd9tj"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="mv1ap2r"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ns:e6.u">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="n:.97d0"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="gk0jq2p"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ivjbvsh">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="ht_xlh6"
                                >
                                    <div className="text-sm text-blue-700" data-oid="5lhnp0u">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="-xe_y3q"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="kwcbdq4"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="0g_is.a">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="0m-p6o3">
                    <div className="text-center mb-16" data-oid="ibrbo.1">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="a5h1etp">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="0raaose">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="cwmc9n.">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="pkbtv4z"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="n_zwz54"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="sxi2bb5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="-c.2ru5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="u8ejeh-">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="m5xwtc:">
                                <li className="flex items-start" data-oid="gw02g1a">
                                    <span className="text-blue-500 mr-2" data-oid="rzx8kcq">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="r0u-drj">
                                    <span className="text-blue-500 mr-2" data-oid="6p563al">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="3i2l3lz">
                                    <span className="text-blue-500 mr-2" data-oid="08l6cyb">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="8fkmc7i"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="o3yvtq6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ixww.fd"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="705_xf."
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="lmbssh.">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="jck6r19">
                                <li className="flex items-start" data-oid="7.t5mx3">
                                    <span className="text-blue-500 mr-2" data-oid="0i0d37p">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="e6qe7ln">
                                    <span className="text-blue-500 mr-2" data-oid="5w.6yoa">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="lmbgngd">
                                    <span className="text-blue-500 mr-2" data-oid="kuzwwu1">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng học gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=".j8dh-f"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="-6:wq4x"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="b2sr__4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="y7vlju0"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="yybif6s">
                                Grading System
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="z.y5-52">
                                <li className="flex items-start" data-oid="fttdijt">
                                    <span className="text-blue-500 mr-2" data-oid="hnmerq8">
                                        •
                                    </span>
                                    MOET-compliant score calculation
                                </li>
                                <li className="flex items-start" data-oid="opxr7_s">
                                    <span className="text-blue-500 mr-2" data-oid="_pk_59k">
                                        •
                                    </span>
                                    Digital gradebook with error-checking
                                </li>
                                <li className="flex items-start" data-oid="kv7nx9v">
                                    <span className="text-blue-500 mr-2" data-oid="pnwgxah">
                                        •
                                    </span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="9.-kf60"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="o-tfuqc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="wsq4em5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="frjn-e8"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="2_7x58h">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="d7-x_3u">
                                <li className="flex items-start" data-oid="8rekr25">
                                    <span className="text-blue-500 mr-2" data-oid="-vyovcm">
                                        •
                                    </span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start" data-oid="t4dg6hu">
                                    <span className="text-blue-500 mr-2" data-oid="zj9u4q9">
                                        •
                                    </span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start" data-oid="ttdmsmv">
                                    <span className="text-blue-500 mr-2" data-oid="7.nxlj6">
                                        •
                                    </span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="rfa1tlz"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="tbf3:.e"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="gp0yt2d"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="r7:cgy4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="8xt7r:x">
                                MOET Reporting
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="uy372cx">
                                <li className="flex items-start" data-oid="iktxkk5">
                                    <span className="text-blue-500 mr-2" data-oid="g7.p8kb">
                                        •
                                    </span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start" data-oid="x_bubdn">
                                    <span className="text-blue-500 mr-2" data-oid="r_mi7re">
                                        •
                                    </span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start" data-oid="b79jdsc">
                                    <span className="text-blue-500 mr-2" data-oid="nxl5:5z">
                                        •
                                    </span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="_30zac3"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ji6wp:f"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="glfghuv"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="o-_111l"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="6o7xzs8">
                                AI Modules
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="rpibtj-">
                                <li className="flex items-start" data-oid="qpqtnt2">
                                    <span className="text-blue-500 mr-2" data-oid="p2ri0lt">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="dmq1g6w">
                                    <span className="text-blue-500 mr-2" data-oid="yhpejd8">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="hylmfch">
                                    <span className="text-blue-500 mr-2" data-oid="j1e-wfw">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="e.8-elv">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".l-c1nn">
                    <div className="text-center mb-16" data-oid="__uxr54">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="zhojnty">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid=":y-415k">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="37o_e73"
                    >
                        <div className="px-6 py-8" data-oid="tvwunfu">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="-66ii5:">
                                <div data-oid="4lb1bo2">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="4:wawm2"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="k3gfg_q">
                                        <div className="flex items-start" data-oid="zv3kgtl">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="755128u"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="lut1vz0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="ta.ci9a"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid=".mwujb9">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="9.:1lgv"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid=".dcodir">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="xo8ixrm">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="txa.0po"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="nup9171"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="a8h1q9m"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="4ua6jhv">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="-nf5bmb"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="y2j9:5a">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="o3-h5ri">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="6dkolb1"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bjwky-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="uf5kdfq"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="ewn5-:h">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="n.xaf:s"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="ngxsxar">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="zze8mj.">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="k_8cslw"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="vwc8dp9"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="ixenai9"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="sj4dr4v">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="h3olnq5"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="l07-8v9">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="j1_f2vl">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="pcf:9jm"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="grb.37t">
                                        <div className="flex items-start" data-oid="i:1n:-e">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="1zmam5l"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="fhmr8r2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="m6jzn6d"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="jo:p3s1">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="o013svx"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="40ix_qo">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="6w:b_h6">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="n7wm::u"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="vt2zi.a"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="pdgvllg"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="yq_7gdi">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="m1vsspa"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="_6-dkmb">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="61avwk:">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="wv:_1op"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="kbz0i-:"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="nkv6qez"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="sdlpv7z">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="6s_8ygk"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="u6asupw">
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
            <section id="security" className="py-16 bg-white" data-oid=":e8giiq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ug147q1">
                    <div className="text-center mb-16" data-oid="bsjoqo5">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="8ptoqaq">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="sc-y7.u">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid=".7:7jab">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="1-hsk19"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="ikxx3q1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="2vituns"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="ilmfkh1"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="pwh.ul_">
                                <li className="flex items-start" data-oid="iuvcwmz">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="0lxwp0r"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ki.5v9h"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid="lpizi4:">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="jxtqs6x"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="z.dq4r4"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="9100ohs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="uk-nzjt"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="44tt9.l"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="tj61za4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="3c2zv-9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ky-2owh"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="3pdz2vz"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="ooi2sz-"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="_4-.i6u"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="tacjvrm"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="-r:5f6v">
                                <li className="flex items-start" data-oid="lgr1_2r">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="wt0cgxc"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="opfwc6g"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="g14y8yp">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="gdwi0pb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid=":u38b1h"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="ef5go-l">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="_lpcx5p"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="jumh6jl"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="xvy9--w">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=":sjch06"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="40znv9a"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="ya2-f-x">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="h1kqqcr">
                    <div className="lg:flex items-center justify-between" data-oid="sm6bwd.">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="2ycbmxf">
                            <h2 className="text-3xl font-bold mb-4" data-oid="e5bd9ea">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="pnxzp9y">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="c_cyd_:">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="92m7qj5"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid=":e57zst"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="63ocf7s">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="tmrl7id">
                                <h3 className="text-xl font-semibold mb-4" data-oid="37r0dq4">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="e2sdsjw">
                                    <li className="flex items-start" data-oid="wnmtm_s">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ezddg7l"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="pe4o-gp"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="ba5c4ci">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="vht1lfo"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="09yg3to"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid=":nnfi1d">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="..l.fsa"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="6xelrl."
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="uxnyvuv">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="kzr6rrp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="9nrcubn"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="sfwwr8l">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="iwiufi1">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="c_027xd">
                        <div data-oid="-8u9ijq">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="x2ko-qj">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="xj84f40">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="2g78r8z">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="-:tfb52"
                                >
                                    <span className="sr-only" data-oid="qprb5l2">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="xki4pqe"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="r6q.4j2"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="0kqwf:p"
                                >
                                    <span className="sr-only" data-oid="quwpnxs">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="t5sgup3"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="zbcetss"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="ssh.-i5">
                            <h3 className="text-white font-medium mb-4" data-oid="avjmlcy">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="ocqlvvy">
                                <li data-oid="6.y7wn4">
                                    <a href="#" className="hover:text-white" data-oid="8drd6z1">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="wgs__vx">
                                    <a href="#" className="hover:text-white" data-oid="py:x1j1">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="2u3ub4o">
                                    <a href="#" className="hover:text-white" data-oid="wak5dcm">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="aj:.h-t">
                                    <a href="#" className="hover:text-white" data-oid="xwkqxro">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="rt0tzn5">
                                    <a href="#" className="hover:text-white" data-oid="8cu:fyf">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="y4m7q-9">
                            <h3 className="text-white font-medium mb-4" data-oid="-1z-s0u">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="-tlj3:j">
                                <li data-oid="cl848oj">
                                    <a href="#" className="hover:text-white" data-oid=":3a5gt.">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="jtl8u03">
                                    <a href="#" className="hover:text-white" data-oid="zo3c1qn">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="y21pbnl">
                                    <a href="#" className="hover:text-white" data-oid="uhr-44z">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid=":x.q3c4">
                                    <a href="#" className="hover:text-white" data-oid="ba93el8">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="8lnxswa">
                                    <a href="#" className="hover:text-white" data-oid="q50tomo">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid=":xfgiir">
                            <h3 className="text-white font-medium mb-4" data-oid="xd:gjes">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="ouk54op">
                                <li className="flex items-start" data-oid="11j_o3g">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ygzoqyb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="qp5vekn"
                                        />
                                    </svg>
                                    <span data-oid="3qq-5ma">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="9rh6z:q">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="d04mo90"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="douigii"
                                        />
                                    </svg>
                                    <span data-oid="k1mag3-">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="fphp8rc">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="h6f1z80"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="aycu:rv"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="jojhkgp"
                                        />
                                    </svg>
                                    <span data-oid="33ppe50">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="_mnws:o"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="ny98ewj">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="r_:g22t">
                            <a href="#" className="hover:text-white" data-oid="twj-cdw">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="4bmave:">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="jf5io9c">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
