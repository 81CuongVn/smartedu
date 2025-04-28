'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800"
            data-oid="fomiev-"
        >
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="bdezwan">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":j5.ax.">
                    <div className="flex justify-between items-center py-4" data-oid="gd0:ad4">
                        <div className="flex items-center" data-oid="fnzf7cf">
                            <div className="text-blue-700 font-bold text-2xl" data-oid="dleol.g">
                                smartEdu
                            </div>
                            <div className="ml-2 text-blue-500 text-sm" data-oid="gsa17b9">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="rfiru5m">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="hp5pssp"
                            >
                                Features
                            </a>
                            <a
                                href="#technical"
                                className="text-gray-600 hover:text-blue-700"
                                data-oid="qapqkgw"
                            >
                                Technical
                            </a>
                        </nav>
                        <div className="flex space-x-4" data-oid="d9vhibp">
                            <button
                                onClick={() => router.push('/login')}
                                className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
                                data-oid="ejwzym6"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => router.push('/signup')}
                                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                data-oid="msqn7s."
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className={`py-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid=".6zhk4r"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="0_jxkl9">
                    <div className="lg:flex items-center" data-oid="a69i7vz">
                        <div className="lg:w-1/2 mb-10 lg:mb-0" data-oid="nrq8e2z">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]"
                                data-oid="c763ldi"
                            >
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8" data-oid="ir03gfb">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="dbcq7x.">
                                <button
                                    className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                                    data-oid="m6of6tg"
                                >
                                    Dùng thử miễn phí
                                </button>
                                <button
                                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    data-oid="3ypkqu0"
                                >
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500" data-oid="kxsobe5">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12" data-oid="2:pw3e_">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="_qlsy0j"
                            >
                                <div className="flex items-center mb-4" data-oid="6f_63w3">
                                    <div
                                        className="h-3 w-3 rounded-full bg-red-500 mr-2"
                                        data-oid="j_ea2h_"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                                        data-oid="::3wwxe"
                                    ></div>
                                    <div
                                        className="h-3 w-3 rounded-full bg-green-500"
                                        data-oid="-fr3zwn"
                                    ></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4" data-oid="5eu9252">
                                    <div className="font-medium" data-oid="7h-vd99">
                                        Student Dashboard
                                    </div>
                                    <div
                                        className="text-xs text-gray-500 rounded-[297px] static"
                                        data-oid="ev:n6zv"
                                    >
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3" data-oid="6u6w_ja">
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="ffd0zel"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="jm422_s"
                                            >
                                                Điểm danh
                                            </div>
                                            <div className="text-lg font-medium" data-oid="6o93l5r">
                                                98.5%
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="lqhx4_o"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="9sys60y"
                                            >
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium" data-oid="ohu:9f8">
                                                8.7/10
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="kf2vae5"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="4t.el4y"
                                            >
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="hajhtf0">
                                                2
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-3 rounded shadow-sm"
                                            data-oid="9co7skk"
                                        >
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid=":phesfx"
                                            >
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium" data-oid="5_o.p26">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                    data-oid="dcp:k7z"
                                >
                                    <div className="text-sm text-blue-700" data-oid="4xz0plg">
                                        QR Check-in Ready
                                    </div>
                                    <div
                                        className="h-16 w-16 bg-white p-1 rounded"
                                        data-oid="1b2emcm"
                                    >
                                        <div
                                            className="h-full w-full bg-gray-200 rounded"
                                            data-oid="jpnu7a3"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white" data-oid=".x4hj2s">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ldes11_">
                    <div className="text-center mb-16" data-oid="cf.zu0-">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="z1pn8nc">
                            Các chức năng chính
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="irt4ber">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="zsdt:oh">
                        {/* Feature 1 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="0z0h4_v"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="4apt.x9"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="yu1xhgs"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="s0zzd:o"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="2x7gquz">
                                Quản lý hồ sơ số
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="cjl97kw">
                                <li className="flex items-start" data-oid="5is3gz.">
                                    <span className="text-blue-500 mr-2" data-oid="9yo8k56">
                                        •
                                    </span>
                                    Hồ sơ học sinh
                                </li>
                                <li className="flex items-start" data-oid="x.ioj1s">
                                    <span className="text-blue-500 mr-2" data-oid="u_5okoj">
                                        •
                                    </span>
                                    Hồ sơ giáo viên
                                </li>
                                <li className="flex items-start" data-oid="9rx39jq">
                                    <span className="text-blue-500 mr-2" data-oid="1y08k0z">
                                        •
                                    </span>
                                    Theo dõi tiến trình học tập
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="89qbqre"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="gabae0o"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="fwu.7_n"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="ov4nguq"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="2tctqcb">
                                Điểm danh thông minh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="47qmy_d">
                                <li className="flex items-start" data-oid="5aefnpo">
                                    <span className="text-blue-500 mr-2" data-oid="9ceyq85">
                                        •
                                    </span>
                                    Điểm danh bằng QR-code
                                </li>
                                <li className="flex items-start" data-oid="kw-i2se">
                                    <span className="text-blue-500 mr-2" data-oid="9w2cfl:">
                                        •
                                    </span>
                                    Nhận diện khuôn mặt
                                </li>
                                <li className="flex items-start" data-oid="tbf_ak6">
                                    <span className="text-blue-500 mr-2" data-oid="wi:aq_5">
                                        •
                                    </span>
                                    Phát hiện học sinh vắng gửi cảnh báo sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid=":63gcdj"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="dz-gdpy"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="4ia:62b"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="w7cz9vu"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid=".fm_wbx">
                                Hệ thống chấm điểm
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="dklwd.p">
                                <li className="flex items-start" data-oid="a5.02z4">
                                    <span className="text-blue-500 mr-2" data-oid="m6-ofqo">
                                        •
                                    </span>
                                    Chấm điểm theo quy định của bộ GD&ĐT
                                </li>
                                <li className="flex items-start" data-oid="a01t_j5">
                                    <span className="text-blue-500 mr-2" data-oid="tamk742">
                                        •
                                    </span>
                                    Sổ điểm điện tử
                                </li>
                                <li className="flex items-start" data-oid="q94honi">
                                    <span className="text-blue-500 mr-2" data-oid="7h2tonc">
                                        •
                                    </span>
                                    Tạo bảng điểm tổng kết
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="685ohr1"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ndnlarj"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":5xxu_k"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        data-oid="3pzrthj"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="4ejfe-v">
                                Giao tiếp đa kênh
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="4cc2d-a">
                                <li className="flex items-start" data-oid="aw2:qg6">
                                    <span className="text-blue-500 mr-2" data-oid="okqo9sb">
                                        •
                                    </span>
                                    Thông qua sms phụ huynh
                                </li>
                                <li className="flex items-start" data-oid="qovs7cn">
                                    <span className="text-blue-500 mr-2" data-oid="bdspjgk">
                                        •
                                    </span>
                                    Chatbot Zalo OA tích hợp
                                </li>
                                <li className="flex items-start" data-oid="s2atipx">
                                    <span className="text-blue-500 mr-2" data-oid="7q1e1_1">
                                        •
                                    </span>
                                    Hệ thông thông báo khẩn cấp sms
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="xvmtif8"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid=":xv_-d6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="i:uosij"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid=".o_cr4n"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="obeqrps">
                                Báo cáo
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="1jp2ojt">
                                <li className="flex items-start" data-oid="p5ns4yv">
                                    <span className="text-blue-500 mr-2" data-oid="s3e9sys">
                                        •
                                    </span>
                                    Tạo báo cáo kết quả học tập hàng tháng
                                </li>
                                <li className="flex items-start" data-oid="t:es-b1">
                                    <span className="text-blue-500 mr-2" data-oid="t70_0c7">
                                        •
                                    </span>
                                    Bảng điều khiển thời gian thực
                                </li>
                                <li className="flex items-start" data-oid="fyrpi-6">
                                    <span className="text-blue-500 mr-2" data-oid="-t0-wp3">
                                        •
                                    </span>
                                    Phân tích kết quả học tập
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div
                            className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md"
                            data-oid="dtu8_hx"
                        >
                            <div
                                className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                                data-oid="ua671ot"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="gjfvvgs"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        data-oid="nowi1rn"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="hcs80si">
                                AI
                            </h3>
                            <ul className="text-gray-600 space-y-2" data-oid="vdhm3nf">
                                <li className="flex items-start" data-oid="dg-4-sj">
                                    <span className="text-blue-500 mr-2" data-oid="om2c:7a">
                                        •
                                    </span>
                                    Nhận diện chữ viết tay để chấm điểm
                                </li>
                                <li className="flex items-start" data-oid="9pcrkc1">
                                    <span className="text-blue-500 mr-2" data-oid="6j1p5md">
                                        •
                                    </span>
                                    Gợi ý kế hoạch học tập thông minh
                                </li>
                                <li className="flex items-start" data-oid="89-ij8_">
                                    <span className="text-blue-500 mr-2" data-oid="yaqem.r">
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
            <section id="technical" className="py-16 bg-gray-50" data-oid="q5e61uf">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".0ipn6g">
                    <div className="text-center mb-16" data-oid="kj2t7_s">
                        <h2 className="text-3xl font-bold text-gray-900" data-oid="2r6t3y-">
                            Thông số kỹ thuật
                        </h2>
                        <p className="mt-4 text-xl text-gray-600" data-oid="71rupoh">
                            Xây dựng với công nghệ hiện đại để đảm bảo độ tin cậy và hiệu suất cao
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        data-oid="h-ti1g."
                    >
                        <div className="px-6 py-8" data-oid="19jb:f_">
                            <div className="grid md:grid-cols-2 gap-8" data-oid="9je:--e">
                                <div data-oid="51c5adu">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="xsjyz.6"
                                    >
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4" data-oid="72m3.ig">
                                        <div className="flex items-start" data-oid="xdmsy8t">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="pv7zqw-"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="7-hranc"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        data-oid="r7onk.n"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="g_b1573">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="pca3p56"
                                                >
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600" data-oid="a3937j5">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="yelk5y6">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="0xxyjix"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="eqp__1q"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                        data-oid="5d6hgjn"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="8h86iof">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid=":vjzrs_"
                                                >
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600" data-oid="wa1a5fh">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="f34.vv.">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="vnabmdm"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid=".v4zq09"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                        data-oid="jsi3zp2"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="f6atekb">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid=":jdjaj_"
                                                >
                                                    Database
                                                </h4>
                                                <p className="text-gray-600" data-oid="td3fpg0">
                                                    Mongo Database
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="1zz4.j6">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="asx8_uz"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="2uq9dbk"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        data-oid="i.us3qz"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="s6_:_o3">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="4.0xfjy"
                                                >
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600" data-oid="tp2w40a">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="q2e7rpd">
                                    <h3
                                        className="text-xl font-semibold mb-4 text-gray-900"
                                        data-oid="dvlyye3"
                                    >
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4" data-oid="wrkc:o-">
                                        <div className="flex items-start" data-oid="nd96cuz">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="v4g6dsu"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="wfob1vy"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        data-oid="9uwrctz"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="i_.8pwu">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid=".crno-."
                                                >
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600" data-oid="_n3nr3.">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="a4rx9x_">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid=":hqz4a9"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="jyd-5uv"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        data-oid="n56zt7q"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="0l1u_s7">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="-m-i6z-"
                                                >
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600" data-oid="04f1ram">
                                                    Viettel SMS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start" data-oid="-_yq4xi">
                                            <div
                                                className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                                                data-oid="w7y.6q7"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="q4g.ack"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                        data-oid="3a1e0ct"
                                                    />
                                                </svg>
                                            </div>
                                            <div data-oid="9lzujx2">
                                                <h4
                                                    className="font-medium text-gray-900"
                                                    data-oid="mc7wym9"
                                                >
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600" data-oid="_9oewgw">
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

            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="66dd1d:">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="uh87t6c">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="xab.2du">
                        <div data-oid="eawy62i">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="_01ksw8">
                                smartEdu
                            </div>
                            <p className="mb-4" data-oid="85u18sm">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex space-x-4" data-oid="l7w2v9e">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="68dqhjc"
                                >
                                    <span className="sr-only" data-oid="2a...uh">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="s6p2snm"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="0pw0sr7"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="y95fel5"
                                >
                                    <span className="sr-only" data-oid="hela8ju">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="p0p._vo"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="9afu.lo"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="ekec_pq">
                            <h3 className="text-white font-medium mb-4" data-oid="823.g_p">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="ne70uwn">
                                <li data-oid="6.9y_ox">
                                    <a href="#" className="hover:text-white" data-oid="x6tir6k">
                                        Quản lý hồ sơ số
                                    </a>
                                </li>
                                <li data-oid="v1c3v49">
                                    <a href="#" className="hover:text-white" data-oid="c0ok8pa">
                                        Điểm danh thông minh
                                    </a>
                                </li>
                                <li data-oid="9hbdg0y">
                                    <a href="#" className="hover:text-white" data-oid="c9mz1sq">
                                        Hệ thống chấm điểm
                                    </a>
                                </li>
                                <li data-oid="q7tlm4d">
                                    <a href="#" className="hover:text-white" data-oid="7m0ydh5">
                                        Giao tiếp  đa kênh
                                    </a>
                                </li>
                                <li data-oid="asenkk2">
                                    <a href="#" className="hover:text-white" data-oid="k_dbuti">
                                        Báo cáo kết quả học tập
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="waltn4_">
                            <h3 className="text-white font-medium mb-4" data-oid="2ppwj9f">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="-hqny2x">
                                <li data-oid="1bjy-wd">
                                    <a href="#" className="hover:text-white" data-oid="j2rbulg">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="ilshw2x">
                                    <a href="#" className="hover:text-white" data-oid="d:drul_">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="d0d4xrj">
                                    <a href="#" className="hover:text-white" data-oid="wuv2paz">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="iv33x1u">
                                    <a href="#" className="hover:text-white" data-oid="n6m19fi">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="9_nu3:s">
                                    <a href="#" className="hover:text-white" data-oid="3w6h692">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="yd8x_:c">
                            <h3 className="text-white font-medium mb-4" data-oid="555dhgj">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid="p3e7_13">
                                <li className="flex items-start" data-oid="5empt_m">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="-pot181"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="zcousq2"
                                        />
                                    </svg>
                                    <span data-oid="kzob5jo">contact@smartEdu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid="8kbd6::">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="zap51px"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="5yjsl_8"
                                        />
                                    </svg>
                                    <span data-oid="5ebuoz8">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="h2k4b6p">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="5uk2tpu"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="pzwtp5a"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="uco0h25"
                                        />
                                    </svg>
                                    <span data-oid="z1ik0:j">Phu Hoa Town, GiaLai, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="44f2.bk"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="b1uiw4l">
                            © 2025 smartEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="wcqm1i0">
                            <a href="#" className="hover:text-white" data-oid="3-0js9p">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid=":3bfbq1">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="yefs43n">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
