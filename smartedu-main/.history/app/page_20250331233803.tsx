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
            data-oid="8-n.uyd"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="agy5f:9">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1k3kza7">
                    <div className="flex justify-between items-center py-4" data-oid="os0mfx2">
                        <div className="flex items-center" data-oid="r22o:v.">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="cr3htc.">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="s3d85fo">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="egcqiuf">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="hw2j7mf"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="aqrp4se"
                            >
                                Technical
                            </a>
                            <a
                                href="#security"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="7.je:9w"
                            >
                                Security
                            </a>
                            <a
                                href="#compliance"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="jf2:b1w"
                            >
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="k:iskgy">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="y6_9v:i"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="26jbv6c"
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
                data-oid="a1y2rs:"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ppx7e1u">
                    <div className="lg:flex items-center" data-oid="0-5qexu">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="7_9-pl7">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="mxpo0g4"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="s7_44_d">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="l.7xa0-">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="b-6kver"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="4vfua:b"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="bhzw07g">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="c.37nac">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="oc6:brp"
                            >
                                <div className="flex items-center mb-4" data-oid="h:mu102">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="in3nli0"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="glg11dy"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="afug852"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="f0b1lm6">
                                    <div className="font-medium" data-oid="jbm6szz">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="o:nrtto"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="0ailk:j">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="-6_u_yo"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="4.1sjtr"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="66_hjx6">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="1bhif-k"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="bvt_8i3"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="8pqqyw9">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="_2t18ai"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="5h02rdt"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="u9calbp">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="mzvew8o"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="yr06k8s"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="unq9_-r">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="rk37p:."
                                >
                                    <div className="text-sm text-blue-700" data-oid=":e4:d8c">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="k8ap6-9"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="t8n3r17"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="w1cp0st">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="mszsh1v">
                    <div className="text-center mb-16" data-oid="3d3ea1.">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="-4a0g13">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="7q.7vym">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="exjyfcq">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="lw0..x5"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="w:t7hh1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="h1822_1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="_:83h.y"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="t:-9s1w">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="clio2si">
                                <li className="flex items-start" data-oid="a49t1pm">
                                    <span className="text-blue-500 mr-2" data-oid="5eexqe3">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="oqh1gog">
                                    <span className="text-blue-500 mr-2" data-oid="aa.xo.c">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="8:0hx.7">
                                    <span className="text-blue-500 mr-2" data-oid="uvz7yjq">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="1ifhitp"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="4xniew3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ql7vxjv"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="xfqhsqp"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="q4.0u-4">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="e3md.e5">
                                <li className="flex items-start" data-oid="wzq1-ts">
                                    <span className="text-blue-500 mr-2" data-oid="zltuhp.">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="9gylh07">
                                    <span className="text-blue-500 mr-2" data-oid="a6014ww">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="5b.6xih">
                                    <span className="text-blue-500 mr-2" data-oid="f_a0qiv">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="ouc40kl"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="diqug5p"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="w4pe..s"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="3itzlhx"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="5ettm:1">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="f33k:33">
                                <li className="flex items-start" data-oid="plz:1nh">
                                    <span className="text-blue-500 mr-2" data-oid="413.uqs">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="y2bos5t">
                                    <span className="text-blue-500 mr-2" data-oid="hh39ceb">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="o:9tqzn">
                                    <span className="text-blue-500 mr-2" data-oid="3-xeafx">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=":6om5ge"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="uy9:1eu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="4:vrccc"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="rl5qk3m"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="d.6pmx.">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="v2gvgkd">
                                <li className="flex items-start" data-oid="q:r1.1c">
                                    <span className="text-blue-500 mr-2" data-oid="vcv.1.3">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="sc0vapv">
                                    <span className="text-blue-500 mr-2" data-oid="f7-:p02">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="pkyierp">
                                    <span className="text-blue-500 mr-2" data-oid="_g_56yd">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="s44w86m"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="7kd.pzr"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="2y0csi5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid=".fvg0i8"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="7l3g2d4">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="3.-dlo6">
                                <li className="flex items-start" data-oid="ob:b-p2">
                                    <span className="text-blue-500 mr-2" data-oid="w87olr1">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="w29ah1n">
                                    <span className="text-blue-500 mr-2" data-oid="odkx8:0">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="7lcaj5b">
                                    <span className="text-blue-500 mr-2" data-oid="kpz6mc:">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="5eis72n"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ui62:sz"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="eyz_h72"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="o.y0b91"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="en5gjan">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="fseh:mz">
                                <li className="flex items-start" data-oid="mphd46d">
                                    <span className="text-blue-500 mr-2" data-oid="gdsxk:8">
                                        •
                                    </span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start" data-oid="d8nwuc9">
                                    <span className="text-blue-500 mr-2" data-oid="tankz53">
                                        •
                                    </span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start" data-oid="k.gkp2l">
                                    <span className="text-blue-500 mr-2" data-oid="qjf9nwg">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="igthj3b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="v2pnp03">
                    <div className="text-center mb-16" data-oid="ma8lzwm">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="y9j:udp">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="93fhkl4">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="kuplptn"
                    >
                        <div className="px-6 py-8" data-oid="e817z_5">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="sl.28x:">
                                <div data-oid="fwk2jam">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="91rt2hi"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid=".gz7.27">
                                        <div className="flex items-start" data-oid="palhjvh">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="xnanvq1"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="wto4dr0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="di-m76t"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="0-us4fu">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="w0e:78l"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="970:atu">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="_tji63c">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="a.r-tn7"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="8k8qib2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="yms:6dy"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="1l.r-mz">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid=".zv2pj3"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="nt3hirj">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="66l8nvz">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=":3q9orv"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="bo2jh.p"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="k_bo1bb"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="5-.wxt1">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="6z:sew."
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="6:7rwqi">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="rjk6xlp">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="rvov45s"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="4fdc4:h"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="8ghw_j0"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="vfk7eco">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="u3c91k-"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="3zahh03">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="zittc6w">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="40yzwvx"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="39cu_46">
                                        <div className="flex items-start" data-oid=".nmnt-a">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="91reyxc"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="n6idh3o"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="hg11rhb"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="e:iun:1">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="lm3jg5g"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="lw3jd_u">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="_hcfz-5">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="uuh_:j."
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="5pp9mjk"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="04pellp"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="tfuzrcu">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="t_8xhde"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="42wt0el">
                                                    VNPT Brandname API
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="qysjxtg">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="8_i9dcb"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="tzld4lw"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="du2_i6x"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="nr3.wzo">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="zbe2xvi"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="u6x67zo">
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
            <section id="security" className="py-16 bg-white" data-oid="kd1in62">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".m3.w:z">
                    <div className="text-center mb-16" data-oid="ejvai5e">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="le2msjq">
                            Security & Compliance
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="vf0wnoq">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="c9x0qvl">
                        <div
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="sk:pghq"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="nxa3mhc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="6-u32k8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="3y9bua7"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid=":6.exx0">
                                <li className="flex items-start" data-oid=".o.326.">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="hnum22h"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ycd1afs"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start" data-oid=".2zjwv0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="2q0qicn"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="dgf1tvu"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start" data-oid="dsoy.5p">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="7q.bte_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="bk566a-"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start" data-oid="isbkzm-">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="s34dsa_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ivfzv.r"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                            data-oid="dp.99w-"
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-gray-900 flex items-center"
                                data-oid="q:dj_0f"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="x1mk_k7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="3sepyc3"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700" data-oid="hi35zln">
                                <li className="flex items-start" data-oid="vo:froj">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-9adkm3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="2yliy:b"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start" data-oid="butm_cf">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="eyljj1n"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="6ezzx.c"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start" data-oid="qb.xuno">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="2uirrqs"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="d.y70x:"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start" data-oid="vumozj9">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="9d8v8ts"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="_aibk_4"
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
            <section className="py-16 bg-blue-700 text-white" data-oid="4a9jx7.">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7dt6tgy">
                    <div className="lg:flex items-center justify-between" data-oid="gq.zwa2">
                        <div className="lg:w-1/2 mb-8 lg:mb-0" data-oid="xlyqaje">
                            <h2 className="text-3xl font-bold mb-4" data-oid="kw40k9k">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6" data-oid="f2uipp0">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="rra0pap">
                                <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="2h08y9u"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid="pak19dv"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="nkta97:">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="xu4qt3n">
                                <h3 className="text-xl font-semibold mb-4" data-oid="8i9ssgk">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="z-g1g33">
                                    <li className="flex items-start" data-oid="80t4zdz">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="_w-hmre"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=":uf5mgf"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="mt.t.h9">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="x36w5ne"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="l:1:5t_"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="ak8cohi">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="45xkq._"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="1pnfrkq"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="3lpf7kz">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="7a866t9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="0hsrze1"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="egccyi1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fzbxy6d">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="s_g.4nl">
                        <div data-oid="c1.2sl7">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="vgd1xz.">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="g4lmu2o">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="aboi74a">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="3f87axd"
                                >
                                    <span className="sr-only" data-oid="jdcuqz3">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="3g6b5ri"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="zqlkz4."
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="67apqil"
                                >
                                    <span className="sr-only" data-oid=".6tg6pj">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="geqiu.y"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="74hckfb"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="e1p6n5k">
                            <h3 className="text-white font-medium mb-4" data-oid="q3m9gbc">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="4ri4p3z">
                                <li data-oid=":_6i1ql">
                                    <a href="#" className="hover:text-white" data-oid="ozc9g0e">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="j.64t:p">
                                    <a href="#" className="hover:text-white" data-oid="ejt-5dj">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="-aiyhx-">
                                    <a href="#" className="hover:text-white" data-oid="l:ic:id">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="sa5n2:3">
                                    <a href="#" className="hover:text-white" data-oid="vzjgt.8">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="rdkdso_">
                                    <a href="#" className="hover:text-white" data-oid="9oss.ha">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="z-8k.:y">
                            <h3 className="text-white font-medium mb-4" data-oid="ys7e4bh">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="ibkf0zr">
                                <li data-oid="rne:99w">
                                    <a href="#" className="hover:text-white" data-oid="ocmvslk">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="vsbbnt1">
                                    <a href="#" className="hover:text-white" data-oid="-ti2u8t">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="l-h442x">
                                    <a href="#" className="hover:text-white" data-oid="zdnkqar">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="lwsp:0r">
                                    <a href="#" className="hover:text-white" data-oid="yex79.s">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="lvwfgmw">
                                    <a href="#" className="hover:text-white" data-oid="qvgqf1o">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="wx1vhjl">
                            <h3 className="text-white font-medium mb-4" data-oid="qu8inpj">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="veakhaq">
                                <li className="flex items-start" data-oid="tkgjl1u">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="dt30t1t"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="129q-yu"
                                        />
                                    </svg>
                                    <span data-oid="f2gw52l">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid=":wrol2-">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-00zv_2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="-bbm75k"
                                        />
                                    </svg>
                                    <span data-oid="k:b5de0">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="vxjj2rr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="eha.8nq"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="r-p00q-"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="y1sjzz0"
                                        />
                                    </svg>
                                    <span data-oid="e0oxcgi">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="84e_d00"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="snwcdhl">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="aoexao:">
                            <a href="#" className="hover:text-white" data-oid="-afqf.m">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="wb9dgb2">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="4py100x">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
