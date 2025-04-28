'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'smartEdu',
    description: 'Author: @Dang Khoi',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="zl0d69s">
            <body className={inter.className} data-oid="2an6_wn">
                <AuthProvider data-oid="gt349.9">{children}</AuthProvider>
            </body>
        </html>
    );
}
