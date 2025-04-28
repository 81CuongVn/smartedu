'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <div className="text-blue-700 font-bold text-2xl">smartEdu</div>
                            <div className="ml-2 text-blue-500 text-sm">
                                Hệ thông quản lý trường học thông minh
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-blue-700">
                                Features
                            </a>
                            <a href="#technical" className="text-gray-600 hover:text-blue-700">
                                Technical
                            </a>
                            <a href="#security" className="text-gray-600 hover:text-blue-700">
                                Security
                            </a>
                            <a href="#compliance" className="text-gray-600 hover:text-blue-700">
                                Compliance
                            </a>
                        </nav>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition">
                                Log In
                            </button>
                            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className={`py-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight mb-6 h-[107px] w-[519px]">
                                Giải Pháp Quản Lý Giáo Dục Thông Minh
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Hệ Thống Quản Lý Trường Học Thông Minh 4.0 - Chuẩn Hóa & Tối Ưu Trải
                                Nghiệm(Đạt chuẩn Bộ GD&ĐT, tích hợp AI và xử lý dữ liệu thời gian
                                thực)
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
                                    Dùng thử miễn phí
                                </button>
                                <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                                    Đặt lịch tư vấn
                                </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500">
                                Smart Education Management System
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <div className="font-medium">Student Dashboard</div>
                                    <div className="text-xs text-gray-500 rounded-[297px] static">
                                        Học kỳ 1, 2023-2024
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <div className="text-xs text-gray-500">Điểm danh</div>
                                            <div className="text-lg font-medium">98.5%</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <div className="text-xs text-gray-500">
                                                Điểm trung bình
                                            </div>
                                            <div className="text-lg font-medium">8.7/10</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <div className="text-xs text-gray-500">
                                                Số bài kiểm tra sắp tới
                                            </div>
                                            <div className="text-lg font-medium">2</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <div className="text-xs text-gray-500">
                                                Thông báo mới
                                            </div>
                                            <div className="text-lg font-medium">5</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                                    <div className="text-sm text-blue-700">QR Check-in Ready</div>
                                    <div className="h-16 w-16 bg-white p-1 rounded">
                                        <div className="h-full w-full bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Các chức năng chính</h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Ứng dụng được thiết kế toàn diện dành do hệ thống giáo dục Việt Nam
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quản lý hồ sơ số</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Student profiles with 20+ data fields
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Teacher portfolios with certifications
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Automated academic progression tracking
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Điểm danh thông minh</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    QR code classroom check-ins
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Facial recognition for exam supervision
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Absence pattern detection with SMS alerts
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Grading System</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    MOET-compliant score calculation
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Digital gradebook with error-checking
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Official transcript generator (PDF/A-2)
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Multi-channel Communication
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Parent mobile app with e-signature
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Integrated Zalo OA chatbot
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Emergency broadcast system
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">MOET Reporting</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Auto-generated 03/BGD monthly reports
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Real-time dashboard for key metrics
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Historical data comparison (3-year trends)
                                </li>
                            </ul>
                        </div>

                        {/* AI Modules */}
                        <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Modules</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Handwriting recognition for test scores
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Smart recommendations for study plans
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    Dropout risk prediction analytics
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section id="technical" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Technical Specifications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Built with modern technologies for reliability and performance
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="px-6 py-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Frontend
                                                </h4>
                                                <p className="text-gray-600">
                                                    React + Ant Design (PWA)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Backend
                                                </h4>
                                                <p className="text-gray-600">
                                                    Node.js + NestJS (REST API)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Database
                                                </h4>
                                                <p className="text-gray-600">
                                                    PostgreSQL (TimescaleDB for analytics)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Infrastructure
                                                </h4>
                                                <p className="text-gray-600">
                                                    Vietnam-based GovCloud clusters
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        Local Integrations
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Payment Gateways
                                                </h4>
                                                <p className="text-gray-600">
                                                    ViettelPay, Momo, Bank QR
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    SMS Services
                                                </h4>
                                                <p className="text-gray-600">VNPT Brandname API</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    National Systems
                                                </h4>
                                                <p className="text-gray-600">
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
            <section id="security" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Security & Compliance</h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Meeting the highest standards for educational data protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                Security Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Vietnam Cybersecurity Law compliance (Level 4)
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Biometric data protection (ISO/IEC 19795-2)
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Role-based access control matrix
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    End-to-end encryption for all sensitive data
                                </li>
                            </ul>
                        </div>

                        <div
                            id="compliance"
                            className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-700 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                Compliance Features
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Circular 58/BGDĐT assessment rules engine
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    National diploma template integration
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Provincial holiday calendar sync
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-700 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
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
            <section className="py-16 bg-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-blue-100 text-lg mb-6">
                                Join our pilot program with 3 Hanoi public schools and experience
                                how vnEdu can reduce administrative workload by 60%.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition">
                                    Schedule Demo
                                </button>
                                <button className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5">
                            <div className="bg-blue-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Deployment Notes</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
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
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-white font-bold text-2xl mb-4">vnEdu</div>
                            <p className="mb-4">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">YouTube</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-4">Features</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Grading System
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Communication
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        API Reference
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Training Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span>+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span>Cầu Giấy District, Hanoi, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm mb-4 md:mb-0">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
                          <button
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                                    data-oid="gq:nftp"
                                >
                                    Schedule Demo
                                </button>
                                <button
                                    className="px-6 py-3 border border-white rounded-md hover:bg-blue-600 transition"
                                    data-oid=".cgthbl"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/5" data-oid="xjtgdj0">
                            <div className="bg-blue-800 rounded-xl p-6" data-oid="6lrh-4e">
                                <h3 className="text-xl font-semibold mb-4" data-oid="-gqmf_5">
                                    Deployment Notes
                                </h3>
                                <ul className="space-y-3" data-oid="ndqz00s">
                                    <li className="flex items-start" data-oid="xuja-k2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jn3h2ny"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qgiih-8"
                                            />
                                        </svg>
                                        Phase 1: Pilot in 3 Hanoi public schools
                                    </li>
                                    <li className="flex items-start" data-oid="n-_vsw9">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="axffm.k"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="rog2l.a"
                                            />
                                        </svg>
                                        Scalability: Support 50k+ concurrent users
                                    </li>
                                    <li className="flex items-start" data-oid="_6:6e3l">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ew9_g9d"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="o2nqd4s"
                                            />
                                        </svg>
                                        Localization: Vietnamese UI + English export docs
                                    </li>
                                    <li className="flex items-start" data-oid="h:iu8.4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="klitjie"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="3rn8_yf"
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
            <footer className="bg-gray-900 text-gray-400 py-12" data-oid="egeccqc">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="133.jd3">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="1h2wz3e">
                        <div data-oid="f1n5z6g">
                            <div className="text-white font-bold text-2xl mb-4" data-oid="nju_gkn">
                                vnEdu
                            </div>
                            <p className="mb-4" data-oid="9upcq3w">
                                Transforming education management for Vietnamese schools with
                                MOET-compliant solutions.
                            </p>
                            <div className="flex space-x-4" data-oid="k.-2m1v">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="ns2a1ft"
                                >
                                    <span className="sr-only" data-oid="ml_gki3">
                                        Facebook
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="00snxbr"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="v_v-79i"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="s6500re"
                                >
                                    <span className="sr-only" data-oid="2xvtl8:">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ynvyjnw"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clipRule="evenodd"
                                            data-oid="sqqfucj"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="jjij784">
                            <h3 className="text-white font-medium mb-4" data-oid="s82aytc">
                                Features
                            </h3>
                            <ul className="space-y-2" data-oid="qx06rp_">
                                <li data-oid="n292on1">
                                    <a href="#" className="hover:text-white" data-oid="ti:jw37">
                                        Digital Profiles
                                    </a>
                                </li>
                                <li data-oid="legbmh9">
                                    <a href="#" className="hover:text-white" data-oid="2xxp3yu">
                                        Smart Attendance
                                    </a>
                                </li>
                                <li data-oid="wewhzoa">
                                    <a href="#" className="hover:text-white" data-oid="r4ob0fc">
                                        Grading System
                                    </a>
                                </li>
                                <li data-oid="c28r:ns">
                                    <a href="#" className="hover:text-white" data-oid="x2g76gb">
                                        Communication
                                    </a>
                                </li>
                                <li data-oid="3-zzh9o">
                                    <a href="#" className="hover:text-white" data-oid="aw5ycyx">
                                        MOET Reporting
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="fnqt3wb">
                            <h3 className="text-white font-medium mb-4" data-oid="i-6r-w6">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="s90yf76">
                                <li data-oid="fb8r0w5">
                                    <a href="#" className="hover:text-white" data-oid="r.70leg">
                                        Documentation
                                    </a>
                                </li>
                                <li data-oid="r.fcx2b">
                                    <a href="#" className="hover:text-white" data-oid=":n7z11l">
                                        API Reference
                                    </a>
                                </li>
                                <li data-oid="auqxjhv">
                                    <a href="#" className="hover:text-white" data-oid="p-902p9">
                                        Training Videos
                                    </a>
                                </li>
                                <li data-oid="lky:uer">
                                    <a href="#" className="hover:text-white" data-oid="pe22wxo">
                                        MOET Guidelines
                                    </a>
                                </li>
                                <li data-oid="9216ufn">
                                    <a href="#" className="hover:text-white" data-oid="avlp9l2">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="6x_t:wk">
                            <h3 className="text-white font-medium mb-4" data-oid="j48g27u">
                                Contact
                            </h3>
                            <ul className="space-y-2" data-oid=".:t.soc">
                                <li className="flex items-start" data-oid="wur.:zh">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="axtp_7l"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="nv4vwvy"
                                        />
                                    </svg>
                                    <span data-oid="mm10fji">contact@vnedu.vn</span>
                                </li>
                                <li className="flex items-start" data-oid=".op:uzz">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="u1plj2w"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="zatq_t5"
                                        />
                                    </svg>
                                    <span data-oid="m5i07v6">+84 (24) 3795 7855</span>
                                </li>
                                <li className="flex items-start" data-oid="t..5cxc">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ngm7zoy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="kjj5x.t"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="mgyus4l"
                                        />
                                    </svg>
                                    <span data-oid="cxz49ef">
                                        Cầu Giấy District, Hanoi, Vietnam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="90833b8"
                    >
                        <div className="text-sm mb-4 md:mb-0" data-oid="3gs_wow">
                            © 2023 vnEdu. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm" data-oid="yyr5ilc">
                            <a href="#" className="hover:text-white" data-oid="j1hjoh3">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white" data-oid="_gmc4v-">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white" data-oid="qst0819">
                                Data Protection
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
