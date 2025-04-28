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
            data-oid="8dftg:o"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="_s2srf9">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="vy49chk">
                    <div className="flex justify-between items-center py-4" data-oid="6h6x3h8">
                        <div className="flex items-center" data-oid="qy6mhx3">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="_5p8i_d">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="mi2b.bx">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="ebdg.y2">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="srcfdt1"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="9a:u5fp"
                            >
                                Technical
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="_61pupt">
                            <button
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="dm1j0xj"
                            >
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid=":kxhurt"
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
                data-oid="uyy.umz"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-p5xc35">
                    <div className="lg:flex items-center" data-oid="bun:d1:">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="mhdp_wk">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="zk_cbwr"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="zs3xzwf">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="t8-eqvk">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="g:2ddc3"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="_69puxj"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="ye.x1ff">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="686j:3c">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="lnqf4o3"
                            >
                                <div className="flex items-center mb-4" data-oid="fyhrjcx">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="pc31jk9"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="_jmxdn8"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="krc0122"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="oh2a8ub">
                                    <div className="font-medium" data-oid="5mx:j0-">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="ga8vn7f"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="04fmbyn">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="v9sc8e7"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="dtgn9an"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="hrrjw9v">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="scibhkg"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="3vxvkrx"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="4f_op.v">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="blhktv6"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="efs6ud_"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="-vb8m9b">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="n-7-b2s"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="wgc0l7j"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="7l6ams8">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid=".nhqj7p"
                                >
                                    <div className="text-sm text-blue-700" data-oid="nz2am5o">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="wv5veij"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="8voiuys"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid="tatj_13">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ixnylig">
                    <div className="text-center mb-16" data-oid="5per2ja">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="iehrbcf">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="zv12hfv">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="phf4re5">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="j89wki4"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ddno8lp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="gjo9yqr"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="mc7dm75"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="paz2m7l">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="h8sjayp">
                                <li className="flex items-start" data-oid="_y8ww6c">
                                    <span className="text-blue-500 mr-2" data-oid="h2ffnog">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="mpsgr50">
                                    <span className="text-blue-500 mr-2" data-oid="gstbg2j">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="sv-339-">
                                    <span className="text-blue-500 mr-2" data-oid="z6w1haq">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="fp455hw"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="45ej:gt"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="e:hwnru"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="h23pteq"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="bxv9y_s">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="ej975bg">
                                <li className="flex items-start" data-oid="t90pd4h">
                                    <span className="text-blue-500 mr-2" data-oid="z3haeyb">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="4:1fqr3">
                                    <span className="text-blue-500 mr-2" data-oid="dw9iq4g">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="l.ytyt5">
                                    <span className="text-blue-500 mr-2" data-oid="pv2hus3">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="x3fpcsk"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ey3jf9g"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="cg6i8mm"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="hmxw65q"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="2p5b-ht">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="vzj_b61">
                                <li className="flex items-start" data-oid="d0jwrug">
                                    <span className="text-blue-500 mr-2" data-oid="417a6t1">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="fm3bafr">
                                    <span className="text-blue-500 mr-2" data-oid="f6mj.o1">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="gozf_pg">
                                    <span className="text-blue-500 mr-2" data-oid="s685yrl">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="jt:gcgr"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="_08e2u:"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="q.lb_wd"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="zyle-9r"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="4nmf5ic">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="m-puss6">
                                <li className="flex items-start" data-oid="sr5nq2f">
                                    <span className="text-blue-500 mr-2" data-oid="oeugjx4">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="6m9-n1o">
                                    <span className="text-blue-500 mr-2" data-oid="5wn89zo">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="k-zrerc">
                                    <span className="text-blue-500 mr-2" data-oid=":37xp5g">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="d4w.pp_"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid=":qg1cl:"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="z1in:9d"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid=":qndj6o"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="gridxex">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="m1cwr_m">
                                <li className="flex items-start" data-oid="rczxd5o">
                                    <span className="text-blue-500 mr-2" data-oid="8ixx8ie">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid=".yjd-6s">
                                    <span className="text-blue-500 mr-2" data-oid="eyq5rnv">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="3mr9n5w">
                                    <span className="text-blue-500 mr-2" data-oid="9uj:tdq">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="c3otz83"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="74qbcbu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="mypkuf0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="7po035z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="ic-qq7s">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="22bku55">
                                <li className="flex items-start" data-oid="j9ew6th">
                                    <span className="text-blue-500 mr-2" data-oid="ee:z-w4">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="qxbqoyz">
                                    <span className="text-blue-500 mr-2" data-oid="n94b4lx">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="mw6pxm1">
                                    <span className="text-blue-500 mr-2" data-oid="r_az07p">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="25q-2sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="v_5m_cb">
                    <div className="text-center mb-16" data-oid="sdpyj7i">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="kqqpkbv">
                            Thông số kỹ thuật
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="1_0xu:u">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="oe3f:35"
                    >
                        <div className="px-6 py-8" data-oid="y9od-89">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="b3xe42-">
                                <div data-oid="mzmdxi_">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="haxhxrn"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="lox-40h">
                                        <div className="flex items-start" data-oid="2cu7co1">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=":au5r49"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=":8gl1jq"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="2rzwcga"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="ff3jpy8">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="roc:tgk"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="ibuenmp">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="4i2s3gl">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="f-7uvk1"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="38a2kiq"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="wkrhoex"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="ww533pm">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="40fds6w"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="pch26fq">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="t_pvx_x">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="e5r287f"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="gyas:4d"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="ue_tqn6"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="kd4-923">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="lfg0ggp"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="049d6hr">
                                                    Mongo Database
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="tpvc9cv">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="2:n1p5e"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="-mnqy5t"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="mep4fa:"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="eiltjp.">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="agxb9__"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="7i3gh99">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid=":524zyk">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="n46vxpt"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid=":wnpcob">
                                        <div className="flex items-start" data-oid="omnjd0k">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="iblj:21"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="pae9_fz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="uu7he.z"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="aqfjop2">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="r7gm0w6"
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="hhe.uji">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="i9n0dtq">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="fh1xf5k"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=":xnb01o"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid=":2twpje"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="oaewxfb">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="xae6eaj"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="8vwch3f">
                                                    Viettel SMS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="ce7ujch">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="p2i:d1n"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="kl8_wpj"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="hsc.hv:"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid=".h3xdsi">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="mrflnif"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="d5:hmur">
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

            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="4bkf-d0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="uwh4f_q">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="-c95jfg">
                        <div data-oid="qwumqhd">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="j57_r.s">
                                smartEdu
                            </div>
                            <p className="mb-4" data-oid="f.tm33x">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="rgiw3-o">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="fn-ujkt"
                                >
                                    <span className="sr-only" data-oid="jec_l7-">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="9elr3c_"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="jye46cu"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="1zawly:"
                                >
                                    <span className="sr-only" data-oid="y7fnqyo">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="zvxmig7"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="pxbxn4l"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="im61yo9">
                            <h3 className="text-white font-medium mb-4" data-oid="mun9s21">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="_yxvyh-">
                                <li data-oid="rx.6236">
                                    <a href="#" className="hover:text-white" data-oid="bae61z0">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="vo90w:q">
                                    <a href="#" className="hover:text-white" data-oid="dey7z0r">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="ffcd8pg">
                                    <a href="#" className="hover:text-white" data-oid="4n3xhir">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="scsixzi">
                                    <a href="#" className="hover:text-white" data-oid="3433:2k">
                                        Giao tiếp  đa kênh
                                    </a>
                                </li>
                                <li data-oid="3niz_.:">
                                    <a href="#" className="hover:text-white" data-oid="mpfouj_">
                                        Báo cáo kết quả học tập
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="uwd5ro4">
                            <h3 className="text-white font-medium mb-4" data-oid="nbe:plr">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="j9j9yix">
                                <li data-oid="o32bmrw">
                                    <a href="#" className="hover:text-white" data-oid="3kwtt-5">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="dzkegxx">
                                    <a href="#" className="hover:text-white" data-oid="oj4bw69">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="hlne-t2">
                                    <a href="#" className="hover:text-white" data-oid="-ckyovp">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="6ri72h4">
                                    <a href="#" className="hover:text-white" data-oid="tyap15m">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="lm:xs2p">
                                    <a href="#" className="hover:text-white" data-oid="pwahj.7">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="th9fs2o">
                            <h3 className="text-white font-medium mb-4" data-oid="k7rpgr.">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="jv..1-d">
                                <li className="flex items-start" data-oid="840xbzr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=".9cn1qa"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="0rha9e7"
                                        />
                                    </svg>
                                    <span data-oid="yfzc230">contact@smartEdu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="p373f28">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ecjbdot"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid=":a7tspk"
                                        />
                                    </svg>
                                    <span data-oid="q.6i5no">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="cks3sca">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="lpnif9s"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="snosqmf"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="lw6p6as"
                                        />
                                    </svg>
                                    <span data-oid="zbht3p.">Phu Hoa Town, GiaLai, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="mwe9znx"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="uqzvqq-">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="k2kdg:y">
                            <a href="#" className="hover:text-white" data-oid="mr4vpci">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="cyi.g6m">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="ibera1j">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
